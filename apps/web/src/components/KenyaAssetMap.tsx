'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { Asset } from '@salamanda/shared-types';
import { formatKES, formatSectorLabel } from '../lib/formatters';
import {
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  Minimize2,
  Layers,
  Compass,
} from 'lucide-react';

interface KenyaAssetMapProps {
  assets: Asset[];
  compact?: boolean;
  className?: string;
}

// Coordinates map for assets to guarantee every entity has precise real coordinates
const ASSET_COORDINATES: Record<string, [number, number]> = {
  'mumias-sugar': [0.3344, 34.4872], // Mumias, Kakamega
  'nakumatt': [-1.2997, 36.7624], // Junction Mall, Nairobi
  'bamburi-cement': [-4.0156, 39.7128], // Bamburi, Mombasa
  'pan-paper': [0.5983, 34.7733], // Webuye, Bungoma
  'chemelil': [-0.0886, 35.1386], // Chemelil, Kisumu
  'karuturi': [-0.7715, 36.3812], // South Lake Road, Naivasha
  'mobius-motors': [-1.3255, 36.8378], // Industrial Area, Nairobi
  'tuskys': [-1.2833, 36.8286], // Tom Mboya, Nairobi CBD
  'copia': [-1.1448, 36.9615], // Tatu City, Kiambu
  'chase-bank': [-1.2644, 36.8044], // Riverside, Nairobi
  'imperial-bank': [-1.2682, 36.8062], // Westlands, Nairobi
  'kicomi': [-0.0917, 34.7681], // Kisumu Industrial Node
  'safaricom': [-1.2584, 36.8043], // Waiyaki Way, Nairobi
  'equity-group': [-1.2982, 36.8158], // Upper Hill, Nairobi
  'nairobi-expressway': [-1.3192, 36.8622], // Nairobi Expressway corridor
  'sgr': [-1.3853, 36.9242], // SGR Terminus, Syokimau
  'lake-turkana': [2.7562, 36.8114], // Loiyangalani, Marsabit
  'upper-hill': [-1.2989, 36.8142], // Upper Hill, Nairobi
  'westlands': [-1.2644, 36.8044], // Westlands commercial node
  'ruaka': [-1.2056, 36.7778], // Northern Bypass, Kiambu
  'athi-river': [-1.4552, 36.9834], // Athi River SEZ, Machakos
  'naivasha-sez': [-0.8417, 36.4333], // Olkaria Geothermal SEZ, Nakuru
  'devki': [-1.0333, 37.0667], // Ruiru / Thika industrial belt
  'bidco': [-1.1448, 36.9615], // Thika industrial park
  'siginon': [-4.0435, 39.6682], // Shimanzi, Mombasa Port
  'ncba': [-1.2995, 36.8182], // Upper Hill, Nairobi
  'brookside': [-1.1398, 36.9587], // Ruiru, Kiambu
  'naivas': [-1.3128, 36.8524], // Sameer Park, Nairobi
};

export function KenyaAssetMap({
  assets,
  compact = false,
  className = '',
}: KenyaAssetMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersGroupRef = useRef<any>(null);
  const [activeSector, setActiveSector] = useState<string>('ALL');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter assets that have real coordinates
  const mappedAssets = useMemo(() => {
    return assets
      .map((a) => {
        const coords =
          a.coordinates
            ? [a.coordinates.lat, a.coordinates.lng]
            : ASSET_COORDINATES[a.slug] || [-1.286389, 36.817223];
        return {
          ...a,
          coords: coords as [number, number],
        };
      })
      .filter((a) => {
        if (activeSector === 'ALL') return true;
        if (activeSector === 'DISTRESSED') {
          return ['DEFUNCT', 'LIQUIDATED', 'UNDER_RECEIVERSHIP', 'UNDER_ADMINISTRATION', 'DISTRESSED'].includes(a.status);
        }
        return a.sector === activeSector;
      });
  }, [assets, activeSector]);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    let isMounted = true;

    // Dynamically import Leaflet on client-side
    import('leaflet').then((L) => {
      if (!isMounted || !mapContainerRef.current) return;

      // Import Leaflet CSS dynamically if not yet attached
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Initialize map instance if not already created
      if (!mapInstanceRef.current) {
        const defaultCenter: [number, number] = compact
          ? [-0.5, 36.8] // Centered for Kenya corridor
          : [0.2, 37.5]; // Whole Kenya center

        const map = L.map(mapContainerRef.current, {
          center: defaultCenter,
          zoom: compact ? 6 : 7,
          minZoom: 5,
          maxZoom: 16,
          zoomControl: !compact,
          attributionControl: false,
        });

        // Use CartoDB Positron tiles: crisp, calm, minimal, perfect institutional match
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          maxZoom: 19,
          subdomains: 'abcd',
        }).addTo(map);

        markersGroupRef.current = L.layerGroup().addTo(map);
        mapInstanceRef.current = map;
      }

      // Update markers
      if (markersGroupRef.current) {
        markersGroupRef.current.clearLayers();

        mappedAssets.forEach((asset) => {
          const isDistressed =
            ['DEFUNCT', 'LIQUIDATED', 'UNDER_RECEIVERSHIP', 'UNDER_ADMINISTRATION', 'DISTRESSED'].includes(asset.status);
          const color =
            asset.status === 'ACTIVE'
              ? '#059669' // emerald
              : isDistressed
              ? '#d97706' // amber/rose
              : '#64748b'; // slate

          // Crisp SVG Pin marker
          const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `
              <div style="
                background: ${color};
                width: ${compact ? '12px' : '16px'};
                height: ${compact ? '12px' : '16px'};
                border-radius: 50%;
                border: 2px solid #ffffff;
                box-shadow: 0 1px 4px rgba(0,0,0,0.3);
                cursor: pointer;
                transition: transform 0.15s ease;
              " title="${asset.name}"></div>
            `,
            iconSize: [compact ? 12 : 16, compact ? 12 : 16],
            iconAnchor: [compact ? 6 : 8, compact ? 6 : 8],
          });

          const marker = L.marker(asset.coords, { icon: customIcon });

          marker.on('click', () => {
            setSelectedAsset(asset);
          });

          marker.addTo(markersGroupRef.current);
        });
      }
    });

    return () => {
      // Don't destroy immediately on re-render to prevent flicker
    };
  }, [isClient, mappedAssets, compact]);

  const resetView = (region: 'kenya' | 'nairobi' | 'western' | 'coast') => {
    if (!mapInstanceRef.current) return;
    if (region === 'kenya') {
      mapInstanceRef.current.setView([0.2, 37.5], compact ? 6 : 7);
    } else if (region === 'nairobi') {
      mapInstanceRef.current.setView([-1.286389, 36.817223], 11);
    } else if (region === 'western') {
      mapInstanceRef.current.setView([0.1, 34.8], 9);
    } else if (region === 'coast') {
      mapInstanceRef.current.setView([-4.0435, 39.6682], 10);
    }
  };

  return (
    <div className={`relative flex flex-col bg-card border border-border rounded-lg overflow-hidden ${className}`}>
      {/* Map Control Toolbar */}
      <div className="flex items-center justify-between p-2.5 border-b border-border bg-muted/40 text-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-[10px] font-mono text-muted-foreground mr-1 hidden sm:inline">
            REGIONS:
          </span>
          <button
            type="button"
            onClick={() => resetView('kenya')}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-card border border-border hover:bg-muted text-foreground transition-colors"
          >
            All Kenya
          </button>
          <button
            type="button"
            onClick={() => resetView('nairobi')}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-card border border-border hover:bg-muted text-foreground transition-colors"
          >
            Nairobi
          </button>
          <button
            type="button"
            onClick={() => resetView('western')}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-card border border-border hover:bg-muted text-foreground transition-colors"
          >
            Western
          </button>
          <button
            type="button"
            onClick={() => resetView('coast')}
            className="px-2 py-0.5 rounded text-[10px] font-medium bg-card border border-border hover:bg-muted text-foreground transition-colors"
          >
            Coast
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
            Active
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            Distressed
          </span>
        </div>
      </div>

      {/* Leaflet Map Surface */}
      <div
        ref={mapContainerRef}
        className={`w-full ${compact ? 'h-[240px]' : 'h-[540px]'} bg-muted/20 relative z-0`}
      />

      {/* Selected Asset Interactive Bottom Drawer */}
      {selectedAsset && (
        <div className="p-3 border-t border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in duration-150">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <strong className="text-foreground text-sm font-semibold">
                {selectedAsset.name}
              </strong>
              <span className="status-badge status-active text-[9px] py-0.5">
                <span />
                {selectedAsset.status.replace(/_/g, ' ')}
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              {formatSectorLabel(selectedAsset.sector)} · {selectedAsset.county}, Kenya ·{' '}
              <span className="font-mono font-medium text-foreground">
                {formatKES(selectedAsset.currentValuationKES || selectedAsset.peakValuationKES)}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {selectedAsset.googleMapsUrl && (
              <a
                href={selectedAsset.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded border border-border text-[11px] hover:bg-muted text-foreground inline-flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink size={11} />
              </a>
            )}
            <Link
              href={`/assets/${selectedAsset.slug}`}
              className="px-2.5 py-1 rounded bg-primary text-primary-foreground font-medium text-[11px] hover:opacity-90 inline-flex items-center gap-1"
            >
              <span>Full Dossier</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

import { pgTable, varchar, text, bigint, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const assets = pgTable('assets', {
  id: varchar('id', { length: 64 }).primaryKey(),
  slug: varchar('slug', { length: 128 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  legalName: varchar('legal_name', { length: 255 }),
  assetClass: varchar('asset_class', { length: 64 }).notNull(),
  sector: varchar('sector', { length: 64 }).notNull(),
  subsector: varchar('subsector', { length: 128 }).notNull(),
  status: varchar('status', { length: 32 }).notNull(),
  county: varchar('county', { length: 64 }).notNull(),
  headquarters: varchar('headquarters', { length: 128 }),
  establishedYear: integer('established_year').notNull(),
  defunctYear: integer('defunct_year'),
  currentValuationKES: bigint('current_valuation_kes', { mode: 'number' }),
  peakValuationKES: bigint('peak_valuation_kes', { mode: 'number' }),
  debtExposureKES: bigint('debt_exposure_kes', { mode: 'number' }),
  summary: text('summary').notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const autopsies = pgTable('autopsies', {
  id: varchar('id', { length: 64 }).primaryKey(),
  assetId: varchar('asset_id', { length: 64 }).notNull().references(() => assets.id, { onDelete: 'cascade' }),
  primaryCause: varchar('primary_cause', { length: 64 }).notNull(),
  contributingFactors: jsonb('contributing_factors').notNull(),
  peakValuationKES: bigint('peak_valuation_kes', { mode: 'number' }),
  debtAtCollapseKES: bigint('debt_at_collapse_kes', { mode: 'number' }),
  jobsImpacted: integer('jobs_impacted'),
  executiveSummary: text('executive_summary').notNull(),
  forensicAnalysis: text('forensic_analysis').notNull(),
  hindrancesAndObstacles: jsonb('hindrances_and_obstacles').notNull(),
  revitalizationFeasibility: varchar('revitalization_feasibility', { length: 32 }).notNull(),
  revitalizationNarrative: text('revitalization_narrative'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const timelineEvents = pgTable('timeline_events', {
  id: varchar('id', { length: 64 }).primaryKey(),
  assetId: varchar('asset_id', { length: 64 }).notNull().references(() => assets.id, { onDelete: 'cascade' }),
  eventDate: varchar('event_date', { length: 32 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  summary: text('summary').notNull(),
  impact: varchar('impact', { length: 32 }).notNull(),
  citationId: varchar('citation_id', { length: 64 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const valuationHistory = pgTable('valuation_history', {
  id: varchar('id', { length: 64 }).primaryKey(),
  assetId: varchar('asset_id', { length: 64 }).notNull().references(() => assets.id, { onDelete: 'cascade' }),
  recordDate: varchar('record_date', { length: 32 }).notNull(),
  valueKES: bigint('value_kes', { mode: 'number' }).notNull(),
  metricType: varchar('metric_type', { length: 64 }).notNull(),
  citationTitle: text('citation_title'),
  citationUrl: text('citation_url'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const citations = pgTable('citations', {
  id: varchar('id', { length: 64 }).primaryKey(),
  targetType: varchar('target_type', { length: 32 }).notNull(),
  targetId: varchar('target_id', { length: 64 }).notNull(),
  title: text('title').notNull(),
  publisher: varchar('publisher', { length: 128 }).notNull(),
  publicationDate: varchar('publication_date', { length: 32 }).notNull(),
  url: text('url').notNull(),
  tier: varchar('tier', { length: 64 }).notNull(),
  referenceNumber: varchar('reference_number', { length: 128 }),
  keyExcerpt: text('key_excerpt').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

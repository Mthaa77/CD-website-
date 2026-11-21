// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  business: text("business").notNull().default(""),
  email: text("email").notNull().default(""),
  phone: text("phone").notNull().default(""),
  preferredChannel: text("preferred_channel").notNull().default("whatsapp"),
  project: text("project").notNull(),
  budget: text("budget").notNull().default(""),
  message: text("message").notNull().default(""),
  startingPoint: text("starting_point").notNull(),
  consent: integer("consent", { mode: "boolean" }).notNull().default(false),
  source: text("source").notNull().default("website-contact"),
  status: text("status").notNull().default("new"),
  twilioLeadMessageSid: text("twilio_lead_message_sid"),
  twilioOwnerMessageSid: text("twilio_owner_message_sid"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const leadEvents = sqliteTable("lead_events", {
  id: text("id").primaryKey(),
  leadId: text("lead_id").notNull(),
  type: text("type").notNull(),
  channel: text("channel").notNull().default(""),
  payload: text("payload").notNull().default("{}"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

// Aggregate funnel diagnostics. No visitor identity or submitted form content.
export const measurementEvents = sqliteTable("measurement_events", {
  id: text("id").primaryKey(),
  event: text("event").notNull(),
  page: text("page").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

// Idempotent request ownership, independent of existing lead records for safe rollback.
export const leadSubmissions = sqliteTable("lead_submissions", {
  key: text("key").primaryKey(),
  fingerprint: text("fingerprint").notNull(),
  leadId: text("lead_id").notNull(),
  context: text("context").notNull().default("{}"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
export const leadRateBuckets = sqliteTable("lead_rate_buckets", {
  key: text("key").primaryKey(),
  count: integer("count").notNull().default(0),
  expiresAt: integer("expires_at").notNull(),
});

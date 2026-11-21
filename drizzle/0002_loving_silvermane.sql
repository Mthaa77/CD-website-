CREATE TABLE `lead_rate_buckets` (
	`key` text PRIMARY KEY NOT NULL,
	`count` integer DEFAULT 0 NOT NULL,
	`expires_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `lead_submissions` (
	`key` text PRIMARY KEY NOT NULL,
	`fingerprint` text NOT NULL,
	`lead_id` text NOT NULL,
	`context` text DEFAULT '{}' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);

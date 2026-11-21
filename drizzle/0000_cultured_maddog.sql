CREATE TABLE `lead_events` (
	`id` text PRIMARY KEY NOT NULL,
	`lead_id` text NOT NULL,
	`type` text NOT NULL,
	`channel` text DEFAULT '' NOT NULL,
	`payload` text DEFAULT '{}' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`business` text DEFAULT '' NOT NULL,
	`email` text DEFAULT '' NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`preferred_channel` text DEFAULT 'whatsapp' NOT NULL,
	`project` text NOT NULL,
	`budget` text DEFAULT '' NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`starting_point` text NOT NULL,
	`consent` integer DEFAULT false NOT NULL,
	`source` text DEFAULT 'website-contact' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`twilio_lead_message_sid` text,
	`twilio_owner_message_sid` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);

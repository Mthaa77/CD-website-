CREATE TABLE `measurement_events` (
	`id` text PRIMARY KEY NOT NULL,
	`event` text NOT NULL,
	`page` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);

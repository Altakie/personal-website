import type { Skill } from "./skills";

export type Project = {
	name: string;
	description: string;
	// image_link: string;
	skills: Skill[];
	github_link: string;
	bullets?: string[];
};

export const projects: Array<Project> = [
	{
		name: "Tectonic+",
		description: "A Rust-based benchmarking suite for key-value stores.",
		skills: ["Rust", "RocksDB", "Redis", "Cassandra", "ScyllaDB"],
		github_link: "https://github.com/Altakie/tectonic_test",
		bullets: [
			"Extended an inherited workload generator into a full Rust benchmarking suite, building its execution engine and statistics collection (per-operation p95/p99 latency, throughput, success and total operation counts), profiling with flamegraphs and Valgrind to keep harness overhead off the measurement path.",
			"Measured 1.3–2.4x higher throughput and ~86% lower peak memory than YCSB, the industry-standard key-value benchmark, across all six of its core workloads with the same configuration of RocksDB and running on identically configured Chameleon Cloud bare-metal nodes.",
			"Built an algorithm that reads each workload section's declared operation mix and composes the simplest sufficient key-tracking structure from hash sets, bloom filters, and sorted or unsorted vectors.",
			"Designed a storage-engine-agnostic interface for key-value stores, implemented for four embedded, networked, and distributed databases (RocksDB, Redis, Cassandra, ScyllaDB), using static dispatch and per-database feature flags so builds pull only the drivers they need.",
		],
	},
	{
		name: "Dominion Simulator",
		description:
			"A simulator for the board game dominion. Can run multiplayer games.",
		skills: [
			"TypeScript",
			"React",
			"Zustand",
			"Hono",
			"Bun",
			"WebSockets",
			"GitHub Actions",
		],
		github_link: "https://github.com/Altakie/dominion-simulator",
		bullets: [
			"Built an authoritative multiplayer server holding all hidden state, sending each player a filtered view over WebSockets so opponents' information never reaches the client.",
			"Engineered a scheduler resolving game effects as a queue of resumable steps, sequencing nested effects and interrupts around steps that pause for player input.",
			"Built the core engine and API a collaborator implemented all 33 base-set card effects against.",
			"Implemented LLM players on the engine API, able to select only from engine-supplied legal moves.",
			"Built a 108-test suite with Claude Code covering all 33 base-set card effects, run in CI to block merges on failure.",
			"Runs ongoing 4-player games on a self-hosted server, with reconnect that restores state and re-issues pending decisions.",
		],
	},
	{
		name: "Blood on the Clocktower Fast Grimiore",
		description:
			"A online version of the Grimiore for Blood on the Clocktower designed to automatically keep track of state and resolve role effects.",
		skills: ["Rust"],
		github_link: "https://github.com/Altakie/BOTC-Fast-Grimoire",
	},
];

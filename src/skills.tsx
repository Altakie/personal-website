import {
	AzureLogo,
	BunLogo,
	CassandraLogo,
	CLogo,
	ClaudeCodeLogo,
	CSharpLogo,
	DockerLogo,
	GitHubActionsLogo,
	GitHubLogo,
	GitLogo,
	GoLogo,
	HonoLogo,
	JavaLogo,
	JavaScriptLogo,
	LinuxLogo,
	MavenLogo,
	OpenCodeLogo,
	PlaceholderLogo,
	PythonLogo,
	ReactLogo,
	RedisLogo,
	RestAPIIcon,
	RocksDBLogo,
	RustLogo,
	ScyllaDBLogo,
	SeleniumLogo,
	SQLIcon,
	TypeScriptLogo,
	WebSocketLogo,
	ZustandLogo,
} from "./icons";

const Skills = Object.freeze({
	RUST: "Rust",
	TYPESCRIPT: "TypeScript",
	PYTHON: "Python",
	JAVASCRIPT: "JavaScript",
	JAVA: "Java",
	C: "C",
	GO: "Go",
	CSHARP: "C#",
	LINUX: "Linux",
	GIT: "Git",
	GITHUB: "GitHub",
	DOCKER: "Docker",
	AZURE: "Azure Cloud",
	REST: "REST APIs",
	MAVEN: "Maven",
	SELENIUM: "Selenium",
	SQL: "SQL",
	CLAUDE_CODE: "Claude Code",
	OPENCODE: "OpenCode",
	ROCKSDB: "RocksDB",
	REDIS: "Redis",
	CASSANDRA: "Cassandra",
	SCYLLADB: "ScyllaDB",
	REACT: "React",
	ZUSTAND: "Zustand",
	HONO: "Hono",
	BUN: "Bun",
	WEBSOCKETS: "WebSockets",
	GITHUB_ACTIONS: "GitHub Actions",
});

export type Skill = (typeof Skills)[keyof typeof Skills];

const skillInfo: Record<
	Skill,
	{ color: string; Icon: React.ComponentType<{ className?: string }> }
> = {
	Rust: { color: "#ef4a00", Icon: RustLogo },
	TypeScript: { color: "#3178c6", Icon: TypeScriptLogo },
	Python: { color: "#ffd44d", Icon: PythonLogo },
	JavaScript: { color: "#f7df1e", Icon: JavaScriptLogo },
	Java: { color: "#ea2d2e", Icon: JavaLogo },
	C: { color: "#6195cb", Icon: CLogo },
	Go: { color: "#00add8", Icon: GoLogo },
	"C#": { color: "#9c75d5", Icon: CSharpLogo },
	Linux: { color: "#fcc624", Icon: LinuxLogo },
	Git: { color: "#f03c2e", Icon: GitLogo },
	GitHub: { color: "#c9d1d9", Icon: GitHubLogo },
	Docker: { color: "#2496ed", Icon: DockerLogo },
	"Azure Cloud": { color: "#0078d4", Icon: AzureLogo },
	"REST APIs": { color: "#ffffff", Icon: RestAPIIcon },
	Maven: { color: "#c71a36", Icon: MavenLogo },
	Selenium: { color: "#43b02a", Icon: SeleniumLogo },
	SQL: { color: "#00bcf2", Icon: SQLIcon },
	"Claude Code": { color: "#d97757", Icon: ClaudeCodeLogo },
	OpenCode: { color: "#818cf8", Icon: OpenCodeLogo },
	RocksDB: { color: "#f7b800", Icon: RocksDBLogo },
	Redis: { color: "#ff4438", Icon: RedisLogo },
	Cassandra: { color: "#1287b1", Icon: CassandraLogo },
	ScyllaDB: { color: "#6cd5e7", Icon: ScyllaDBLogo },
	React: { color: "#61dafb", Icon: ReactLogo },
	Zustand: { color: "#8a6d5c", Icon: ZustandLogo },
	Hono: { color: "#e36002", Icon: HonoLogo },
	Bun: { color: "#e8dcc8", Icon: BunLogo },
	WebSockets: { color: "#22c55e", Icon: WebSocketLogo },
	"GitHub Actions": { color: "#2088ff", Icon: GitHubActionsLogo },
};

export function SkillBox({ skill }: { skill: Skill }) {
	const { color, Icon: Logo } = skillInfo[skill];

	return (
		<div
			className={
				"px-2 h-2lh border rounded-full text-sm flex flex-row items-center gap-1"
			}
			style={{ color: color, borderColor: color }}
		>
			<Logo className="h-[1em] aspect-square" />
			{skill}
		</div>
	);
}

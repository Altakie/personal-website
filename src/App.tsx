import type React from "react";
import "./App.css";
import { cn } from "cn";
import type { t } from "node_modules/vite/dist/node/chunks/moduleRunnerTransport";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import {
	EmailIcon,
	GitHubLogo,
	LinkedInLogo,
	PythonLogo,
	ResumeIcon,
	RustLogo,
	TypeScriptLogo,
} from "./icons";

function App() {
	return (
		<div>
			<HomePage />
		</div>
	);
}

const Skills = Object.freeze({
	RUST: "Rust",
	TYPESCRIPT: "TypeScript",
	PYTHON: "Python",
});
type Skill = (typeof Skills)[keyof typeof Skills];

type Project = {
	name: string;
	description: string;
	// image_link: string;
	skills: Skill[];
	link: string;
};

const projects: Array<Project> = [
	{
		name: "Tectonic+",
		description: "A Rust-based benchmarking suite for key-value stores.",
		skills: ["Rust", "Python"],
		link: "",
	},
	{
		name: "Dominion Simulator",
		description:
			"A simulator for the board game dominion. Can run multiplayer games.",
		skills: ["TypeScript"],
		link: "",
	},
	{
		name: "Blood on the Clocktower Fast Grimiore",
		description:
			"A online version of the Grimiore for Blood on the Clocktower designed to automatically keep track of state and resolve role effects.",
		skills: ["Rust"],
		link: "",
	},
];

function HomePage() {
	return (
		<div className="p-4 max-w-full max-h-full">
			<p className="text-6xl text-accent font-mono font-bold">Artem Lavrov</p>
			<AboutMe />
			<Projects />
			{/* {range.map((value) => ( */}
			{/* 	<section> */}
			{/* 		<SectionHeader>{value}</SectionHeader> */}
			{/* 	</section> */}
			{/* ))} */}
			{/**/}
			<div className="fixed bottom-0 left-0 w-screen p-4 bg-background">
				<SectionSeparator />
				<div className="h-lh flex flex-row gap-4 items-center">
					<SocialLink href="https://www.linkedin.com/in/artem-lavrov-76371428b/">
						<LinkedInLogo className="h-lh aspect-square" />
						LinkedIn
					</SocialLink>
					<SocialLink href="https://github.com/Altakie">
						<GitHubLogo className="h-lh aspect-square" />
						GitHub
					</SocialLink>
					<SocialLink href="/Resume-Artem_Lavrov.pdf">
						<ResumeIcon className="h-lh aspect-square" />
						Resume
					</SocialLink>
					<SocialLink href="mailto:artemislavrov@gmail.com">
						<EmailIcon className="h-lh aspect-square" />
						Email
					</SocialLink>
					{/* <MediaLink href="#Projects">Projects</MediaLink> */}
				</div>
			</div>
		</div>
	);
}

function AboutMe() {
	return (
		<section id="About">
			<SectionHeader>About me</SectionHeader>
			<SectionSeparator />
			<div className="grid grid-cols-2 justify-center px-8 gap-4 text-description">
				<div>
					Hi I'm Artem. I recently graduated Summa Cum Laude from Brandeis
					University with a B.S. in Computer Science and a minor in mathematics.
					I received High Honors and The Jacques Cohen Award for my senior
					thesis{" "}
					<ClickableLink href="https://doi.org/10.48617/etd.1541 ">
						Tectonic+
					</ClickableLink>
					: a Rust-based benchmarking suite for key-value stores that measures
					1.3–2.4x higher throughput than YCSB, the state of the art
					benchmarking suite for key-value stores.
				</div>
				<div>
					I'm passionate about systems and working with low-level computer
					concepts, and board games. Since graduation I've been working on a
					simulator for one of my favorite board games Dominion and reading a
					textbook on C.
				</div>
			</div>
		</section>
	);
}

function Projects() {
	return (
		<section id="Projects">
			<SectionHeader>Projects</SectionHeader>
			<SectionSeparator />
			<div className="pl-8">
				<div className="relative">
					<div className="h-full absolute left-0 bg-accent w-px"></div>
					<div className="flex flex-col pl-4">
						{projects.map((project, i) => (
							<div key={project.name} className="relative">
								<div className="absolute top-5 -left-6 w-4 h-4 rounded-full border-accent border bg-background" />
								<div className="py-2">
									<ProjectInfo project={project} />
								</div>
								{i !== projects.length - 1 && <Separator />}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function ProjectInfo({ project }: { project: Project }) {
	return (
		<div className="flex flex-col gap-1">
			<p className="font-bold font-mono text-3xl">{project.name}</p>
			<p className="font-sans text-sm text-description">
				{project.description}
			</p>
			<div className="flex flex-row gap-2">
				{project.skills.map((skill) => (
					<SkillBox key={skill} skill={skill} />
				))}
			</div>
		</div>
	);
}

const skillInfo: Record<
	Skill,
	{ color: string; Logo: React.ComponentType<{ className?: string }> }
> = {
	Rust: { color: "#ef4a00", Logo: RustLogo },
	TypeScript: { color: "#3178c6", Logo: TypeScriptLogo },
	Python: { color: "#ffd44d", Logo: PythonLogo },
};

function SkillBox({ skill }: { skill: Skill }) {
	const { color, Logo } = skillInfo[skill];

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

function ClickableLink({
	children,
	href,
	className,
}: {
	children: React.ReactNode;
	href: string;
	className?: string;
}) {
	return (
		<a
			href={href}
			className={cn(className ? className : "", "text-accent underline")}
		>
			{children}
		</a>
	);
}

function SocialLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<a
			href={href}
			className="h-lh inline-flex items-center gap-1 text-xs hover:text-accent"
		>
			{children}
		</a>
	);
}

function SectionHeader({ ...props }: React.PropsWithChildren) {
	return <p className="text-4xl my-2 font-mono font-bold">{props.children}</p>;
}

function SectionBody({ ...props }: React.PropsWithChildren) {
	return <div className="pl-2">{props.children}</div>;
}

function SectionSeparator() {
	return (
		<div className="flex flex-row justify-center items-center w-full mb-4">
			<div className="bg-accent w-full h-1 rounded-md" />
		</div>
	);
}

export default App;

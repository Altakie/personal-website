import type React from "react";
import "./App.css";
import { cn } from "cn";
import { Separator } from "./components/ui/separator";
import { EmailIcon, GitHubLogo, LinkedInLogo, ResumeIcon } from "./icons";
import { type Project, projects } from "./projects";
import { type Skill, SkillBox } from "./skills";

function App() {
	return (
		<div>
			<HomePage />
			<PageFooter />
		</div>
	);
}

function PageFooter() {
	return (
		<div className="sticky bottom-0 left-0 w-screen p-4 bg-background">
			<SectionSeparator />
			<div className="h-lh flex flex-row gap-4 items-center">
				<SocialLink
					href="https://www.linkedin.com/in/artem-lavrov-76371428b/"
					aria_label="LinkedIn profile"
				>
					<LinkedInLogo className="h-lh aspect-square" />
					LinkedIn
				</SocialLink>
				<SocialLink
					href="https://github.com/Altakie"
					aria_label="GitHub profile"
				>
					<GitHubLogo className="h-lh aspect-square" />
					GitHub
				</SocialLink>
				<SocialLink
					href="/Resume-Artem_Lavrov.pdf"
					aria_label="Download resume"
				>
					<ResumeIcon className="h-lh aspect-square" />
					Resume
				</SocialLink>
				<SocialLink
					href="mailto:artemislavrov@gmail.com"
					aria_label="Send email"
				>
					<EmailIcon className="h-lh aspect-square" />
					Email
				</SocialLink>
				{/* <MediaLink href="#Projects">Projects</MediaLink> */}
			</div>
		</div>
	);
}

function HomePage() {
	return (
		<div className="p-4 max-w-full max-h-full">
			<p className="text-6xl text-accent font-mono font-bold">Artem Lavrov</p>
			<p className="text-sm font-bold font-sans text-description">NYC, NY</p>
			<AboutMe />
			<Projects />
			<SkillsSection />
		</div>
	);
}

function AboutMe() {
	return (
		<section id="About">
			<SectionHeader>About me</SectionHeader>
			<SectionSeparator />
			<div className="grid grid-cols-1 md:grid-cols-2 justify-center px-8 gap-4 text-description">
				<div>
					Hi I'm Artem. I recently graduated Summa Cum Laude from Brandeis
					University with a B.S. in Computer Science and a minor in mathematics.
					I received High Honors and The Jacques Cohen Award for my senior
					thesis{" "}
					<ClickableLink
						href="https://doi.org/10.48617/etd.1541 "
						aria_label="Tectonic+ senior thesis"
					>
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
			<div className="flex flex-row items-center gap-2">
				<p className="font-bold font-mono text-3xl">{project.name}</p>
				{project.github_link && (
					<a
						href={project.github_link}
						className="text-description hover:text-accent"
						aria-label={`${project.name} on GitHub`}
					>
						<GitHubLogo className="h-lh aspect-square" />
					</a>
				)}
			</div>
			<p className="font-sans text-sm text-description">
				{project.description}
			</p>
			<div className="flex flex-row gap-2 flex-wrap">
				{project.skills.map((skill) => (
					<SkillBox key={skill} skill={skill} />
				))}
			</div>
		</div>
	);
}

const skillGroups: Array<{ title: string; skills: Skill[] }> = [
	{
		title: "Programming Languages",
		skills: [
			"Rust",
			"Java",
			"Python",
			"TypeScript",
			"JavaScript",
			"C",
			"Go",
			"C#",
		],
	},
	{
		title: "Operating Systems",
		skills: ["Linux"],
	},
	{
		title: "Tools & Technologies",
		skills: [
			"Git",
			"GitHub",
			"Docker",
			"Azure Cloud",
			"REST APIs",
			"Maven",
			"Selenium",
			"SQL",
		],
	},
	{
		title: "AI Tools",
		skills: ["Claude Code", "OpenCode"],
	},
];

function SkillsSection() {
	return (
		<section id="Skills">
			<SectionHeader>Skills</SectionHeader>
			<SectionSeparator />
			<div className="flex flex-col gap-4 px-8 text-left">
				{skillGroups.map((group) => (
					<div key={group.title}>
						<p className="font-mono font-bold text-lg mb-2">{group.title}</p>
						<div className="flex flex-row flex-wrap gap-2">
							{group.skills.map((skill) => (
								<SkillBox key={skill} skill={skill} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function ClickableLink({
	children,
	href,
	className,
	aria_label,
}: {
	children: React.ReactNode;
	href: string;
	aria_label: string;
	className?: string;
}) {
	return (
		<a
			href={href}
			aria-label={aria_label}
			className={cn(
				className ? className : "",
				"text-accent underline hover:text-purple-500",
			)}
		>
			{children}
		</a>
	);
}

function SocialLink({
	children,
	href,
	aria_label,
}: {
	children: React.ReactNode;
	href: string;
	aria_label: string;
}) {
	return (
		<a
			href={href}
			aria-label={aria_label}
			className="h-lh inline-flex items-center gap-1 text-xs hover:text-accent"
		>
			{children}
		</a>
	);
}

function SectionHeader({ ...props }: React.PropsWithChildren) {
	return <p className="text-4xl my-2 font-mono font-bold">{props.children}</p>;
}

function SectionSeparator() {
	return (
		<div className="flex flex-row justify-center items-center w-full mb-4">
			<div className="bg-accent w-full h-1 rounded-md" />
		</div>
	);
}

export default App;

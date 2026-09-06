import type React from "react";
import "./App.css";

function App() {
	return (
		<div>
			<HomePage />
		</div>
	);
}

function HomePage() {
	const range = new Array(100).fill("Lorem");
	return (
		<div className="px-1 py-2 max-w-full max-h-full">
			<p className="text-4xl text-accent font-mono font-bold">Artem Lavrov</p>
			<section id="About">
				<SectionHeader>About me</SectionHeader>
				<SectionBody>Skeebapus</SectionBody>
			</section>
			<section id="Projects">
				<SectionHeader>Projects</SectionHeader>
			</section>
			{/* {range.map((value: string, i: number) => ( */}
			{/* 	<section key={i}> */}
			{/* 		<SectionHeader>value</SectionHeader> */}
			{/* 	</section> */}
			{/* ))} */}
			<div className="fixed bottom-0 left-0 w-screen p-2">
				<div className="h-lh flex flex-row gap-4 items-center">
					<MediaLink href="https://www.linkedin.com/in/artem-lavrov-76371428b/">
						<LinkedInLogo className="h-lh aspect-square" />
					</MediaLink>
					<MediaLink href="https://github.com/Altakie">
						<GitHubLogo className="h-lh aspect-square" />
					</MediaLink>
					<MediaLink href="/Resume-Artem_Lavrov.pdf">
						<ResumeIcon className="h-lh aspect-square" />
					</MediaLink>
					<MediaLink href="mailto:artemislavrov@gmail.com">
						<EmailIcon className="h-lh aspect-square" />
					</MediaLink>
					{/* <MediaLink href="#Projects">Projects</MediaLink> */}
				</div>
			</div>
		</div>
	);
}

function MediaLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<a href={href} className="h-lh inline-flex items-center gap-1 text-xs">
			{children}
		</a>
	);
}

function SectionHeader({ ...props }: React.PropsWithChildren) {
	return <p className="text-2xl my-2 font-mono font-bold">{props.children}</p>;
}

function SectionBody({ ...props }: React.PropsWithChildren) {
	return <div className="pl-2">{props.children}</div>;
}

function LinkedInLogo({ className }: { className?: string }) {
	return (
		<svg
			className={className ? className : ""}
			xmlns="http://www.w3.org/2000/svg"
			// width="34"
			// height="34"
			viewBox="0 0 34 34"
			role="img"
			aria-label="LinkedIn"
		>
			{/* <path */}
			{/* 	fill="#0a66c2" */}
			{/* 	d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z" */}
			{/* 	display="inline" */}
			{/* /> */}
			<path
				fill="currentColor"
				d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"
				display="inline"
			/>
		</svg>
	);
}

function GitHubLogo({ className }: { className?: string }) {
	return (
		<svg
			className={className ? className : ""}
			// width="98"
			// height="96"
			viewBox="0 0 98 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="GitHub"
		>
			<g clip-path="url(#clip0_730_27126)">
				<path
					d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_730_27126">
					<rect width="98" height="96" fill="black" />
				</clipPath>
			</defs>
		</svg>
	);
}

function EmailIcon({ className }: { className?: string }) {
	return (
		<svg
			// height="800px"
			// width="800px"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			aria-label="Email Icon"
		>
			<g>
				<path
					d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
		c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
		C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
		c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
		c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
		c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
		c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
		L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
		C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
		C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
		l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
		C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
		V385.92z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

function ResumeIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			//height="800px"
			//width="800px"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			aria-label="Resume Icon"
			fill="currentColor"
		>
			<g>
				<path
					d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
		c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"
				/>
				<path
					d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
		c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"
				/>
				<path
					d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
		h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
		c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
		c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"
				/>
			</g>
		</svg>
	);
}

export default App;

import { init } from "aos";
import { useEffect } from "react";
// @ts-ignore
import File from "react-feather/dist/icons/file";
// @ts-ignore
import GitHub from "react-feather/dist/icons/github";
// @ts-ignore
import Linkedin from "react-feather/dist/icons/linkedin";

import "./App.css";
import "aos/dist/aos.css";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Projects from "./components/projects";
import Links from "./components/links";

function App() {
	useEffect(() => {
		init({
			duration: 1200,
			easing: "ease-in-out-back",
		});
	});

	return (
		<div className="App">
			<Menu />
			<Hero />
			<section className="content">
				<Projects />
				<Links />
				{/* <div
					className="my-10 space-y-4 text-left"
					data-aos="fade-up"
					data-aos-anchor-placement="center-bottom"
				>
					<h3 className="text-lg">Useful links</h3>
					<a href="https://linkedin.com/in/david-kilson">
						<div className="flex space-x-3 p-2 items-center border border-current rounded-md">
							<div>
								<Linkedin />
							</div>
							<div>
								<h3>LinkedIn</h3>
								<p>https://linkedin.com/in/david-kilson</p>
							</div>
						</div>
					</a>
					<a href="https://github.com/kwaysi">
						<div className="flex space-x-3 p-2 items-center border border-current rounded-md">
							<div>
								<GitHub />
							</div>
							<div>
								<h3>Github</h3>
								<p>https://github.com/kwaysi</p>
							</div>
						</div>
					</a>
					<a href="https://docs.google.com/document/d/1rOlBJeUNBlFzyq3i13RTA5jwVfp4iSM5jm3yD9Hx_Xk/edit?usp=sharing">
						<div className="flex space-x-3 p-2 items-center border border-current rounded-md overflow-hidden">
							<div>
								<File />
							</div>
							<div className="flex-grow overflow-hidden">
								<h3>Resume</h3>
								<p className="truncate text-ellipsis overflow-hidden">
									https://docs.google.com/document/d/1rOlBJeUNBlFzyq3i13RTA5jwVfp4iSM5jm3yD9Hx_Xk/edit?usp=sharing
								</p>
							</div>
						</div>
					</a>
				</div> */}

				<footer className="mb-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
					<div className="tracking-wider space-y-4 mb-24">
						<p>v 0.2.0</p>
						<p className="eczar">Made with ❤️ in Lagos, Nigeria 🇳🇬</p>
					</div>
				</footer>
			</section>
		</div>
	);
}

export default App;

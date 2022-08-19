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

function App() {
	useEffect(() => {
		init({
			duration: 1200,
			easing: "ease-in-out-back",
		});
	});

	return (
		<div className="App">
			<div
				className="flex items-center justify-center my-12 lg:my-16 "
				data-aos="fade-up"
				data-aos-anchor-placement="center-bottom"
			>
				<img
					src={"/20956583.jpg"}
					className="lg:w-32 lg:h-32 w-24 h-24  object-cover rounded-full"
				/>
			</div>
			<div
				className="space-y-2 md:space-y-4"
				data-aos="fade-up"
				data-aos-anchor-placement="center-bottom"
			>
				<h2 className="text-xl md:text-2xl">Hello, I'm</h2>
				<h1 className="text-2xl md:text-4xl">Undefigned ?? David.</h1>
				<p>
					I'm a full-stack software engineer based in the Nigeria. I'm self taught and I've been
					coding since 2014. I try to make complex problems simple.
				</p>
			</div>

			<div
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
			</div>

			{/* <div className="my-10 space-x-4 text-left">
				<h3>Resources</h3>
			</div> */}
			<footer className="mb-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
				<div>
					<p>version 0.1.10</p>
					<p>
						&copy; <span className="eczar">Undefigned</span> 2022
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;

import Button from "../common/button";

export default function Hero() {
	return (
		<div className="bg w-full h-screen" id="hero">
			<div
				className="w-full grid grid-cols-2 gap-4 max-w-5xl mx-auto bg-black p-6"
				data-aos="zoom-in"
				data-aos-anchor-placement="center-bottom"
			>
				<div
					className="text-left flex items-center"
					data-aos="fade-right"
					data-aos-delay="500"
					data-aos-anchor-placement="center-bottom"
				>
					<div className="space-y-4">
						<p className="text-lg tracking-wider">Hello there, I'm</p>
						<h1 className="text-6xl font-semibold text-gold">David Kilson</h1>
						<p className="text-xl tracking-wider">
							I'm a full-stack software engineer based in the Nigeria. I'm self taught and I've been
							coding since 2014. I try to make complex problems simple.
						</p>
						<a href="mailto:itzkwaysi+portfolio@gmail.com">
							<Button>Get in touch</Button>
						</a>
					</div>
				</div>
				<div data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom">
					<img src="/hero.png" className="w-full h-full object-contain object-center" />
				</div>
			</div>
		</div>
	);
}

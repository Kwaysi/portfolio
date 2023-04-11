export default function Menu() {
	return (
		<div className="fixed bottom-4 max-w-3xl z-10 bg-black rounded-full p-1 left-1/2 -translate-x-1/2 shadow-lg border border-[#000]">
			<ul className="flex items-center">
				<a href="#hero">
					<li className="py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 hover:text-gold">
						Home
					</li>
				</a>
				<a href="#projects">
					<li className="py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 hover:text-gold">
						Projects
					</li>
				</a>
				<a href="#links">
					<li className="py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 hover:text-gold">
						Links
					</li>
				</a>
			</ul>
		</div>
	);
}

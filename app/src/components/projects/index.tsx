import { TProject, useProjects } from "../../hooks/useAPI";

export default function Projects() {
	const { data } = useProjects();

	console.log(data);

	return (
		<div className="my-16 space-y-10" id="projects">
			<h1
				className="text-5xl font-bold tracking-wider"
				data-aos="fade-up"
				data-aos-anchor-placement="center-bottom"
			>
				Projects
			</h1>
			<div className="grid grid-cols-2 gap-6">
				{data?.items?.map((project) => {
					return <Project {...project} />;
				})}
			</div>
		</div>
	);
}

const Project = ({ name, description, url }: Partial<TProject>) => {
	return (
		<div
			className="text-left space-y-6 p-8 tracking-wider"
			data-aos="fade-up"
			data-aos-anchor-placement="center-bottom"
		>
			<h2 className="text-3xl font-semibold capitalize text-gold">{name}</h2>
			<p className="">{description?.substring(0, 256)}...</p>
			<a
				href={url}
				target="_blank"
				rel="noreferrer noopener"
				className="text-lg bg-gold !text-black p-2 underline hover:scale-[1.1] origin-bottom-left flex justify-between"
			>
				<span>View project</span>
				<span>{">"}</span>
			</a>
		</div>
	);
};

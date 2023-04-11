import { TLinks, useLinks } from "../../hooks/useAPI";

export default function Links() {
	const { data } = useLinks();

	return (
		<div className="my-16 space-y-10" id="links">
			<h1 className="text-5xl font-bold tracking-wider">Resources</h1>
			<div className="grid grid-cols-2 gap-6">
				{data?.items?.map((link) => {
					return <Link {...link} />;
				})}
			</div>
		</div>
	);
}

const Link = ({ name, url }: Partial<TLinks>) => {
	return (
		<div
			className="text-left space-y-6 p-8 tracking-wider"
			data-aos="fade-up"
			data-aos-anchor-placement="center-bottom"
		>
			<a
				href={url}
				target="_blank"
				rel="noreferrer noopener"
				className="text-lg !text-gold underline"
			>
				<h2 className="text-3xl font-semibold capitalize text-gold">{name}</h2>
			</a>
		</div>
	);
};

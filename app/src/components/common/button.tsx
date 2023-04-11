type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export default function Button({ children, ...props }: Props) {
	return (
		<button
			className={`bg-gold rounded-none text-black py-2 text-lg px-6 eczar font-semibold ${props.className}`}
			{...props}
		>
			{children}
		</button>
	);
}

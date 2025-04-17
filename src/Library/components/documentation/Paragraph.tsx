import { cx } from "@/_lib/cx";

export const Paragraph = ({
	smallMarginTop = false,
	children,
	className = "",
	style = {},
}: {
	smallMarginTop?: boolean;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}) => {
	return (
		<p
			className={cx(
				smallMarginTop ? "mt-[0.8em]" : "mt-[1.5em]",
				"text-lg text-gray-700",
				className,
			)}
			style={style}
		>
			{children}
		</p>
	);
};

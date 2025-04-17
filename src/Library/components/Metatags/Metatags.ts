export const MetaTags = ({
	language,
	title,
	description,
	keywords,
	url,
	image,
}: {
	title: string;
	description: string;
	keywords: string;
	url: string;
	image: string;
	language: string;
}) => {
	return {
		title: `${title}`,
		description: description,
		keywords: keywords,
		authors: [{ name: "sendmycv.ai", url: "https://sendmycv.ai" }],
		openGraph: {
			title: title,
			description: description,
			url: url,
			siteName: "sendmycv.ai",
			images: [
				{
					url: image,
					width: 1280,
					height: 853,
				},
			],
			locale: language,
			type: "website",
		},
		alternates: { canonical: url },
		robots: {
			index: true,
			follow: true,
		},
	};
};

export default function ISOToDate(isoString: string) {
	const date: Date = new Date(isoString);
	const now: Date = new Date();
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
	const diffInMinutes = Math.floor(diffInSeconds / 60);
	const diffInHours = Math.floor(diffInMinutes / 60);
	const diffInDays = Math.floor(diffInHours / 24);

	if (diffInSeconds < 10) return "Just now";
	if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
	if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
	if (diffInHours < 24) return `${diffInHours} hours ago`;

	const yesterday = new Date();
	yesterday.setDate(now.getDate() - 1);
	if (date.toDateString() === yesterday.toDateString()) return "Yesterday";

	const weekStart = new Date();
	weekStart.setDate(now.getDate() - now.getDay());
	if (date >= weekStart) return date.toLocaleDateString(undefined, { weekday: "long" });

	return date.toLocaleDateString();
}

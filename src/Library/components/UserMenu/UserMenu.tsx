import Link from "next/link";
import { MenuItem, UserMenuWrapper } from "./UserMenu.styles";

export default function UserMenu() {
	return (
		<UserMenuWrapper>
			<Link href="/pricing">
				<MenuItem>Plans</MenuItem>
			</Link>
			<Link href="/portal">
				<MenuItem>Mange Subscription</MenuItem>
			</Link>
			<Link href="/account">
				<MenuItem>Account</MenuItem>
			</Link>
			{/*<MenuItem>*/}
			{/*	Language{" "}*/}
			{/*	<svg*/}
			{/*		width="24"*/}
			{/*		height="24"*/}
			{/*		viewBox="0 0 24 24"*/}
			{/*		fill="none"*/}
			{/*		xmlns="http://www.w3.org/2000/svg"*/}
			{/*	>*/}
			{/*		<path*/}
			{/*			d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"*/}
			{/*			fill="#292D32"*/}
			{/*		/>*/}
			{/*		<path*/}
			{/*			d="M8.99828 21.75H7.99828C7.58828 21.75 7.24828 21.41 7.24828 21C7.24828 20.59 7.56828 20.26 7.97828 20.25C6.40828 14.89 6.40828 9.11 7.97828 3.75C7.56828 3.74 7.24828 3.41 7.24828 3C7.24828 2.59 7.58828 2.25 7.99828 2.25H8.99828C9.23828 2.25 9.46828 2.37 9.60828 2.56C9.74828 2.76 9.78828 3.01 9.70828 3.24C7.82828 8.89 7.82828 15.11 9.70828 20.77C9.78828 21 9.74828 21.25 9.60828 21.45C9.46828 21.63 9.23828 21.75 8.99828 21.75Z"*/}
			{/*			fill="#292D32"*/}
			{/*		/>*/}
			{/*		<path*/}
			{/*			d="M14.9984 21.7499C14.9184 21.7499 14.8384 21.7399 14.7584 21.7099C14.3684 21.5799 14.1484 21.1499 14.2884 20.7599C16.1684 15.1099 16.1684 8.88994 14.2884 3.22994C14.1584 2.83994 14.3684 2.40994 14.7584 2.27994C15.1584 2.14994 15.5784 2.35994 15.7084 2.74994C17.6984 8.70994 17.6984 15.2699 15.7084 21.2199C15.6084 21.5499 15.3084 21.7499 14.9984 21.7499Z"*/}
			{/*			fill="#292D32"*/}
			{/*		/>*/}
			{/*		<path*/}
			{/*			d="M12 17.2C9.21 17.2 6.43 16.81 3.75 16.02C3.74 16.42 3.41 16.75 3 16.75C2.59 16.75 2.25 16.41 2.25 16V15C2.25 14.76 2.37 14.53 2.56 14.39C2.76 14.25 3.01 14.21 3.24 14.29C8.89 16.17 15.12 16.17 20.77 14.29C21 14.21 21.25 14.25 21.45 14.39C21.65 14.53 21.76 14.76 21.76 15V16C21.76 16.41 21.42 16.75 21.01 16.75C20.6 16.75 20.27 16.43 20.26 16.02C17.57 16.81 14.79 17.2 12 17.2Z"*/}
			{/*			fill="#292D32"*/}
			{/*		/>*/}
			{/*		<path*/}
			{/*			d="M20.9998 9.75011C20.9198 9.75011 20.8398 9.74011 20.7598 9.71011C15.1098 7.83011 8.87978 7.83011 3.22978 9.71011C2.82978 9.84011 2.40978 9.63011 2.27978 9.24011C2.15978 8.84011 2.36978 8.42011 2.75978 8.29011C8.71978 6.30011 15.2798 6.30011 21.2298 8.29011C21.6198 8.42011 21.8398 8.85011 21.6998 9.24011C21.6098 9.55011 21.3098 9.75011 20.9998 9.75011Z"*/}
			{/*			fill="#292D32"*/}
			{/*		/>*/}
			{/*	</svg>*/}
			{/*</MenuItem>*/}
			{/* Redirect In Logout Action */}
			<Link href="/logout">
				<MenuItem>Log out</MenuItem>
			</Link>
		</UserMenuWrapper>
	);
}

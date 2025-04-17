import Image from "next/image";
import { AddNew, AddNewTitle } from "../Documents.styles";
import add from "./../../../../../public/icons/add-w.svg";

export default function AddNewButton({ title, text }: { title: string; text: string }) {
	return (
		<AddNew>
			<AddNewTitle>
				<Image src={add} alt="" />
				{title}
			</AddNewTitle>
			<p>{text}</p>
		</AddNew>
	);
}

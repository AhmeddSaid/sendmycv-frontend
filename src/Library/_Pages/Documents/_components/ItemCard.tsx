import Link from "next/link";
import {
	CardBtnHolder,
	CreatedAt,
	EditedDate,
	ItemHolder,
	ResumeNameHolder,
} from "../Documents.styles";
import copy from "./../../../../../public/icons/copy.svg";
import view from "./../../../../../public/icons/document-view.svg";
import editPen from "./../../../../../public/icons/edit-2.svg";
import trash from "./../../../../../public/icons/trash.svg";
import CardButton from "./CardButton";
import { Flex } from "@/Library/Grids/Grids";
import ISOToDate from "@/Library/Utils/ISOToDate";

export default function ItemCard({
	editDate,
	createdAt,
	name: resumeName,
	reference,
	type,
	duplicateAction,
	deleteAction,
}: {
	editDate: string;
	createdAt: string;
	name: string;
	reference: string;
	type: "CV" | "COVERLETTER";
	duplicateAction: () => void;
	deleteAction: () => void;
}) {
	return (
		<>
			<ItemHolder>
				{/*<ItemImage>*/}
				{/*	<Image src={img} alt="file image" width={240} height={339} />*/}
				{/*</ItemImage>*/}
				<Flex $direction="column" $width="17.25rem" $align="flex-start" $height="339px">
					<ResumeNameHolder>
						<span>{resumeName}</span>
					</ResumeNameHolder>

					<EditedDate>Edited {ISOToDate(editDate)}</EditedDate>
					<CardBtnHolder
						$wrap="wrap"
						$gap="0.688rem"
						$padding="0.75rem 0"
						$borderWidth="1px 0"
						$borderColor="#FFFFFF33"
						$width="100%"
						$margin="1.5rem 0"
					>
						<Link href={type === "CV" ? `/cv/${reference}` : `/cover/${reference}`}>
							<CardButton text="Edit" icon={editPen} />
						</Link>

						<CardButton text="Duplicate" icon={copy} onClick={() => duplicateAction()} />
						<Link href={"/documents/" + reference}>
							<CardButton text="View" icon={view} />
						</Link>
						<CardButton text="Delete" icon={trash} onClick={() => deleteAction()} />
					</CardBtnHolder>
					<Flex $justify="space-between" $width="100%" $align="center">
						<CreatedAt>Created {ISOToDate(createdAt)}</CreatedAt>
						{/* <ViewOldVersions>
						<Image src={clock} alt="" />
						<span>View Old Versions</span>
					</ViewOldVersions> */}
					</Flex>
				</Flex>
			</ItemHolder>
		</>
	);
}

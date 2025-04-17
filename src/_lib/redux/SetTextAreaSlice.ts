import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { resumeSlice } from "@/_lib/redux/resumeSlice";
import { ResumeCoverLetter } from "@/_lib/redux/types";

export type CreateChangeActionWithDescriptions<T> = {
	idx: number;
} & (
	| {
			field: Exclude<keyof T, "descriptions">;
			value: string;
	  }
	| { field: "descriptions"; value: string }
);

export const initialCoverLetter: ResumeCoverLetter = {
	descriptions: "",
};

const CoverLetterSlice = createSlice({
	name: "CoverLetterSlice",
	initialState: initialCoverLetter,
	reducers: {
		changeCoverLetter: (draft, action: PayloadAction<{ field: "descriptions"; value: string }>) => {
			const { value } = action.payload;
			draft.descriptions = value;
		},
	},
});

export const TextAreaReducer = CoverLetterSlice.reducer;
export const { changeCoverLetter } = CoverLetterSlice.actions;

export default CoverLetterSlice.reducer;

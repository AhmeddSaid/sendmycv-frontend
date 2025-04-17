import {configureStore} from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import settingsReducer from "./settingsSlice";
import {TextAreaReducer} from "@/_lib/redux/SetTextAreaSlice";

export const store = configureStore({
	reducer: {
		resume: resumeReducer,
		settings: settingsReducer,
		coverLetter: TextAreaReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

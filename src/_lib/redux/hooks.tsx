import { useEffect } from "react";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { deepMerge } from "../deep-merge";
import { initialResumeState, setResume } from "./resumeSlice";
import { initialSettings, setSettings, Settings } from "./settingsSlice";
import { Resume } from "./types";
import { changeCoverLetter } from "@/_lib/redux/SetTextAreaSlice";
import { AppDispatch, RootState } from "@/_lib/redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// /**
//  * Hook to save store to local storage on store change
//  */
// export const useSaveStateToLocalStorageOnChange = () => {
// 	useEffect(() => {
// 		const unsubscribe = store.subscribe(() => {
// 			saveStateToLocalStorage(store.getState());
// 		});
// 		return unsubscribe;
// 	}, []);
// };

export const useSetInitialStore = (
	state: { resume: Resume; settings: Settings; title: string; coverLetter: any } | undefined,
) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!state) return;
		if (state.resume) {
			const mergedResumeState = deepMerge(initialResumeState, state.resume) as Resume;
			dispatch(setResume(mergedResumeState));
		}
		if (state.settings) {
			const mergedSettingsState = deepMerge(initialSettings, state.settings) as Settings;
			dispatch(setSettings(mergedSettingsState));
		}

		if (state.title) {
			dispatch(changeCoverLetter({ field: "descriptions", value: state.title ?? "" }));
		}

		if (state.coverLetter) {
			dispatch(changeCoverLetter({ field: "descriptions", value: state.title ?? "" }));
		}
	}, []);
};

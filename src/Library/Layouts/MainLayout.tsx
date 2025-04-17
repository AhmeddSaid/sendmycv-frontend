"use client";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";
import { GlobalStyle } from "../Globals/Globals";
import { ModalProvider } from "@/Context/ModalContext";
import StyledComponentsRegistry from "@/Library/Globals/Registery";
import MicrosoftClarity from "@/Library/Utils/MicrosoftClarity";
import GoogleAnalytics from "@/Library/Utils/googleAnalytics";
import Modal from "@/Library/components/UI/Modal";

const MainLayout = ({ children }: { children: ReactNode }): ReactNode => {
	return (
		<>
			<StyledComponentsRegistry>
				<GlobalStyle />
				<GoogleAnalytics id={"G-NM5XVMR7ZM"} />
				<MicrosoftClarity />
				<body>
					<ModalProvider>
						{children}
						<Modal />
						<Toaster
							position="top-center"
							toastOptions={{
								style: {
									background: "#343457",
									color: "#fff",
									width: "fit-content",
									border: "1px solid #ffffff58",
								},
							}}
						/>
					</ModalProvider>
				</body>
			</StyledComponentsRegistry>
		</>
	);
};

export default MainLayout;

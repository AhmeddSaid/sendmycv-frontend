// import { GridContainer, GridItem, MainContainer } from "@/app/[locale]/CvSteps/page";

import { Provider } from "react-redux";
import { GridItem, MainContainer } from "@/Library/_Pages/CvSteps/CvSteps.styles";
import {
	EyeIconContainer,
	ResumeDetailsCvImageContainer,
	ResumeDetailsCvWrapper,
} from "@/Library/_Pages/ResumeDetails/ResumeDetailsCv/ResumeDetailsCv.styles";
import EyeIcon from "@/Library/components/IconGraphy/EyeIcon/EyeIcon";
import { Resume } from "@/Library/components/Resume";
import { GridContainer } from "@/Library/components/ResumeForm/Form/Form.styles";
import { Settings } from "@/_lib/redux/settingsSlice";
import { store } from "@/_lib/redux/store";

const ResumeDetailsCv = ({ resume }: { resume: { settings: Settings; resume: any } }) => {
	return (
		<>
			<ResumeDetailsCvWrapper>
				<EyeIconContainer>
					<EyeIcon />
				</EyeIconContainer>
				<ResumeDetailsCvImageContainer>
					{/* <Image src={"/CvImag.png"} alt={""} width={1410} height={1995}/> */}

					<Provider store={store}>
						<MainContainer>
							<GridContainer>
								<GridItem>
									<Resume
										size={1}
										toolbar={false}
										data={{ settings: resume.settings, resume: resume.resume.content }}
									/>
								</GridItem>
							</GridContainer>
						</MainContainer>
					</Provider>
				</ResumeDetailsCvImageContainer>

				{/*<ResumeDetailsCvFooter $justify={"space-between"} $align={"center"}>*/}
				{/*	<p>Your account is expired.You need to upgrade or undo the changes to download.</p>*/}
				{/*	<Flex $gap={".5rem"}>*/}
				{/*		<Button*/}
				{/*			$padding={".53rem"}*/}
				{/*			$height={"unset"}*/}
				{/*			$fontSize={"0.75rem"}*/}
				{/*			$fontWeight={"400"}*/}
				{/*			$rounded*/}
				{/*			$bg={"#fff"}*/}
				{/*			$color={"#3D3D93"}*/}
				{/*			$border={"#fff"}*/}
				{/*		>*/}
				{/*			Upgrade Now*/}
				{/*		</Button>*/}
				{/*		<Button*/}
				{/*			$padding={".53rem"}*/}
				{/*			$height={"unset"}*/}
				{/*			$fontSize={"0.75rem"}*/}
				{/*			$fontWeight={"400"}*/}
				{/*			$rounded*/}
				{/*			$border={"1px solid #fff"}*/}
				{/*			$bg={"transparent"}*/}
				{/*		>*/}
				{/*			Revert Changes*/}
				{/*		</Button>*/}
				{/*	</Flex>*/}
				{/*</ResumeDetailsCvFooter>*/}
			</ResumeDetailsCvWrapper>
		</>
	);
};

export default ResumeDetailsCv;

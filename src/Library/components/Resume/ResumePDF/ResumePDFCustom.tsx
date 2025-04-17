import {View} from "@react-pdf/renderer";
import {ResumePDFBulletList, ResumePDFSection} from "@/Library/components/Resume/ResumePDF/common";
import {styles} from "@/Library/components/Resume/ResumePDF/styles";
import {ResumeCustom} from "@/_lib/redux/types";


export const ResumePDFCustom = ({
                                    heading,
                                    custom,
                                    themeColor,
                                    showBulletPoints,
                                    isCoverLetter
                                }: {
    heading: string;
    custom: ResumeCustom;
    themeColor: string;
    showBulletPoints: boolean;
    isCoverLetter?: boolean;
}) => {
    const {descriptions} = custom;
    return (
        <ResumePDFSection themeColor={isCoverLetter ? "" : themeColor} heading={isCoverLetter ? "" : heading}>
            <View style={{...styles.flexCol}}>
                <ResumePDFBulletList
                    items={descriptions}
                    showBulletPoints={showBulletPoints}
                />
            </View>
        </ResumePDFSection>
    );
};

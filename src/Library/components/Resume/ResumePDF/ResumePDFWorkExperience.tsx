import {View} from "@react-pdf/renderer";

import {ResumePDFBulletList, ResumePDFSection, ResumePDFText} from "@/Library/components/Resume/ResumePDF/common";
import {spacing, styles} from "@/Library/components/Resume/ResumePDF/styles";
import {ResumeWorkExperience} from "@/_lib/redux/types";


export const ResumePDFWorkExperience = ({
                                            heading,
                                            workExperiences,
                                            themeColor,
                                        }: {
    heading: string;
    workExperiences: ResumeWorkExperience[];
    themeColor: string;
}) => {
    return (
        <ResumePDFSection themeColor={themeColor} heading={heading}>
            {workExperiences.map(({company, jobTitle, date, descriptions}, idx) => {
                // Hide company name if it is the same as the previous company
                const hideCompanyName =
                    idx > 0 && company === workExperiences[idx - 1]?.company;


                return (
                    <View key={idx} style={idx !== 0 ? {marginTop: spacing["2"]} : {}}>
                        {!hideCompanyName && (
                            <ResumePDFText bold={true}>{company}</ResumePDFText>
                        )}
                        <View
                            style={{
                                ...styles.flexRowBetween,
                                marginTop: hideCompanyName
                                    ? "-" + spacing["1"]
                                    : spacing["1.5"],


                                ...styles.halfWidth
                            }}
                        >
                            <ResumePDFText>{jobTitle}</ResumePDFText>
                            <ResumePDFText>{date}</ResumePDFText>
                        </View>
                        <View style={{...styles.flexCol, marginTop: spacing["1.5"]}}>
                            <ResumePDFBulletList items={descriptions}/>
                        </View>
                    </View>
                );
            })}
        </ResumePDFSection>
    );
};

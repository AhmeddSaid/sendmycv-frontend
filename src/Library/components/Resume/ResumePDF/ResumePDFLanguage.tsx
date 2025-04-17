import {View} from "@react-pdf/renderer";
import {ResumeFeaturedSkill, ResumePDFBulletList, ResumePDFSection} from "@/Library/components/Resume/ResumePDF/common";
import {spacing, styles} from "@/Library/components/Resume/ResumePDF/styles";
import {ResumeLanguages} from "@/_lib/redux/types";

export const ResumePDFLanguage = ({
                                      heading,
                                      languages,
                                      themeColor,
                                      showBulletPoints,
                                  }: {
    heading: string;
    languages: ResumeLanguages;
    themeColor: string;
    showBulletPoints: boolean;
}) => {
    const {descriptions, featuredLanguages} = languages;
    const featuredLanguagesWithText = featuredLanguages.filter((item) => item.language);
    const featuredLanguagesPair = [
        [featuredLanguagesWithText[0], featuredLanguagesWithText[3]],
        [featuredLanguagesWithText[1], featuredLanguagesWithText[4]],
        [featuredLanguagesWithText[2], featuredLanguagesWithText[5]],
    ];

    return (
        <ResumePDFSection themeColor={themeColor} heading={heading}>
            {featuredLanguagesWithText.length > 0 && (
                <View style={{...styles.flexRowBetween, marginTop: spacing["0.5"]}}>
                    {featuredLanguagesPair.map((pair, idx) => (
                        <View
                            key={idx}
                            style={{
                                ...styles.flexCol,
                            }}
                        >
                            {pair.map((featuredSkill, idx) => {
                                if (!featuredSkill) return null;
                                return (
                                    <ResumeFeaturedSkill
                                        key={idx}
                                        skill={featuredSkill.language}
                                        rating={featuredSkill.rating}
                                        themeColor={themeColor}
                                        style={{
                                            justifyContent: "flex-end",
                                        }}
                                    />
                                );
                            })}
                        </View>
                    ))}
                </View>
            )}
            <View style={{...styles.flexCol}}>
                <ResumePDFBulletList
                    items={descriptions}
                    showBulletPoints={showBulletPoints}
                />
            </View>
        </ResumePDFSection>
    );
};

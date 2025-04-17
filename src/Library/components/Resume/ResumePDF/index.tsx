import {Document, Page, View} from "@react-pdf/renderer";
import {ResumePDFCertificate} from "@/Library/components/Resume/ResumePDF/ResumePDFCertificate";
import {ResumePDFCustom} from "@/Library/components/Resume/ResumePDF/ResumePDFCustom";
import {ResumePDFEducation} from "@/Library/components/Resume/ResumePDF/ResumePDFEducation";
import {ResumePDFLanguage} from "@/Library/components/Resume/ResumePDF/ResumePDFLanguage";
import {ResumePDFProfile} from "@/Library/components/Resume/ResumePDF/ResumePDFProfile";
import {ResumePDFProject} from "@/Library/components/Resume/ResumePDF/ResumePDFProject";
import {ResumePDFSkills} from "@/Library/components/Resume/ResumePDF/ResumePDFSkills";
import {ResumePDFWorkExperience} from "@/Library/components/Resume/ResumePDF/ResumePDFWorkExperience";
import {
    SuppressResumePDFErrorMessage
} from "@/Library/components/Resume/ResumePDF/common/SuppressResumePDFErrorMessage";
import {spacing, styles} from "@/Library/components/Resume/ResumePDF/styles";
import {DEFAULT_FONT_COLOR, Settings, ShowForm} from "@/_lib/redux/settingsSlice";
import {Resume} from "@/_lib/redux/types";


export const ResumePDF = ({
                              resume,
                              settings,
                              isPDF = false,
                              isCoverLetter
                          }: {
    resume: Resume;
    settings: Settings;
    isPDF?: boolean | undefined;
    isCoverLetter?: boolean | undefined;
}) => {
    const {profile, workExperiences, educations, projects, skills, custom, languages, certificates} =
        resume;
    const {name} = profile;
    const {
        fontFamily,
        fontSize,
        documentSize,
        formToHeading,
        formToShow,
        formsOrder,
        showBulletPoints,
    } = settings;
    const themeColor = settings.themeColor || DEFAULT_FONT_COLOR;

    const showFormsOrder = formsOrder.filter((form) => formToShow[form]);

    const formTypeToComponent: { [type in ShowForm]: () => JSX.Element } = {
        workExperiences: () => (
            <ResumePDFWorkExperience
                heading={formToHeading["workExperiences"]}
                workExperiences={workExperiences}
                themeColor={themeColor}
            />
        ),
        educations: () => (
            <ResumePDFEducation
                heading={formToHeading["educations"]}
                educations={educations}
                themeColor={themeColor}
                showBulletPoints={showBulletPoints["educations"]}
            />
        ),
        projects: () => (
            <ResumePDFProject
                heading={formToHeading["projects"]}
                projects={projects}
                themeColor={themeColor}
            />
        ),
        skills: () => (
            <ResumePDFSkills
                heading={formToHeading["skills"]}
                skills={skills}
                themeColor={themeColor}
                showBulletPoints={showBulletPoints["skills"]}
            />
        ),
        custom: () => (
            <ResumePDFCustom
                heading={formToHeading["custom"]}
                custom={custom}
                themeColor={themeColor}
                showBulletPoints={showBulletPoints["custom"]}
            />
        ),
        language: () => (
            <ResumePDFLanguage
                heading={formToHeading["language"]}
                languages={languages}
                themeColor={themeColor}
                showBulletPoints={showBulletPoints["custom"]}
            />
        ), certificates: () => (
            <ResumePDFCertificate
                heading={formToHeading["certificates"]}
                certificates={certificates}
                themeColor={themeColor}
            />
        )
    };

    return (
        <>

            <Document title={`${name} Resume`} author={name} producer={"OpenResume"}>
                <Page
                    size={documentSize === "A4" ? "A4" : "LETTER"}
                    style={{
                        ...styles.flexCol,
                        color: DEFAULT_FONT_COLOR,
                        fontFamily,
                        fontSize: fontSize + "pt",
                    }}
                    // break={true}
                    // orientation={"portrait"}
                    // wrap={true}


                >
                    {Boolean(settings.themeColor) && (
                        <View
                            style={{
                                width: spacing["full"],
                                height: spacing[3.5],
                                backgroundColor: themeColor,
                            }}
                            // wrap={false}
                        />
                    )}
                    <View
                        style={{
                            ...styles.flexCol,
                            padding: `${spacing[0]} ${spacing[20]}`,
                            height: 'auto'
                        }}
                        // wrap={false}

                    >
                        <ResumePDFProfile
                            profile={profile}
                            themeColor={themeColor}
                            isPDF={isPDF}
                        />
                        {isCoverLetter?<ResumePDFCustom
                            isCoverLetter={isCoverLetter}
                            heading={formToHeading["custom"]}
                            custom={custom}
                            themeColor={themeColor}
                            showBulletPoints={showBulletPoints["custom"]}
                        />:showFormsOrder.map((form) => {
                            const Component = formTypeToComponent[form];
                            return <Component key={form}/>;
                        })}
                        {/*{showFormsOrder.map((form) => {*/}
                        {/*    const Component = formTypeToComponent[form];*/}
                        {/*    return <Component key={form}/>;*/}
                        {/*})}*/}
                    </View>
                </Page>
            </Document>
            <SuppressResumePDFErrorMessage/>
        </>
    );
};

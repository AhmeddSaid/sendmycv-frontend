"use client"
import {View} from "@react-pdf/renderer";
import {ResumePDFBulletList, ResumePDFSection, ResumePDFText} from "@/Library/components/Resume/ResumePDF/common";
import {spacing, styles} from "@/Library/components/Resume/ResumePDF/styles";
import {ResumeCertificates} from "@/_lib/redux/types";


export const ResumePDFCertificate = ({
                                         heading,
                                         certificates,
                                         themeColor,

                                     }: {
    heading: string;
    certificates: ResumeCertificates[];
    themeColor: string;
}) => {

    // let x = useSelector((state) => state.textAreaStore)
    // console.log(x,"xpdf")
    return (


        <ResumePDFSection themeColor={themeColor} heading={heading}>
            {certificates.map(({name, issueDate, expirationDate, descriptions}, idx) => (
                <View key={idx}>
                    <View
                        style={{
                            ...styles.flexRowBetween,
                            marginTop: spacing["0.5"],
                        }}
                    >
                        <ResumePDFText bold={true}>{name}</ResumePDFText>
                        <ResumePDFText>{issueDate} - {expirationDate}</ResumePDFText>
                    </View>
                    <View style={{...styles.flexCol, marginTop: spacing["0.5"]}}>
                        <ResumePDFBulletList items={descriptions}/>
                    </View>
                </View>
            ))}
        </ResumePDFSection>
    );
};

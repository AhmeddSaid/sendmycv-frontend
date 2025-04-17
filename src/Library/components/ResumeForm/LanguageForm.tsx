import {Row} from "@/Library/Grids/Grids";
import {Form} from "@/Library/components/ResumeForm/Form";
import {FeaturedSkillInput} from "@/Library/components/ResumeForm/Form/FeaturedSkillInput";
import {InputGroupWrapper, Textarea} from "@/Library/components/ResumeForm/Form/InputGroup";
import {FormContainer} from "@/Library/components/ResumeForm/index";
import {useAppDispatch, useAppSelector} from "@/_lib/redux/hooks";
import {changeLanguages, selectLanguage} from "@/_lib/redux/resumeSlice";
import {selectThemeColor} from "@/_lib/redux/settingsSlice";

export const LanguageForm = () => {
    const languages = useAppSelector(selectLanguage);
    const dispatch = useAppDispatch();
    const {featuredLanguages, descriptions} = languages;
    const form = "language";
    // const showBulletPoints = useAppSelector(selectShowBulletPoints(form));
    const themeColor = useAppSelector(selectThemeColor) || "#38bdf8";

    const handleLanguageChange = (field: "descriptions", value: string) => {
        dispatch(changeLanguages({field, value}));
    };
    const handleFeaturedSkillsChange = (idx: number, language: string, rating: number) => {
        dispatch(changeLanguages({field: "featuredLanguages", idx, language, rating}));
    };
    // const handleShowBulletPoints = (value: boolean) => {
    //     dispatch(changeShowBulletPoints({field: form, value}));
    // };

    return (
        <FormContainer>
            <Form form={form}>
                <div className="col-span-full grid grid-cols-6 gap-3">
                    <div className="relative col-span-full">
                        {/*<BulletListTextarea*/}
                        {/*  label="Skills List"*/}
                        {/*  labelClassName="col-span-full"*/}
                        {/*  name="descriptions"*/}
                        {/*  placeholder="Bullet points"*/}
                        {/*  value={descriptions}*/}
                        {/*  onChange={handleLanguageChange}*/}
                        {/*  showBulletPoints={showBulletPoints}*/}
                        {/*/>*/}

                        {/*<Textarea*/}
                        {/*    label="Skills List"*/}
                        {/*    // labelClassName="col-span-full"*/}
                        {/*    name="descriptions"*/}
                        {/*    placeholder="Entrepreneur and educator obsessed with making education free for anyone"*/}
                        {/*    value={descriptions}*/}
                        {/*    onChange={handleLanguageChange}*/}
                        {/*/>*/}

                        {/*<div className="absolute left-[4.5rem] top-[0.07rem]">*/}
                        {/*  <BulletListIconButton*/}
                        {/*    showBulletPoints={showBulletPoints}*/}
                        {/*    onClick={handleShowBulletPoints}*/}
                        {/*  />*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-span-full mb-4 mt-6 border-t-2 border-dotted border-gray-200"/>
                    <InputGroupWrapper label="Language Skills">
                        {/*<p>*/}
                        {/*    Language skills is optional to highlight top languages, with more circles mean higher*/}
                        {/*    proficiency.*/}
                        {/*</p>*/}
                    </InputGroupWrapper>
                    <Row>
                        {featuredLanguages.map(({language, rating}, idx) => (
                            <FeaturedSkillInput
                                key={idx}
                                className="col-span-3"
                                skill={language}
                                rating={rating}
                                setSkillRating={(newSkill, newRating) => {
                                    handleFeaturedSkillsChange(idx, newSkill, newRating);
                                }}
                                placeholder={`Language ${idx + 1}`}
                                circleColor={themeColor}
                            />
                        ))}
                    </Row>
                </div>
            </Form>
        </FormContainer>
    );
};

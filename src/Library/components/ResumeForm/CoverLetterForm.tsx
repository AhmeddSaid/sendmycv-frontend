import {Form} from "@/Library/components/ResumeForm/Form";
import {Textarea} from "@/Library/components/ResumeForm/Form/InputGroup";
import {FormContainer} from "@/Library/components/ResumeForm/index";
import {useAppDispatch, useAppSelector} from "@/_lib/redux/hooks";
import {changeCustom, selectCustom} from "@/_lib/redux/resumeSlice";
// import {selectShowBulletPoints} from "@/_lib/redux/settingsSlice";


export const CoverLetterForm = () => {
    const custom = useAppSelector(selectCustom);
    const dispatch = useAppDispatch();
    const {descriptions} = custom;
    const form = "custom";
    // const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

    const handleCustomChange = (field: "descriptions", value: string) => {
        dispatch(changeCustom({field, value}));
    };


    return (

        <FormContainer >

            <Form form={form}>
                <div>
                    <div>
                        <Textarea
                            label="Custom Textbox"
                            name="descriptions"
                            placeholder="Bullet points"
                            value={descriptions}
                            onChange={handleCustomChange}
                        />

                    </div>
                </div>
            </Form>
        </FormContainer>

    );
};

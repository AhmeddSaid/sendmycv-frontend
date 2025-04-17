import React from 'react';
import {Provider} from "react-redux";
import {Col} from "@/Library/Grids/Grids";
import {GridContainer, MainContainer} from "@/Library/_Pages/CvSteps/CvSteps.styles";
import {Resume} from "@/Library/components/Resume";
import {ResumeForm} from "@/Library/components/ResumeForm";
import {store} from "@/_lib/redux/store";

const CvPage = () => {

    return (
        <>

            <Provider store={store}>
                <MainContainer>

                    <GridContainer>
                        <Col $md={6}>
                            <ResumeForm/>
                        </Col>
                        <Col $md={6}>
                            <Resume/>
                        </Col>
                    </GridContainer>

                </MainContainer>
            </Provider>

        </>
    );
};

export default CvPage;
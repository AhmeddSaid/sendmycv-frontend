"use client"
import Image from "next/image"
import React from 'react';
import {Flex} from "@/Library/Grids/Grids";
import {
    AccountContainer,
    AccountShell,
    InformationSection,
    InformationSectionEmail,
    SubscriptionSection
} from "@/Library/_Pages/Account/Account.styles";
import {Button} from "@/Library/components/UI/Button";
import Input from "@/Library/components/UI/Input";

const Account = () => {


    // const data = ["Automated meta tags", "SEO monitoring", "Monthly reports", "Content suggestions", "Link optimization"]


    return (
        <>

            <AccountContainer>

                <div className={"ImageShell"}>

                    <Image src={"/Resume Details.svg"} alt={""} width={1440} height={1024}/>

                </div>
                <AccountShell className={"AccountFlex"}>


                    <InformationSection>


                        <p className={"InformationSectionHeader"}>Your Information</p>


                        <InformationSectionEmail>

                            <p>Email
                            </p>
                            <p>mahmoud.dahy122333@gmaiLcom</p>


                        </InformationSectionEmail>

                        <div className={"inputShell"}>
                            <p className={"InputLabel"}>Your full name</p>
                            <Input
                                type="text"
                                placeholder="Username"

                            />
                        </div>


                        <div className={"SaveMoreShell"}>

                            <Flex $align={"center"} $justify={"space-between"}>
                                <div className={"SaveMoreTitles"}>


                                    <p>Save more with Pro</p>

                                    <p>for as little as S13.32 / m</p>
                                </div>


                                <div>


                                    <Button>Upgrade</Button>


                                </div>

                            </Flex>


                            <Flex className={"marginTop20"} $align={"start"} $direction={"column"}>

                                {/*{data.map((item) => (*/}


                                {/*    <Flex  className={"InformationOptions"}>*/}

                                {/*        <CorrectIcon/>*/}
                                {/*        <p>{item}</p>*/}

                                {/*    </Flex>*/}


                                {/*))}*/}


                            </Flex>


                        </div>


                    </InformationSection>


                    {/*<VerticalDivider/>*/}

                    <SubscriptionSection>


                        <p className={"InformationSectionHeader"}>


                            Subscription
                        </p>

                        <div className={"ExpiredShell"}>


                            <Flex $justify={"space-between"} className={"ExpiredHeaders"}>


                                <p>Expired Free Trial
                                </p>
                                <p>Start Subscription</p>


                            </Flex>


                            <p className={"ExpiredBody"}>Your plan has expired and you won&apos;t be able to edit your
                                resume until
                                you renew your subscription.
                            </p>


                            <p className={"ExpiredBody2"}>


                                Expired on Oct 5th, 2024


                            </p>


                        </div>


                        <div className={"ButtonShell"}>


                            <Button $rounded>Save Changes</Button>


                        </div>


                    </SubscriptionSection>


                </AccountShell>


            </AccountContainer>
        </>
    );
};

export default Account;

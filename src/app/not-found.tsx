import Link from "next/link";
import {Main, PageContainer, Title} from "@/Library/Globals/Globals";
import Footer from "@/Library/components/Footer/Footer";
import {Button} from "@/Library/components/UI/Button";
import MainHeader from "@/Library/components/UI/MainHeader";

export default function NotFoundPage() {
    return (
        <PageContainer>
            <MainHeader/>
            <Main>
                <Title>This page could not be found 😥</Title>
                <Link href="/">
                    <Button>Go back</Button>
                </Link>
            </Main>
            <Footer/>
        </PageContainer>
    );
}

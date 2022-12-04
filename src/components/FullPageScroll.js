import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import Cover from "../components/Cover";
import Content from "../components/Content";
import Contact from "../components/Contact";
import About from "../components/AboutMe";


const FullPageScroll = () => {

    const ContentSection = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <Fullpage>
            <FullPageSections>
                <FullpageSection>
                    <Cover />
                </FullpageSection>
                <FullpageSection style={ContentSection}>
                    <Content />
                </FullpageSection>
                <FullpageSection>
                    <Contact />
                </FullpageSection>
                <FullpageSection>
                    <About />
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default FullPageScroll;
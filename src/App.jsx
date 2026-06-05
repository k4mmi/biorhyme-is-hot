import "./styles/style.scss"
import { HomeSection } from "./sections/HomeSection"
import { AboutSection } from "./sections/AboutSection"
import { FooterSection } from "./sections/FooterSection"
import { ShowcaseSection } from "./sections/ShowcaseSection"
import { ScrollAboutSection } from "./sections/ScrollAboutSection"
import { DownloadSection } from "./sections/DownloadSection"
import { LoopSection } from "./sections/LoopSection"
import { BoxesSection } from "./sections/BoxesSection"

export function App() {

    return (
        <>
            <HomeSection />
            <AboutSection />
            <ScrollAboutSection />
            <LoopSection />
            <ShowcaseSection />
            <LoopSection />
            <BoxesSection />
            <DownloadSection />
            <FooterSection />
        </>
    )
}


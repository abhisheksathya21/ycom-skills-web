import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SearchBar from "./Components/SearchBar";
import HomeBanner from "./Components/HomeBanner";
import VideoSection from "./Components/VideoSection";
import Carousel from "./Components/Carousel"
import SkillsSection from "./Components/Skillsection";
import LearningAppSection from "./Components/LearningApp";
import CoursesCarousel from "./Components/CoursesCarousel";
import Reasons from "./Components/ReasonsToJoin";
export default function Home() {
  return (
    <>
      <Header />
      <div className="px-8 py-16 bg-white">
        <Hero />
        <SearchBar />
        <HomeBanner />
        <VideoSection />
        <Carousel/>
        <SkillsSection/>
        <LearningAppSection/>
        <CoursesCarousel/>
        <Reasons/>
      </div>
    </>
  );
}

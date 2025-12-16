import Header from "./Components/LandingPage/Header";
import Hero from "./Components/LandingPage/Hero";
import SearchBar from "./Components/LandingPage/SearchBar";
import HomeBanner from "./Components/LandingPage/HomeBanner";
import VideoSection from "./Components/LandingPage/VideoSection";
import Carousel from "./Components/LandingPage/Carousel"
import SkillsSection from "./Components/LandingPage/Skillsection";
import LearningAppSection from "./Components/LandingPage/LearningApp";
import CoursesCarousel from "./Components/LandingPage/CoursesCarousel";
import Reasons from "./Components/LandingPage/ReasonsToJoin";
import SkillsRadial from "./Components/LandingPage/SkillsRadial";
import AppInstall from "./Components/LandingPage/AppInstall";
import InstructorsCarousel from "./Components/LandingPage/InstructorsCarousel"
import StudentReviewsCarousel from "./Components/LandingPage/StudentReviewsCarousel"
import StudentTestimonial from "./Components/LandingPage/StudentTestimonial"
import FAQSection from "./Components/LandingPage/FAQSection";
import Footer from "./Components/LandingPage/Footer"
// import VideoShowcase from "./Components/VideoShowcase";
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
        <SkillsRadial/>
        <AppInstall/>
        {/* <VideoShowcase/> */}
        <InstructorsCarousel/>
        <StudentReviewsCarousel/>
        <StudentTestimonial/>
        <FAQSection/>
        <Footer/>
      </div>
    </>
  );
}

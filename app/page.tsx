import Header from "./components/LandingPage/Header";
import Hero from "./components/LandingPage/Hero";
import SearchBar from "./components/LandingPage/SearchBar";
import HomeBanner from "./components/LandingPage/HomeBanner";
import VideoSection from "./components/LandingPage/VideoSection";
import Carousel from "./components/LandingPage/Carousel"
import SkillsSection from "./components/LandingPage/Skillsection";
import LearningAppSection from "./components/LandingPage/LearningApp";
import CoursesCarousel from "./components/LandingPage/CoursesCarousel";
import Reasons from "./components/LandingPage/ReasonsToJoin";
import SkillsRadial from "./components/LandingPage/SkillsRadial";
import AppInstall from "./components/LandingPage/AppInstall";
import InstructorsCarousel from "./components/LandingPage/InstructorsCarousel"
import StudentReviewsCarousel from "./components/LandingPage/StudentReviewsCarousel"
import StudentTestimonial from "./components/LandingPage/StudentTestimonial"
import FAQSection from "./components/LandingPage/FAQSection";
import Footer from "./components/LandingPage/Footer"
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

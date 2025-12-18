import CourseCard from "@/app/components/home/CourseCard";
import HomeTabs from "@/app/components/home/HomeTabs";
import CourseCarousel from "@/app/components/home/CourseCarousel";

import course1 from "../../../public/Assets/Landing Page/course_banner3.svg";
import course2 from "../../../public/Assets/Landing Page/course_banner4.svg";

export default function CoursePage() {
  return (
    <>
      <HomeTabs />

      <CourseCarousel title="Explore Courses">
        <CourseCard
          thumbnail={course1}
          title="Digital Marketing for Beginners"
          instructor="YashBusinessman"
          rating="4.8"
          reviews="4560"
          language="Hindi • English"
          price="499"
          badge="Bestseller"
        />

        <CourseCard
          thumbnail={course2}
          title="UI & UX Design with Adobe XD & Figma"
          instructor="YashBusinessman"
          rating="4.7"
          reviews="3210"
          language="English"
          price="399"
        />

        {/* Duplicate for demo */}
        <CourseCard thumbnail={course2} title="UI & UX Design with Adobe XD & Figma" instructor="YashBusinessman" rating="4.7" reviews="3210" language="English" price="399" />
        <CourseCard thumbnail={course2} title="UI & UX Design with Adobe XD & Figma" instructor="YashBusinessman" rating="4.7" reviews="3210" language="English" price="399" />
        <CourseCard thumbnail={course2} title="UI & UX Design with Adobe XD & Figma" instructor="YashBusinessman" rating="4.7" reviews="3210" language="English" price="399" />
        <CourseCard thumbnail={course2} title="UI & UX Design with Adobe XD & Figma" instructor="YashBusinessman" rating="4.7" reviews="3210" language="English" price="399" />
     </CourseCarousel>
    </>
  );
}

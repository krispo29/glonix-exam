import Blog from "./components/Blog/page";
import CategoryCourse from "./components/CategoryCourse/page";
import MyCourse from "./components/Course/MyCourse/page";
import OnlineCourse from "./components/Course/OnlineCourse/page";
import HeroSection from "./components/HeroSection/page";
import Footer from "./components/Layout/Footer/page";
import Header from "./components/Layout/Header/page";
import QuestionForm from "./components/QuestionForm/page";
import {
  MY_COURSE_DATA,
  ARTICLES_DATA,
  ONLINE_COURSE_DATA,
  HERO_SECTION_DATA,
  CATEGORY_COURSE_DATA,
} from "./DataMockup/DataMockup";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection cards={HERO_SECTION_DATA} />
      <CategoryCourse cards={CATEGORY_COURSE_DATA} />
      <MyCourse cards={MY_COURSE_DATA} />
      <OnlineCourse cards={ONLINE_COURSE_DATA} />
      <Blog articles={ARTICLES_DATA} />
      <QuestionForm />
      <Footer />
    </>
  );
}

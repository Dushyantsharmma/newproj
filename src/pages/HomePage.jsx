import Home from "../components/home/Home";
import ImageSlideshow from "../components/home/ImageSlideshow";
import WhyHillDriving from "../components/home/WhyHillDriving";
import Team from "../components/home/Team";
import About from "../components/home/About";
import Courses from "../components/home/Courses";
import GoogleReviews from "../components/home/GoogleReviews";

export default function HomePage() {
  return (
    <>
      <ImageSlideshow />
      <Home />
      <Team />
      <WhyHillDriving />
      <About variant="brief" />
      <Courses />
      <GoogleReviews />
    </>
  );
}

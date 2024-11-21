import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import { InfiniteMovingCardsDemo } from "./components/TestimonialCards";
import UpcommingWebinars from "./components/UpcommingWebinars";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturedCourses />
			<InfiniteMovingCardsDemo />
			<UpcommingWebinars />
			<Instructors />
			<Footer />
		</>
	);
}

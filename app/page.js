import About from "./components/About";
import Header from "./components/Header";
import Navebar from "./components/Navebar";
import Projects from "./components/LatestWork";
import WorkExperience from "./components/WorkExperience";
import LatestWork from "./components/LatestWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navebar />
      <Header />
      <About />
      <WorkExperience />
      <LatestWork />
      <Contact />
      <Footer />
    </div>
  );
}

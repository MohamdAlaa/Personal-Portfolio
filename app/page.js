import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";
import LatestWork from "./components/LatestWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Header />
        <About />
        <WorkExperience />
        <LatestWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

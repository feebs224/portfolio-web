import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import UserExperience from "./components/UserExperience";
import WordpressProjects from "./components/WordpressProjects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <WordpressProjects />
      <UserExperience />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;

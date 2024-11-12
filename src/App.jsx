import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { scroller } from "react-scroll";

const sections = ["home", "about", "skills", "project", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.innerWidth >= 743) {
        if (!canScroll) {
          e.preventDefault(); // Prevent default scrolling when canScroll is false
          return; // Exit the function early if scrolling is not allowed
        }
      }

      // Assuming canScroll is initially true, then...
      const direction = e.deltaY > 0 ? "down" : "up";
      console.log(direction);
      e.preventDefault(); // Also prevent the default scroll behavior when canScroll is true

      let newSection = activeSection;
      if (direction === "down" && activeSection < sections.length - 1) {
        newSection = activeSection + 1;
      } else if (direction === "up" && activeSection > 0) {
        newSection = activeSection - 1;
      }

      if (newSection !== activeSection) {
        setActiveSection(newSection);
        setCanScroll(false); // Disable further scrolling

        setTimeout(() => {
          setCanScroll(true); // Re-enable scrolling after 3 seconds
        }, 100);
      }
    };

    // Add wheel event listener with passive set to false to allow preventDefault
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, canScroll]);

  useEffect(() => {
    if (window.innerWidth >= 700) {
      if (canScroll) {
        // Only scroll to the section if scrolling is enabled
        scrollToSection(sections[activeSection]);
      }
    }
  }, [activeSection, canScroll]);

  // There seems to be a bug where if opened in firefox, the application does not start at the home page
  useEffect(() => {
    let isFirefox = navigator.userAgent.includes("Firefox");
    if (isFirefox) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
    }
  }, []);
  return (
    <>
      <div>
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Home
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;

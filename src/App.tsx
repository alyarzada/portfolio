import About from "@/sections/about";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";
import Portfolio from "@/sections/portfolio";
import Header from "@/layout/header";
import GridBackground from "@/components/complex/grid-background";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";

function App() {
  return (
    <div className="overflow-x-hidden">
      <GridBackground />

      <Header />

      <Hero />

      <About />

        <Skills />

      <Experience />

      <Portfolio />

      <Contact />
    </div>
  );
}

export default App;

import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Works from "./components/works/works";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

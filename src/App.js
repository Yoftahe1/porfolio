import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
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

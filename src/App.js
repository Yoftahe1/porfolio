import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Nav from "./components/nav";
import Skills from "./components/skills";
import Works from "./components/works";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Skills />
      <About />
      <Works />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

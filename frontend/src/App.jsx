import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Copyright from './components/Copyright'
function App() {

  return (
    <div style={{ backgroundColor: "#FFFAF1" }}>
      <Navbar />
      <Home/>
      <Menu />
      <AboutUs />
      <Service />
      <Contact />
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;

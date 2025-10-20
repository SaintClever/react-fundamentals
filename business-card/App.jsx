import { Info } from "/components/Info.jsx";
import { About } from "/components/About.jsx";
import { Interests } from "./components/Interests.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export { App };
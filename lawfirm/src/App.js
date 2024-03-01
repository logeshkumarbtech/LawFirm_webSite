import About from "./Components/About/About";
import Clients from "./Components/Clients/Clients";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Newsletter from "./Components/Newsletter/Newsletter";
import Practices from "./Components/Practices/Practices";
import Team from "./Components/Team/Team";

function App() {
  return (
    <>
      <Home/>
      <About/>
      <Practices/>
      <Clients/>
      <Team/>
      <FAQ/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;

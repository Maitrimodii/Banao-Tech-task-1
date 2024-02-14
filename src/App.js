import "./App.css";
import Nav from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card1 from "./Components/Card1";
import Testimonals from "./Components/Testimonals";
import Footer from "./Components/Footer";
import GroupImage from "./Components/GroupImage";
import AddPage from "./Components/AddPage";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Card1 />
      <AddPage />
      <Testimonals />
      <GroupImage />
      <Footer />
    </div>
  );
}

export default App;

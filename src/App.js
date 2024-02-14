import logo from './logo.svg';
import './App.css';
import Nav from './Components/NavBar';
import Hero from './Components/Hero';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import Testimonals from './Components/Testimonals';
import Footer from './Components/Footer';
import GroupImage from './Components/GroupImage';

function App() {
  return (
   <div>
    <Nav/>
    <Hero/>
    <Card1/>
    <Card2/>
    <Testimonals/>
    <GroupImage/>
    <Footer/>
   </div>
  );
}

export default App;

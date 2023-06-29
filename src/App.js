
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import React  from "react";
import Rowpost from "./components/rowpost/Rowpost";
import {action, originals,comedy,romance} from './components/constants/Urls'
import Footer from "./components/Footer/Footer";

function App() {
  
 

  return (
    
      <>
      <div className="mains">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title={'Netflix originals'}/>
      <Rowpost url={action} title= {'Action'} isSmall/>
      <Rowpost url={comedy} title= {'Comedy'} isSmall/>
      <Rowpost url={romance} title= {'Romance'} isSmall/>
      <Footer />

     
      </div>
      </>
   
  );
 
}
export default App;
 
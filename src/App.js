import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from "./Form";
import Navbar from "./Navbar";
import Results from "./Results";

function App() {
  return (

    <Router>
    <div className="App">

      <Navbar/>

      <Routes>

      <Route exact path='/' element={<Home/>} />

      <Route path='/Form' element={<Form/>}/>

      <Route path='/Results' element={<Results/>}/>
      
      </Routes> 
    </div> 
    </Router>
    
  );
}

export default App;

import './App.scss'; 
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/home/home";
import Header from "./Components/home/Header/Header.jsx" 



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      {/* <div className="App">
      </div> */}
      </Routes> 
    </Router>
   
  );
}

export default App;


import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';



function App() {
  return (
    <div className="App">
     
       <Navbar title="Gopal Krishn Sahu" aboutText="About React"/>
        {/* or <Navbar></Navbar>  */}
         <div className="container  my-3">
        <TextForm heading = "Enter the text to analyze"/>
         </div>
    </div>
  );
}

export default App;

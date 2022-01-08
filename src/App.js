import './App.css';
import Create from './components/create';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">

      <h1 className="main-header">React Crud Operations</h1>  
      <div>
        <Create/>
      </div>
    </div>
  );
}

export default App;

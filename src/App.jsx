import Top from './Top.jsx';
import Body from './Body.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {  return (
    <div className="App">
      <Top />
      <Body />
    </div>
  );
}
export default App;

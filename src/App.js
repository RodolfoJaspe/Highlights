import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import League from './components/League';

function App() {
  return (
    <div className="App" >
        <Router>
            <div className="App-inner">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/leagues/:id" element={<League />}/>
                </Routes>
            </div>       
        </Router>
    </div>
  );
}

export default App;


import { Routes, Route, Link } from "react-router-dom";
import Home from './screens/Home/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </div>
  );
}

export default App;

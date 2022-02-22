import React from 'react';
import ReactDOM from 'react-dom';
import 'rsuite/dist/rsuite.min.css'
import './styles/index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";

// const backup = console.warn;
// console.warn = function filterWarnings(msg) {
//   const supressedWarnings = ['React Hook useEffect has missing dependencies'];
//   if (!supressedWarnings.some(entry => msg.includes(entry))) {
//     backup.apply(console, arguments);
//   }
// };

ReactDOM.render(<React.StrictMode> <Router basename={'/electron/'}><App /></Router>  </React.StrictMode>, document.getElementById('root'));

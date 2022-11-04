import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
import Test from './components/Test';
import Show from './components/Show';
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Router>
          <div>
<Routes>
      
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/show/:id" element={<Show/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/" element={<App />} />
    </Routes>
    </div>
    </Router>

    
    {/* <Router>
<div>
<Routes exact path='/' element={<App />} />
<Routes path='/edit/:id' component={Edit} />
<Routes path='/create' component={Create} />
<Routes path='/show/:id' component={Show} />
</div>
</Router>, */}
  </React.StrictMode>
);

reportWebVitals();



import './App.css';
import Bg from './components/background/Bg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Myattendence from './components/pages/Myattendence/Myattendence';
// import Logs from './components/main/Main/Logs'
// import Tasks from './components/main/Main/Tasks'
// import Activity from './components/main/Main/Activity'
import Logs from './components/pages/main/Logs'
import Activity from './components/pages/main/Activity'
import Tasks from './components/pages/main/Tasks'
import Signin from './components/signin/Signin';


function App() {
  return (
    <div className="App">
      <div className="app-main">
         <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Bg page="main" />} />
            <Route path="/timesheets" element={<Bg page="Timesheet" />} />
            <Route path="/myattendences" element={<Bg page="Myattendence" />} />
            <Route path="/notes" element={<Bg page="Note" />} />
            <Route path="/leaves" element={<Bg page="Leave" />} />
          </Routes>
        </BrowserRouter> 
        


      </div>
    </div>
  );
}

export default App;
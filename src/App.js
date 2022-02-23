import { Route, Routes } from 'react-router-dom';
import AddTasksComponent from './components/AddTasksComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='app__container'>
      <div className='main'>
        <Router>
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/timesheets/create' element={<AddTasksComponent />} />
            <Route path='/login' element={<LoginComponent />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

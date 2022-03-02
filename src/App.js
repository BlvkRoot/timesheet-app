import { Route, Routes } from 'react-router-dom';
import AddTasksComponent from './components/AddTasksComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app__container'>
      <div className='main'>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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

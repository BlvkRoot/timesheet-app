import { Link } from 'react-router-dom';
import AddTasksComponent from './AddTasksComponent';
import TasksComponent from './TasksComponent';
import '../styles/Home.css';

function HomeComponent() {
  return (
    <div className='home__container'>
      <nav className='nav_links'>
        <Link to='/login'>Login</Link>
        <Link to='/add'>Add Timesheet</Link>
      </nav>
      <h1>Daily Timesheet</h1>

      <TasksComponent />
    </div>
  );
}

export default HomeComponent;

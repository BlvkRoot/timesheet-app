import { Link } from 'react-router-dom';
import AddTasksComponent from './AddTasksComponent';
import TasksComponent from './TasksComponent';
import '../styles/Home.css';

function HomeComponent() {
  return (
    <div className='home__container'>
      <h1 className='home__header__title'>Daily Timesheet</h1>
      <nav className='nav__links'>
        <Link to='/login'>Login</Link>
        <Link to='/timesheets/create'>Add Timesheet</Link>
      </nav>

      <TasksComponent />
    </div>
  );
}

export default HomeComponent;

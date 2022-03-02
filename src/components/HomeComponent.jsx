import { Link } from 'react-router-dom';
import AddTasksComponent from './AddTasksComponent';
import TasksComponent from './TasksComponent';
import '../styles/Home.css';
import { useStateValue } from '../contexts/StateProvider';
import { useQuery } from 'react-query';
import { isAuthenticated } from '../utils/userApiCalls.js';
import { notify } from '../utils/notification';

function HomeComponent() {
  const [{ superUser, user_token, is_authenticated }, dispatch] =
    useStateValue();

  const { status, error, isError } = useQuery(
    'is_authenticated',
    isAuthenticated,
    {
      onSuccess: ({ data }) => {
        const { success, userId } = data;

        if (success) {
          dispatch({
            type: 'SET_ISAUTHENTICATED',
            authenticated: success,
          });

          dispatch({
            type: 'SET_USERID',
            userId,
          });
        }
      },
    }
  );

  if (status === 'error') {
    notify('Utilizador não autenticado.');
  }

  return (
    <div className='home__container'>
      <h1 className='home__header__title'>Daily Timesheet</h1>
      <nav className='nav__links'>
        {is_authenticated ? (
          <Link to='/timesheets/create'>Add Timesheet</Link>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </nav>

      {is_authenticated && <TasksComponent />}
    </div>
  );
}

export default HomeComponent;

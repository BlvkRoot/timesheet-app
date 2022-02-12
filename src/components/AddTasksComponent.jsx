import { useState } from 'react';

function AddTasksComponent() {
  const [project, setProject] = useState('');
  const [taskTitle, setTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskHours, setTaskHours] = useState(0);

  const handleSubmitTimesheet = () => {
    console.log('Clicked', project, taskTitle);
    console.log('Clicked', taskDescription, taskHours);
  };

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Project</th>
              <th>Title</th>
              <th>Description</th>
              <th>Hours</th>
            </tr>
            <tr>
              <td>
                <select
                  className='project__title'
                  value={project}
                  onChange={({ target }) => setProject(target.value)}
                >
                  <option value='' disabled >Selecione um projecto</option>
                  <option value='0'>ABC</option>
                  <option value='1'>BCA</option>
                  <option value='3'>BAC</option>
                  <option value='2'>CBA</option>
                </select>
              </td>
              <td>
                <input
                  type='text'
                  name=''
                  id='task__title'
                  className='tasks__input'
                  placeholder='Task title'
                  onChange={({target}) => setTitle(target.value)}
                />
              </td>
              <td>
                <textarea
                  id='task__description'
                  className='tasks__input'
                  onChange={({target}) => setTaskDescription(target.value)}
                ></textarea>
              </td>
              <td>
                <input
                  type='number'
                  name=''
                  id='task__hours'
                  className='tasks__input'
                  onChange={({target}) => setTaskHours(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan='4'>
                <button onClick={handleSubmitTimesheet}> Submit </button>
                <button> Cancel </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddTasksComponent;

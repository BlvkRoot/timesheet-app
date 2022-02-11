function AddTasksComponent() {
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
                <select className='project__title'>
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
                />
              </td>
              <td>
                <textarea
                  id='task__description'
                  className='tasks__input'
                ></textarea>
              </td>
              <td>
                <input
                  type='number'
                  name=''
                  id='task__hours'
                  className='tasks__input'
                />
              </td>
            </tr>
            <tr>
              <td colSpan='4'>
                <button> Submit </button>
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

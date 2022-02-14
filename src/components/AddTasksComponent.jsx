import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';

function AddTasksComponent() {
  const [project, setProject] = useState('Select project');
  const [taskTitle, setTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskHours, setTaskHours] = useState(0);

  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  const handleSubmitTimesheet = () => {
    console.log('Clicked', project, taskTitle);
    console.log('Clicked', taskDescription, taskHours);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell align='left'>Title</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <TextField
                  id="outlined-select-currency-native"
                  required
                  select
                  id='outlined-required'
                  label='Required'
                  variant="filled"
                  value={project}
                  defaultValue={project}
                  onChange={({ target }) => setProject(target.value)}
                  sx={{ 'width': '100%'}}
                >
                <MenuItem value='Select project' disabled>Select project</MenuItem>
                <MenuItem value='Teste A'>Teste A</MenuItem>
                <MenuItem value='Teste B'>Teste B</MenuItem>
                <MenuItem value='Teste C'>Teste C</MenuItem>
              </TextField>  
              </TableCell>
              <TableCell align='left'>
                <TextField
                  required
                  id='outlined-required'
                  label='Required'
                  className='tasks__input'
                  onChange={({ target }) => setTitle(target.value)}
                />
              </TableCell>
              <TableCell align='left'>
                <TextField
                  required
                  multiline
                  maxRows={4}
                  id='outlined-required'
                  label='Required'
                  className='tasks__input'
                  onChange={({ target }) => setTaskDescription(target.value)}
                />
              </TableCell>
              <TableCell align='left'>
                <TextField
                  required
                  id='outlined-required'
                  label='Required'
                  type='number'
                  className='tasks__input'
                  onChange={({ target }) => setTaskHours(target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow align="center">
              <TableCell>
                <Button variant="contained">Submit</Button>
                <Button variant="contained" color="error">Cancel</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AddTasksComponent;

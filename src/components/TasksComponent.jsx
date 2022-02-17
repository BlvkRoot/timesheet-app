import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import axios from 'axios';
import React, { Fragment } from 'react';
import { useQuery } from 'react-query';

function TasksComponent() {
  const { data, isFetching } = useQuery('timesheets', async () => {
    const { data: responseData } = await axios.get(
      'http://localhost:4848/api/v1/timesheets/show/2e52e11b-2ea2-42d9-8d32-db15630b4298'
    );

    console.log(responseData);

    return responseData.data;
  });

  return (
    <div className='timesheet__list'>
      <h2>Timesheets list</h2>

      {isFetching ? (
        'Loading..........'
      ) : (
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
              {data.map((timesheet) => {
                return (
                  <Fragment key={timesheet.id}>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align='left'>
                        {timesheet.project_type}
                      </TableCell>
                      <TableCell align='left'>
                        {timesheet.project_title}
                      </TableCell>
                      <TableCell align='left'>
                        {timesheet.project_description}
                      </TableCell>
                      <TableCell align='left'>
                        {timesheet.project_hours}
                      </TableCell>
                    </TableRow>
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default TasksComponent;

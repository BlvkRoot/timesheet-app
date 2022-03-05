import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter,
} from '@mui/material';
import React, { Fragment } from 'react';
import { useQuery } from 'react-query';
import { useStateValue } from '../contexts/StateProvider';
import { getTimesheetsByUserId } from '../utils/timesheetApiCalls';

function TasksComponent() {
  const [{ user_id }, dispatch] = useStateValue();
  const { data, isFetching } = useQuery(
    ['timesheets', { userId: user_id }],
    getTimesheetsByUserId
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='timesheet__list'>
      <h2>Timesheets list</h2>

      {isFetching ? (
        'Carregando..........'
      ) : (
        <>
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
                {!data ? (
                  <TableRow>
                    <TableCell colSpan='4'>No data found</TableCell>
                  </TableRow>
                ) : (
                  data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((timesheet) => {
                      return (
                        <Fragment key={timesheet.id}>
                          <TableRow
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
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
                    })
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component='div'
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </>
      )}
    </div>
  );
}

export default TasksComponent;

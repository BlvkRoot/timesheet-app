import axiosInstance from './axios';

const baseUrl = 'http://localhost:4848/api/v1/timesheets/';

const getTimesheetsByUserId = async ({ queryKey }) => {
  const [, {userId}] = queryKey;
  const { data } = await axiosInstance.get(`${baseUrl}show/${userId}`);

  return data.data;
};

export { getTimesheetsByUserId };

import AddTasksComponent from './AddTasksComponent'
import TasksComponent from './TasksComponent'

function HomeComponent() {
  return (
    <div className="home__container">
        <h1>Daily Timesheet</h1>
        <AddTasksComponent />
        <TasksComponent />
    </div>
  )
}

export default HomeComponent
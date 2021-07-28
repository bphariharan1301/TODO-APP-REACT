
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'NCC Class',
        day: 'Jul 29th at 4:00pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'College Class',
        day: 'Jul 29th at 9:00am',
        remainder: true,
    },
    {
        id: 3,
        text: 'Prop Meet',
        day: 'Jul 29th at 10:00pm',
        remainder: true,
    },
  ])
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id ))
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Job to Complete' }
    </div>
  );
}

export default App;


import Button from "./Button"

const Task = ({task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.text}
                <Button color='red' text='Delete' onClick={() => onDelete(task.id)} />
            </h3>
            <p>
                {task.day}
            </p>
        </div>
    )
}

export default Task

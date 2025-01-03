export default function TodoItem({ task, dispatch }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() =>
                    dispatch({
                        type: 'UPDATE_TODO',
                        task: {...task, done: !task.done }
                    })
                }
            />
            {task.text}
            <button 
                onClick={() => 
                    dispatch({
                        type: 'DELETE_TODO',
                        taskId: task.id
                    })
                }>
                Delete
            </button>
        </li>
    );
}
export default function TodoList({ tasks, dispatch }) {
    return (
        <>
        {tasks.map(task =>
        <li key={task.id}>
            <input
                onChange={() =>
                    dispatch({
                        type: 'UPDATE_TODO',
                        task: {...task, done: !task.done }
                    })
                }
                type="checkbox" checked={task.done}
            />
            {task.text}
            <button onClick={() => 
                dispatch({
                    type: 'DELETE_TODO',
                    taskId: task.id
                })}>
                        Delete
                </button>
        </li>
        )}
        </>
    )
}
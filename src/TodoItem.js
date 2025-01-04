import { useState } from 'react';

export default function TodoItem({ task, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);

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
            {isEditing ? (
                <input
                    type="text"
                    defaultValue={task.text}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setIsEditing(false);
                            dispatch({
                                type: 'UPDATE_TODO',
                                task: {...task, text: e.target.value}
                            });
                        }
                    }}
                />
            ) : (
                task.text
            )}
            <button onClick={() => setIsEditing(true)}>Edit</button>
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
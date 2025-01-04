import { useState } from 'react';

export default function TodoItem({ task, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleSave = () => {
        setIsEditing(false);
        dispatch({
            type: 'UPDATE_TODO',
            task: {...task, text: editText}
        });
    };

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
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSave();
                        }
                    }}
                />
            ) : (
                task.text
            )}
            <button onClick={() => {
                if (isEditing) {
                    handleSave();
                } else {
                    setIsEditing(true);
                }
            }}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
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
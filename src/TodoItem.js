import { useState } from 'react';

function TodoItem({ task, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleUpdate = () => {
        if (editText.trim()) {
            dispatch({
                type: 'UPDATE_TODO',
                task: { ...task, text: editText.trim() }
            });
            setIsEditing(false);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        } else if (e.key === 'Escape') {
            setEditText(task.text);
            setIsEditing(false);
        }
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() =>
                    dispatch({
                        type: 'UPDATE_TODO',
                        task: { ...task, done: !task.done }
                    })
                }
            />
            
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleUpdate}
                    onKeyDown={handleKeyPress}
                    autoFocus
                />
            ) : (
                <span>
                    {task.text}
                </span>
            )}
            
            <button
                onClick={() => {
                    if (isEditing) {
                        handleUpdate();
                    } else {
                        setIsEditing(true);
                    }
                }}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>

            <button 
                onClick={() => 
                    dispatch({
                        type: 'DELETE_TODO',
                        taskId: task.id
                    })
                }
            >
                Delete
            </button>
        </li>
    );
}
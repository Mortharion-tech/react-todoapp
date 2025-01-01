export default function AddTodo({ dispatch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        dispatch({
            type: 'ADD_TODO',
            text: (formData.get('text'))
        });
    }

    return (
        <form style={{ margin: 10 }} onSubmit={handleSubmit}>
            <input name="text" type="text" />
        </form>
    );
}
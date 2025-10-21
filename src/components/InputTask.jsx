function InputTask({ placeholder }) {
    return (
        <>
            <input type="textarea" placeholder={placeholder} />
            <button type="submit">Add Task</button>
        </>
    )
}
export default InputTask;
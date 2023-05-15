const AddTask = (props) => {
    const doAddTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
        <div className="container mt-4">
            <div className="card col-lg-6 offset-lg-3">
                <div className="card-header bg-primary text-white">
                    <h2 className="text-center">Add Task</h2>
                </div>

                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="task_desc" className="form-label">Add your Task  </label>
                        <input type="text" name="task_desc" className="form-control" id="task_desc" />
                    </div>
                </div>

                <div className="card-footer text-center bg-white">
                    <button className='btn btn-primary' onClick={doAddTask}>Add Task</button>
                </div>
            </div>
        </div>
    );
}

export default AddTask;
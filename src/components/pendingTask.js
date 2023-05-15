const PendingTask = (props) => {
    console.log(props);
    return(
        <div className="container pending-tasks-container">
            <div className="card col-lg-6 offset-lg-3 pending-tasks-card">
                <div className="card-body d-flex justify-content-between align-items-center p-2">
                    <div className="task-details d-flex justify-content-start align-items-center mt-2">
                        <h3>{props.data.task}</h3>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-success" type="button" onClick={()=>props.changetaskstatus(props.data._id)}>Update as Completed</ button>&nbsp;
                        <button className="btn btn-danger" type="button" onClick={()=>props.delete(props.data._id)}><i className="fa-sharp fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingTask;
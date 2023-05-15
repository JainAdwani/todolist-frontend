const CompletedTask = (props) => {
    console.log(props.data);
    return(
        <div className="container">
            <div className="card col-lg-6 offset-lg-3">
                <div className="card-body d-flex justify-content-between align-items-center p-2">
                    <div className="task-details d-flex justify-content-start align-items-center mt-2">
                        <h3>{props.data.task}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompletedTask;
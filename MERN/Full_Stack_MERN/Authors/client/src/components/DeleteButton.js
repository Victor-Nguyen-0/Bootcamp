const DeleteButton = (props) => {

    const {deleteCallBack} = props;

    return (
        <button style={{backgroundImage: "linear-gradient(red, yellow)", padding: "7px 13px", color:"white",
        fontWeight:"bold", margin:"5px", border:"none", borderRadius:"5px"}} onClick={deleteCallBack}>
            Delete
        </button>
    )
}

export default DeleteButton;
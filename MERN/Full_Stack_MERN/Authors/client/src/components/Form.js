import { useNavigate } from "react-router-dom";

const Form = (props) => {
    const {submitHandler, onChangeHandler, author, errors} = props;
    const navigate = useNavigate();

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label> Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={author.name}
                        onChange={(e) => onChangeHandler(e)}
                    />
                    {
                        errors.name ?
                            <span>{errors.name.message}</span>
                            : null
                    }
                    <button onClick={(e) => navigate("/")}>Cancel</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )


}

export default Form;
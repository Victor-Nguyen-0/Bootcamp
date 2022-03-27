import {useState} from "react";
import axios from "axios";

const SimpleHook = () => {
    const [authorList, setAuthorList] = useState([]);

    const getAll = () => {
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return {authorList, setAuthorList, getAll}

}

export default SimpleHook;
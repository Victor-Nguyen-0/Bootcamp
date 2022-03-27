import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import DisplayAllAuthors from "../components/AllAuthors";
import Header from "../components/Header";

const Main = (props) => {
    const [authorList, setAuthorList] = useState([]);
    const navigate = useNavigate();

    return (
        <div>
            <Header 
                link={"/author/new"}
                linkText={"Add an Author"}
                titleText={"We have quotes by:"}
            />
            <DisplayAllAuthors
                authorList={authorList}
                setAuthorList={setAuthorList}
            />
        </div>
    );

};

export default Main;
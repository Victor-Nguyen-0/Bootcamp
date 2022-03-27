import { Link } from "react-router-dom";

const Header = (props) => {
    const {link, linkText, titleText} = props

    return (
        <header>
            <h1 style={{
                fontSize: "50px", borderBottom: "5px double lightgray",
                marginLeft: "450px", marginRight: "450px"
            }}>
                Favorite Authors
            </h1>
            <Link to={`${link}`}>
                {linkText}
            </Link>
            <p style={{marginTop: "50px", color:"purple"}}>
                {titleText}
            </p>
        </header>
    );
}

export default Header;
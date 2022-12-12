import React,{FunctionComponent} from "react";
import {Link} from 'gatsby'

const IndexPage: FunctionComponent = () => {
    return (
        <div>
            <Link to="/info/">To Info</Link>
        </div>
    )
}

export default IndexPage;
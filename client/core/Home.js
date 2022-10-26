import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return (<div>
        <p>This is the Home page.</p>
        <Link to="/category">Category</Link>

    </div>)
}

export default Home;
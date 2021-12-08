import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/important">Important Tasks</Link>
            <Link to="/finished">Finished Tasks</Link>
        </div>
    )
}

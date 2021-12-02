import React from 'react'

export default function NavBar({changePage}) {
    return (
        <div>
            <button onClick={() => changePage("home")}>Home</button>
            <button onClick={() => changePage("important tasks")}>Important Tasks</button>
            <button onClick={() => changePage("finished tasks")}>Finished Tasks</button>
        </div>
    )
}

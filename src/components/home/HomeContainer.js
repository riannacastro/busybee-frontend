

export default function HomeContainer(props) {
    console.log(props)

        return (
            <div>
                <h1>All Lists:</h1>
                <ul>
                    {props.home.map(l => <li>{l.title}< br/> {l.tasks}</li>)}
                </ul>
            </div>
        )
}

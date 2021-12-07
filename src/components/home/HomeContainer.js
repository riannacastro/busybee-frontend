

export default function HomeContainer(props) {
    console.log(props)
    // state = {
    //     lists: []
    // }

    // componentDidMount() {
    //     fetch('http://localhost:3001/lists')
    //     .then(r => r.json())
    //     .then(data => this.setState({
    //         lists: data
    //     }))
    // }

        return (
            <div>
                <h1>Home working</h1>
                <ul>
                    {props.home.map(l => <li>{l.title}< br/> {l.tasks}</li>)}
                </ul>
            </div>
        )
}

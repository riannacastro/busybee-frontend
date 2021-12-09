import ListForm from "../ListForm"


export default function HomeContainer() {
    

        return (
            <div>
                <h1>All Lists:</h1>
                < ListForm />
                <ul>
                    {props.home.map(l => <li>{l.title}< br/> {l.tasks}</li>)}
                </ul>
            </div>
        )
}

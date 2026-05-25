import "./eachEvents.component.css"
export const EachEvent = ({e, handleDelete}) => {
    const {Title, Description, Date, Location, Category} = e;

    

    return(
        <div className="each-event-container">
            <h2>{Title}</h2>
            <h2>{Description}</h2>
            <h2>{Date}</h2>
            <h2>{Location}</h2>
            <h2>{Category}</h2>
            <button onClick={() => handleDelete(Title)}>🗑️</button>
        </div>
    )
}
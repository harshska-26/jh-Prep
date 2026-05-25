import { useEffect, useState } from "react";
import { addEventService, deleteEventService, getEventsService } from "../../service/api.service";
import { EachEvent } from "../eachEvent.component/eachEvents.component";

export const AllEvents = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [formData, setFormData] = useState({
        Title: "",
        Description: "",
        Date: "",
        Location: "Hyderabad",
        Category: "Business"
    });

    const DataService = async () => {
        const data = await getEventsService();
        console.log(data);
        setAllEvents(data?.events || []); 
    };

    useEffect(() => {
        DataService();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddEvent = async () => {
        // Wait for server verification to prevent ghost/failed data in UI
        const check = await addEventService(formData);
        if (check) {
            DataService(); // Refresh the list with validated database entry
            setFormData({
                Title: "",
                Description: "",
                Date: "",
                Location: "Hyderabad",
                Category: "Business"
            });
        }
    };

    const handleDelete = async (title) => {
        await deleteEventService(title);
        DataService();
    };

    return (
        <div className="events-container">
            <div className="input-section">
                <input
                    type="text"
                    name="Title"
                    placeholder="Event Title"
                    value={formData.Title} // Added value binding
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="Event Description"
                    name="Description"
                    value={formData.Description} // Added value binding
                    onChange={handleInputChange}
                />

                <input
                    type="date"
                    name="Date"
                    value={formData.Date} // Added value binding
                    onChange={handleInputChange}
                />

                <label>Select the location</label>
                <select 
                    name="Location" 
                    value={formData.Location} // Added value binding
                    onChange={handleInputChange}
                >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Kolkata">Kolkata</option>
                </select>

                <label>Select Category</label>
                <select 
                    name="Category" 
                    value={formData.Category} // Added value binding
                    onChange={handleInputChange}
                >
                    <option value="Business">Business</option>
                    <option value="Social">Social</option>
                    <option value="Tech">Tech</option>
                </select>
            </div>

            <button onClick={handleAddEvent}>Add Event</button>

            <div>
                {allEvents.map((eachEvent, index) => {
                    // Tip: Use a unique database ID instead of index if available
                    return <EachEvent key={index} e={eachEvent} handleDelete={handleDelete} />;
                })}
            </div>
        </div>
    );
};

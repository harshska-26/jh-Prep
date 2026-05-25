import { useEffect, useState } from "react"
import { addUserService, deleteUserService, getUsersService, updateUserService } from "../../service/api.service"
import { EachUser } from "../eachUser.component.jsx/eachUser.component";

export const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        id: self.crypto.randomUUID(),
        Username: "",
        Email: "",
        Role: "Admin",
        Status: "Active"
    })


    const DataService = async () => {
        const response = await getUsersService();
        console.log(response)
        setAllUsers(response.users);
    }

    useEffect(() => {
        DataService()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    const handleDeleteUser = async (id) => {
        setAllUsers(allUsers.filter(user => user.id !== id));
        await deleteUserService(id);
        DataService();
    }

    const handleEditClick = (userToEdit) => {
        setIsEditing(true);
        setFormData({
            id: userToEdit.id,
            Username: userToEdit.Username,
            Email: userToEdit.Email,
            Role: userToEdit.Role,
            Status: userToEdit.Status
        });
    };

    const handleSaveOrUpdateUser = async () => {
        if (isEditing) {
            // --- UPDATE LOGIC ---
            // 1. Instantly swap out the edited user entry inside your local state array
            const updatedLocalList = allUsers.map((user) => 
                user.id === formData.id ? formData : user
            );
            console.log(updatedLocalList)
            setAllUsers(updatedLocalList);

            // 2. Fire update payload to backend JSON server
            const check = await updateUserService(formData.id, formData);
            if (check) {
                resetForm();
                DataService();
            }
        } else {
            // --- STANDARD ADD LOGIC ---
            setAllUsers([...allUsers, formData]);
            const check = await addUserService(formData);
            if (check) {
                resetForm();
                DataService();
            }
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setFormData({
            id: self.crypto.randomUUID(),
            Username: "",
            Email: "",
            Role: "Admin",
            Status: "Active"
        });
    };

    return (
        <div className="users-container">
            <div className="input-section">
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={formData.Username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    value={formData.Email}
                    onChange={handleChange}
                />

                <label>Select Role</label>
                <select name="Role" value={formData.Role} onChange={handleChange}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Moderator">Moderator</option>
                </select>

                <label>Select Status</label>
                <select name="Status" value={formData.Status} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

            <button onClick={handleSaveOrUpdateUser}>
                {isEditing ? "Update User" : "Add User"}
            </button>
            {isEditing && <button onClick={resetForm} style={{ marginLeft: "10px" }}>Cancel Edit</button>}

            <div className="users-list-display">
                {allUsers.map((eachUser, index) => (
                    <EachUser
                        key={eachUser.id || index}
                        u={eachUser}
                        onDelete={handleDeleteUser}
                        onEdit={handleEditClick} // Pass the click handler into child card
                    />
                ))}
            </div>
        </div>
    );
}
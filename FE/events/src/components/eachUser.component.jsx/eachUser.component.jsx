export const EachUser = ({ u, onDelete, onEdit }) => {
    const { id, Username, Email, Role, Status } = u || {};

    return (
        <div className="each-user-container">
            <h2>{Username}</h2>
            <p>{Email}</p>
            <h3>Role: {Role}</h3>
            <h4>Status: {Status}</h4>
            <button onClick={() => onEdit(u)}>Edit User</button>
            <button onClick={() => onDelete(id)}>Delete User</button>
        </div>
    );
};

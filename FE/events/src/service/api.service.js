import axios from "axios";

export const getEventsService = async () => {
    try {
        const response = await axios.get("http://localhost:2000/getEvents");
        return response.data;
    } catch (e) {
        console.log(`Error at Service ${e}`);
        throw e;
    }
}

export const addEventService = async (dataObj) => {
    try {
        const payload = dataObj;
        const response = await axios.post("http://localhost:2000/addEvent", payload);
        console.log(`payload : ${payload}`)
        return response.data;
    } catch (e) {
        console.log(`Error at Service ${e}`);
        throw e;
    }
}

export const deleteEventService = async (title) => {
    try {
        const service = await axios.delete("http://localhost:2000/delEvent", { data: { Title: title } })
        return service.data;
    } catch (e) {
        console.log(`Error at Service ${e}`);
        throw e;
    }
}

export const deleteUserService = async (id) => {
    try {
        const response = await axios.delete("http://localhost:2000/delUser", {
            data: { id: id }
        });
        return response.data;
    } catch (e) {
        console.error(`Error at Delete User Service: ${e}`);
        throw e;
    }
};

export const addUserService = async (dataObj) => {
    try {
        const payload = dataObj;
        const response = await axios.post("http://localhost:2000/addUser", payload);
        console.log("payload :", payload);
        return response.data;
    } catch (e) {
        console.error(`Error at Add User Service: ${e}`);
        throw e;
    }
};

export const getUsersService = async () => {
    try {
        const response = await axios.get("http://localhost:2000/getUsers");
        return response.data;
    } catch (e) {
        console.error(`Error at Get Users Service: ${e}`);
        throw e;
    }
};

export const updateUserService = async (id, updatedDataObj) => {
    try {
        const response = await axios.put(`http://localhost:2000/updateUser`, {
            id: id,
            ...updatedDataObj
        });
        return response.data;
    } catch (e) {
        console.error(`Error at Update User Service: ${e}`);
        throw e;
    }
};
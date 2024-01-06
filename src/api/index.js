import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.mysigil.io",
  headers: { "X-Custom-Header": "foobar" , jwt: localStorage.getItem("access_token")},
});

export const accountLogin = (payload) => {
  return instance.post("/login", payload);
};

export const accountRegister = (payload) => {
  return instance.post("/registeruser", payload);
};

export const forgotPassword = (payload) => {
  return instance.post("/forgotpassword", payload);
};

export const verifyToken = (payload) => {
  return instance.get(`/verifytoken/${payload.token}`);
};

export const fetchUser = ()=>{
  return instance.get(`/userdetails`);
}

export const resetPassword = (payload) => {
  return instance.put(`/updateuserPassword/${payload.id}`, payload);
};

export const Coutries = () => {
  return instance.get("https://restcountries.com/v3.1/all");
};

export const TimeZone = () => {
  return instance.get(`http://worldtimeapi.org/api/timezone`);
};


export const createWorkSpace = (payload) => {
  return instance.post("/createWorkspace", payload);
}


export const fetchWorkSpaces = () => {
  return instance.get(`/fetchallWorkspaces`);
};

export const updateWorkSpace = (id, payload) => {
  return instance.put(`/updateWorkspace/${id}`, payload);
}

export const deleteWorkSpace = (id) => {
  return instance.delete(`/deleteWorkspace/${id}`);
}

export const createDepartment = (payload) => {
  return instance.post("/createDepartment", payload);
}

export const fetchDepartments = (workspaceId) => {
  return instance.get(`/fetchallDepartments/${workspaceId}`);
}

export const fetchSingleDepartment = (id) => {
  return instance.get(`/fetchsingleDepartment/${id}`);
}

export const removeDepartmentUser = (userId, departmentId) => {
  return instance.post(`/removeoneUser/${departmentId}`, { userId });
}

export const deleteDepartment = (id) => {
  return instance.delete(`/deleteDepartment/${id}`);
}

export const editDepartment = (id, payload) => {
  return instance.put(`/updatesingleDepartment/${id}`, payload);
}

export const createCoWorker = (payload) => {
  return instance.post("/createCoworker", payload);
}

export const fetchCoWorkers = (workspaceId) => {
  return instance.get(`/fetchallCoworker/${workspaceId}`);
}

export const fetchSingleCoWorker = (coworkerId) => {
  return instance.get(`/fetchsingleCoworker/${coworkerId}`);
}

export const updateCoWorker = (id, payload) => {
  return instance.put(`/updatesingleCoworker/${id}`, payload);
}

export const createContact = (payload) => {
  return instance.post("/createContact", payload);
}


export const fetchContacts = (workspaceId) => {
  return instance.get(`/fetchallContacts/${workspaceId}`);
}

export const updateContact = (id, payload) => {
  return instance.put(`/updatesingleContact/${id}`, payload);
}

export const deleteContact = (id) => {
  return instance.delete(`/deleteContact/${id}`);
}

export const fetchAlltemplates = () => {
  return instance.get(`/fetchAlltemplates`);
}

export const fetchSingletemplates = (id) => {
  return instance.get(`/fetchsingletemplate/${id}`);
}
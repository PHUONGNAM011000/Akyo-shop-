const axios = require("axios");

const JSON_DOMAIN = "http://localhost:5000";

export async function getUsers() {
  const response = await axios.get(`${JSON_DOMAIN}/users`);

  const data = await response.data;

  const users = [];

  for (const key in data) {
    const user = {
      id: key,
      ...data[key],
    };

    users.push(user);
  }

  return users;
}

export async function addUser(userData) {
  const response = await axios.post(`${JSON_DOMAIN}/users`, userData);

  const data = await response.data;

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function getUsersLogin() {
  const response = await axios.get(`${JSON_DOMAIN}/usersLogin`);

  const data = await response.data;

  const users = [];

  for (const key in data) {
    const user = {
      id: key,
      ...data[key],
    };

    users.push(user);
  }

  return users;
}

export async function addUsersLogin(userData) {
  const response = await axios.post(`${JSON_DOMAIN}/usersLogin`, userData);

  const data = await response.data;

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

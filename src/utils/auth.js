import { request } from "./api.js";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.richj.crabdance.com"
    : "http://localhost:3001";

export function signUp({ name, avatar, email, password }) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((data) => {
    if (data.error) {
      console.log(data.error);
      throw new Error(data.error);
    }
    console.log(data);
  });
}

export function signIn(email, password) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    if (data.token) {
      localStorage.setItem("jwt", data.token);
      return data;
    } else {
      return;
    }
  });
}

export const checkToken = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((data) => data);
};

export function editProfileData(userData, token) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: userData.name,
      avatar: userData.avatar,
    }),
  });
}

const baseUrl = "http://localhost:3001";

export const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const request = (url, option) => {
  return fetch(url, option).then(checkServerResponse);
};

export function getItems() {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export function addNewItem(itemData, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: itemData.name,
      weather: itemData.weather,
      imageUrl: itemData.imageUrl,
    }),
  });
}

export function deleteItem(itemId, token) {
  return request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export function addCardLike(itemId, token) {
  return request(`${baseUrl}/items/${itemId}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export function removeCardLike(itemId, token) {
  return request(`${baseUrl}/items/${itemId}/likes`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

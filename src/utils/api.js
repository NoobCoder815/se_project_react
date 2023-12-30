const api = {
  baseUrl: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
};

const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const request = (url, option) => {
  return fetch(url, option).then(checkServerResponse);
};

export function getItems() {
  return request(`${api.baseUrl}/items`, {
    method: "GET",
    headers: api.headers,
  });
}

export function addNewItem(itemData) {
  return request(`${api.baseUrl}/items`, {
    method: "POST",
    headers: api.headers,
    body: JSON.stringify({
      name: itemData.name,
      weather: itemData.weather,
      imageUrl: itemData.imageUrl,
    }),
  });
}

export function deleteItem(itemId) {
  return request(`${api.baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: api.headers,
  });
}

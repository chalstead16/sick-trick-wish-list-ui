const fetchTricks = () => {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(response => {
    if(!response.ok) {
      throw new Error("Unable to retrieve data")
      } else {
        return response.json()
      }
  })
};

const postTrick = (data) => {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(err => console.log(err));
}

export { fetchTricks, postTrick };
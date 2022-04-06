const getTricksData = () => {
    fetch('http://example.com/movies.json')
  .then(response => response.json())
}

export default getTricksData;
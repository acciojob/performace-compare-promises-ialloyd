// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here

const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const fetchAllData = async () => {
  const start = performance.now();
  const results = await Promise.all(apiUrls.map(fetchData));
  const end = performance.now();
  document.getElementById('output-all').innerHTML = `Time taken: ${end - start}ms`;
};

const fetchAnyData = async () => {
  const start = performance.now();
  const result = await Promise.any(apiUrls.map(fetchData));
  const end = performance.now();
  document.getElementById('output-any').innerHTML = `Time taken: ${end - start}ms`;
};

fetchAllData();
fetchAnyData();

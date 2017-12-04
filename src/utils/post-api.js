let  myInit = { method: 'GET',
               headers: {'Authorization': "Parvinder"}};
export const fetchPosts = () => fetch('http://localhost:3001/posts', myInit).then(response => response.json());
export const fetchSpecificPosts = (data) => fetch(`http://localhost:3001/${data}/posts`, myInit).then(response => response.json());

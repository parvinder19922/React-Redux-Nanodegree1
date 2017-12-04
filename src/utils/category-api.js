let  myInit = { method: 'GET',
               headers: {'Authorization': "Parvinder"}};
export const fetchCategories = () => fetch('http://localhost:3001/categories', myInit).then(response => response.json());
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '6fcc097d21msh914717f4f282134p1ff1f4jsnedfc614a3a6c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
const response = await fetch (url, options);
const data = await response.json();

return data
}
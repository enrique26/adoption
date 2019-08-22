import React , { useState, useEffect } from 'react';

const useGetsPets= (url) => {
  const [pets,setPets] = useState([]);

  useEffect( () =>{
    fetch(url).then( response=>response.json()).then(data=>setPets(data));

  },[] );

  return pets;
}


export default useGetsPets;

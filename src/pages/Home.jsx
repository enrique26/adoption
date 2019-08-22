import React from 'react';
import useGetsPets from '../hooks'
import PetItem from '../components/PetItem';
import {Link} from 'react-router-dom'

const API = "https://us-central1-agentereact.cloudfunctions.net/api";


const Home = () => {

  const pets = useGetsPets(API);

  return(<div className="Home">
    <div className="Home-container">
      <div className="Home-items">

        {
          pets.length > 0 &&
          pets.map( (pet , index)=>(
            <Link key={"linkpet"+index} to={{
                pathname:`/mascotas/${index}-${pet.name}`,
                state:{ ...pet }
              }}>
              <PetItem key={"idpet"+index} pet={pet}></PetItem>
            </Link>
          ))
        }

      </div>
    </div>
  </div>
)
};

export default Home;

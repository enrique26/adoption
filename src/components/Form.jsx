import React, {useState} from 'react';
import {storage, database} from '../utils/firebase';
import {connect } from 'react-redux'


const Form = (props) => {

  const [petPhoto,setPetPhoto] = useState('');

  const [sendForm,setSendform] = useState(false);

  const handleSummit = (event) => {
    event.preventDefault();

    const form =  new FormData(event.target);
    const newDate = new Date().toISOString();

    const data = {
      'adopt':form.get('adopt'),
      'data':newDate,
      'description':form.get('description'),
      'gender':form.get('gender'),
      'name':form.get('name'),
      'photo': petPhoto,
      'profilePic':props.user.photoURL,
      'type':form.get('type'),
      'userContact':props.user.email,
      'userName':props.user.displayName
    }

    database.ref('pets').push(data)
      .then( (response)=>{ console.log(response);setSendform(true) })
        .catch( (response) => {console.log("error:"+response); setSendform(false)});


  }

  const onChange = (event) => {
    const file = event.target.files[0];
    const storageRef = storage.ref();
    const name = (+new Date())+'-'+file.name

    const uploadFile = storageRef.child(name).put(file);

    uploadFile.then( (snapshot)=>{
      snapshot.ref.getDownloadURL()
        .then( (imagen)=> {console.log(imagen); setPetPhoto(imagen)} )
    } )

  }

  return(
  <div className="Form">
    <div className="Form-container">
      <h2>Dar en adopción</h2>
    </div>
    <div className="Form-item">

      {sendForm === true &&
        <div className="Form-send">
          <span>!guardado con exito</span>
        </div>
      }
      {sendForm === false &&
        <form onSubmit={handleSummit}>
          <input name="name" type="text" placeholder="Nombre de la mascota"></input>
          <input name="description" type="text" placeholder="describe tu mascota"></input>
          <select name="type">
            <option disabled selected value="">Seleccionar</option>
            <option value="gato">gato</option>
            <option value="perro">perro</option>
          </select>

          <select name="gender" >
            <option disabled selected value="">Seleccionar</option>
            <option value="female">Hembra</option>
            <option value="male">Macho</option>
          </select>

          <select name="adopt" >
            <option disabled selected value="">Seleccionar</option>
            <option value="true">Dar en adopción</option>
            <option value="false">cuidar</option>
          </select>

          <input type="file" name="photo" onChange={onChange}></input>
          <button>Enviar</button>

        </form>
      }
    </div>
  </div>
)};


const mapStateToProps = state => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(Form);

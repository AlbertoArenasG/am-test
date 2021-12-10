import React, { memo, useState } from "react";
import { API } from "../../helpers/http.helper";
import "./Modal.scss";
import CloseIcon from "../../assets/icons/close.svg";
import Button from "../button/Button";

const initialValues = {
  name: "",
  dateOfBirth: "",
  eyeColour: "",
  hairColour: "",
  gender: "mujer",
  posicion: "estudiante",
  image: "",
  alive: true,
};

const Modal = memo(({ visibility, setVisibility }) => {
  const [values, setValues] = useState(initialValues);

  function imageUploaded(file, setValues, values) {
    let base64String = "";
    let imageBase64Stringsep = "";
    var reader = new FileReader();
    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      imageBase64Stringsep = base64String;
      // alert(imageBase64Stringsep);
      console.log(imageBase64Stringsep)
      setValues({ ...values, image: imageBase64Stringsep });
    };
    reader.readAsDataURL(file);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name==='image'){
      imageUploaded(e.target.files[0], setValues, values);
      return
    }
    setValues({...values,[name]:value})
  };
console.log(values)
  const onSubmitFunc = (e) => {
    e.preventDefault();
    const api = API();
    let body={
      name: values.name,
      dateOfBirth: values.dateOfBirth,
      eyeColour: values.eyeColour,
      hairColour: values.hairColour,
      gender: values.gender,
      image: values.image,
      alive: true,
      hogwartsStudent: values.posicion==='estudiante'?true:false,
      hogwartsStaff: values.posicion==='staff'?true:false,
    }
    api.post('characters', body).then((res) => {});
    setValues(initialValues)
   setVisibility(false)
  };

  return (
    <div className={`modal-container ${visibility ? "visible" : ""}`}>
      <div className={`modal`}>
        <div className="title">
          <h1>Agrega un personaje</h1>
          <img src={CloseIcon} alt="CloseIcon" onClick={()=>setVisibility(false)} />
        </div>

        <form onSubmit={onSubmitFunc}>
          <div>
            <label>nombre</label>
            <input
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>cumpleaños</label>
            <input
              type="text"
              value={values.dateOfBirth}
              name="dateOfBirth"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>color de ojos</label>
            <input
              type="text"
              value={values.eyeColour}
              name="eyeColour"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>color de pelo</label>
            <input
              type="text"
              value={values.hairColour}
              name="hairColour"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="radio"
              id="mujer"
              name="gender"
              value="mujer"
              checked={values.gender === "mujer"}
              onClick={handleChange}
            />
            <label htmlFor="mujer">Mujer</label>
          </div>

          <div>
            <input
              type="radio"
              checked={values.gender === "hombre"}
              id="hombre"
              name="gender"
              value="hombre"
              onClick={handleChange}
            />
            <label htmlFor="hombre">Hombre</label>
          </div>

          <div>
            <input
              type="radio"
              id="estudiante"
              name="posicion"
              value="estudiante"
              checked={values.posicion === "estudiante"}
              onClick={handleChange}
            />
            <label htmlFor="estudiante">Estudiante</label>
          </div>

          <div>
            <input
              type="radio"
              id="staff"
              name="posicion"
              value="staff"
              checked={values.posicion === "staff"}
              onClick={handleChange}
            />
            <label htmlFor="staff">Staff</label>
          </div>

          <input type="file" name="image" onChange={handleChange} />
          <div>
            <Button type="submit">GUARDAR</Button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Modal;

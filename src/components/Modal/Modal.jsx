import React, { memo, useState } from "react";
import { API } from "../../helpers/http.helper";
import "./Modal.scss";
import CloseIcon from "../../assets/icons/close.svg";
import Button from "../button/Button";
import { useHogwartsActions } from "../../redux/actions/useHogwartsActions";
import { useSelector } from "react-redux";

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

const Houses = ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw']

const Modal = memo(({ visibility, setVisibility }) => {
  const characters = useSelector((state) => state.hogwarts.characters);
  const { setCharactersData, setStudentsData, setStaffData } = useHogwartsActions()
  const [values, setValues] = useState(initialValues);

  function imageUploaded(file, setValues, values) {
    let base64String = "";
    let imageBase64Stringsep = "";
    var reader = new FileReader();
    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      imageBase64Stringsep = base64String;
      // alert(imageBase64Stringsep);
      console.log(imageBase64Stringsep);
      setValues({ ...values, image: imageBase64Stringsep });
    };
    reader.readAsDataURL(file);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "image") {
      imageUploaded(e.target.files[0], setValues, values);
      return;
    }
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  const onSubmitFunc = (e) => {
    e.preventDefault();
    const api = API();
    let body = {
      name: values.name,
      dateOfBirth: values.dateOfBirth,
      eyeColour: values.eyeColour,
      hairColour: values.hairColour,
      gender: values.gender,
      image: values.image,
      alive: true,
      hogwartsStudent: values.posicion === "estudiante" ? true : false,
      hogwartsStaff: values.posicion === "staff" ? true : false,
      house:Houses[Math.floor(Math.random() * (4 - 0)) + 0]
    };
    api.post("characters", body).then((res) => {});
    setValues(initialValues);
    let newCaracters = [...characters]
    const studentsData = [];
    const staffData = [];
    newCaracters.push(body)
    newCaracters.forEach((item) => {
      if (item.hogwartsStudent) {
        studentsData.push(item);
      }
      if (item.hogwartsStaff) {
        staffData.push(item);
      }
    });
    setCharactersData(newCaracters)
    setStudentsData(studentsData)
    setStaffData(staffData)
    const inputFile = document.getElementById('input-file')
    inputFile.value=''
    setVisibility(false);
  };

  return (
    <div className={`modal-container ${visibility ? "visible" : ""}`}>
      <div className={`modal`}>
        <div className="title">
          <h1>Agrega un personaje</h1>
          <img
            src={CloseIcon}
            alt="CloseIcon"
            onClick={() => setVisibility(false)}
          />
        </div>

        <form onSubmit={onSubmitFunc}>
          <div className="labeled-input">
            <label>nombre</label>
            
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
       
          </div>

          <div className="labeled-input">
            <label>cumpleaños</label>
           
              <input
                type="text"
                value={values.dateOfBirth}
                name="dateOfBirth"
                onChange={handleChange}
              />
         
          </div>

          <div className="labeled-input">
            <label>color de ojos</label>
           
              <input
                type="text"
                value={values.eyeColour}
                name="eyeColour"
                onChange={handleChange}
              />
           
          </div>

          <div className="labeled-input">
            <label>color de pelo</label>
           
              <input
                type="text"
                value={values.hairColour}
                name="hairColour"
                onChange={handleChange}
              />
           
          </div>
          <div className="radio-group">
            <div className="radio-title">GÉNERO</div>
            <div className="labeled-radio">
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

            <div className="labeled-radio">
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
          </div>

          <div className="radio-group">
            <div className="radio-title">POSICIÓN</div>
            <div className="labeled-radio">
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

            <div className="labeled-radio">
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
          </div>

          <input type="file" id='input-file' name="image" onChange={handleChange} />

          <div className='button-section'>
            <div style={{width:'40%'}}>
            <Button width='100%' type="submit">GUARDAR</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Modal;

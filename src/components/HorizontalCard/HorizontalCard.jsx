import React, { memo } from "react";
import { API } from "../../helpers/http.helper";
import "./HorizontalCard.scss";
import MarkOutline from "../../assets/icons/mark.svg";
import MarkFilled from "../../assets/icons/mark-dark.svg";
import { useHogwartsActions } from "../../redux/actions/useHogwartsActions";
import { useSelector } from "react-redux";
const HorizontalCard = memo(({ characterInfo, id }) => {
  const { setFavoritesData } = useHogwartsActions();
  const favorites = useSelector((state) => state.hogwarts.favorites);
  const api = API();
  const dateOfBirth= characterInfo.dateOfBirth
  const gender =  characterInfo.gender
  const eyeColour =  characterInfo.eyeColour
  const hairColour =  characterInfo.hairColour
 
  const charName = characterInfo.name;
  const charStatus = characterInfo.alive ? "VIVO" : "FINADO";
  const charRol = characterInfo.hogwartsStudent ? "ESTUDIANTE" : "STAFF";

  const onFavorites = favorites.filter((item) => item.id === id);

  let image = `url(${characterInfo.image})`
  if(!image.includes('http')) image = `url(data:image/jpeg;base64,${characterInfo.image})`

  let Style = {};
  if (characterInfo) Style = {...Style, backgroundImage:image };

  let Style2 = {background:'linear-gradient(135deg, #FF0000 0%, #FED482 100%)'};
  if (characterInfo.house==='Slytherin') Style2 = {...Style2, background:'linear-gradient(135deg, #1C792B 0%, #82E95E 100%)' }
  if (characterInfo.house==='Hufflepuff') Style2 = {...Style2, background:'linear-gradient(135deg, #FFC700 0%, #FFF388 100%)' }
  if (characterInfo.house==='Ravenclaw') Style2 = {...Style2, background:'linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)' }
 

  const addToFavorite = () => {
    if (favorites.length >= 5) return;
    const newArray = [...favorites];
    newArray.push({ ...characterInfo, id });
    api.post("favorites", { ...characterInfo, id }).then((res) => {});
    setFavoritesData(newArray);
  };


  return (
    <div className={`card-container ${characterInfo.alive? '': 'dead'} `}>
      <div className="left-side" style={Style2}>
        <div style={Style} className="avatar" />
      </div>

      <div className="right-side">
        <div className="caracter-status">
          <div className='status'>
            {charStatus} / {charRol}
          </div>
          <div className='markup'>
            {onFavorites.length > 0 ? (
              <img src={MarkFilled} alt="mark filled" />
            ) : (
              <img
                onClick={addToFavorite}
                src={MarkOutline}
                alt="mark outline"
              />
            )}
          </div>
        </div>

        <div className="caracter-name" >{charName}</div>

        <div className="caracter-info">
          <div className='caracter-feature'>
            <span>Cumplea&ntilde;os: </span>
            {dateOfBirth}
          </div>
          <div className='caracter-feature'>
            <span>Género: </span>
            {gender}
          </div>
          <div className='caracter-feature'>
            <span>Color de ojos: </span>
            {eyeColour}
          </div>
          <div className='caracter-feature'>
            <span>Color de pelo: </span>
            {hairColour}
          </div>
        </div>
      </div>
    </div>
  );
});

export default HorizontalCard;

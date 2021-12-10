import React, { memo, useState, Fragment } from "react";
import "./Favorites.scss";
import { useSelector } from "react-redux";
import { useHogwartsActions } from "../../../redux/actions/useHogwartsActions";
import { API } from "../../../helpers/http.helper";
import MarkWhite from "../../../assets/icons/mark-white.svg";
import Add from "../../../assets/icons/add.svg";
import Trash from "../../../assets/icons/trash.svg";
import Modal from '../../Modal/Modal';

const Favorites = memo(() => {
  const api = API();
  const { setFavoritesData } = useHogwartsActions();
  const favorites = useSelector((state) => state.hogwarts.favorites);
  const [visibility, setVisibility] = useState(false);
  const [modalVisibility, setmodalVisibility] = useState(false);


  const handleDropdownVisibility = () => {
    setVisibility(!visibility);
  };

  const deleteCharFromFavorite = (char) => {
    let newArray = favorites.filter((item) => item.id !== char.id);
    api.remove(`favorites/${char.id}`).then((res) => {});
    setFavoritesData(newArray);
  };

  const renderFavorites = favorites.map((res, key) => {
    let Style = {};
    Style = { ...Style, backgroundImage: `url(${res.image})` };
    let Style2 = {};
    if(key===favorites.length-1)Style2 = { ...Style2, border:'0' };
    return (
      <div key={key} className="favorite-item" style={Style2}>
        <div className="name">
          <div style={Style} className="avatar" />
          <span>{res.name}</span>
        </div>

        <div className="image" onClick={()=>deleteCharFromFavorite(res)}>
          <img src={Trash} alt="trash" />
        </div>
      </div>
    );
  });

  return (
    <Fragment>
    <div className="favorite-dropdown-container">
      <div className="favorite-dropdown">
        <div className="tab" onClick={handleDropdownVisibility}>
          FAVORITOS
          <img src={MarkWhite} alt="mark" />
        </div>

        <div className="tab" onClick={()=>setmodalVisibility(true)}>
          AGREGAR
          <img src={Add} alt="mark" />
        </div>
      </div>

      <div className={`dropdown-content ${visibility ? "visible" : ""}`}>
        {renderFavorites}
      </div>
    </div>
    <Modal visibility={modalVisibility} setVisibility={setmodalVisibility}/>
    </Fragment>
  );
});

export default Favorites;

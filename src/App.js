import { API } from './helpers/http.helper'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Buttons from './components/custom/Buttons/Buttons'
import Cards from './components/custom/Cards/Cards'
import Favorites from './components/custom/Favorites/Favorites'
import Title from './components/custom/Title/Title'
import { useHogwartsActions } from "./redux/actions/useHogwartsActions";

function App() {
  const { setCharactersData, setFavoritesData, setStudentsData, setStaffData, setAliveData } = useHogwartsActions();
  const api = API();
  useEffect(() => {
    const getCharacters = ()=>{
      api.get('characters').then((res) => {
        const studentsData = [];
        const staffData = [];
        const aliveData = [];
        res.data.forEach((item) => {
          if (item.hogwartsStudent) {
            studentsData.push(item);
          }
          if (item.hogwartsStaff) {
            staffData.push(item);
          }
          if (item.alive) {
            aliveData.push(item);
          }
        });
        setCharactersData(res.data);
        setStudentsData(studentsData);
        setStaffData(staffData);
        setAliveData(aliveData);
      });
    }
    const getFavorites = () =>{
      api.get('favorites').then((res) => {
        setFavoritesData(res.data);
      });
    }
    getCharacters()
    getFavorites()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      <Favorites/>
      <div className='container'>
        <Title/>
        <Buttons/>
        <Cards/>
      </div>

    </div>
  );
}

export default App;

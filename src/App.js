import { useSelector } from 'react-redux';
import Buttons from './components/custom/Buttons/Buttons'
import Cards from './components/custom/Cards/Cards'
import Favorites from './components/custom/Favorites/Favorites'
import Title from './components/custom/Title/Title'

function App() {
  const students = useSelector((state) => state.hogwarts.students);
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

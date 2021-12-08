import { useSelector } from "react-redux";

function App() {
  const students = useSelector((state) => state.hogwarts.students);
  return (
    <div className='App'>
      PRUEBA REACT
    </div>
  );
}

export default App;

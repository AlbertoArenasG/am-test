import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useHogwartsActions = () => {
  const dispatch = useDispatch();
  const setCharactersData = useCallback(
    (data) => dispatch({ type: 'SET_CHARACTERS_DATA', payload: data }),
    [dispatch]
  );
  const setStudentsData = useCallback(
    (data) => dispatch({ type: 'SET_STUDENTS_DATA', payload: data }),
    [dispatch]
  );
  const setStaffData = useCallback(
    (data) => dispatch({ type: 'SET_STAFF_DATA', payload: data }),
    [dispatch]
  );
  const setFavoritesData = useCallback(
    (data) => dispatch({ type: 'SET_FAVORITES_DATA', payload: data }),
    [dispatch]
  );
  /* Here u can add more functions like this and exported here on the return */
  return { setStudentsData, setStaffData, setFavoritesData, setCharactersData };
};

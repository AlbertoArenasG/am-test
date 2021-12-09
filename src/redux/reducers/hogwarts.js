const initialState = {
  characters: [],
  students: [],
  staff: [],
  favorites: []
};

const Session = (state = initialState, {
  type,
  ...data
}) => {
  switch (type) {
    case 'SET_CHARACTERS_DATA':
      return {
        ...state, characters: data.payload
      };
    case 'SET_STUDENTS_DATA':
      return {
        ...state, students: data.payload
      };
    case 'SET_STAFF_DATA':
      return {
        ...state, staff: data.payload
      };
    case 'SET_FAVORITES_DATA':
      return {
        ...state, favorites: data.payload
      };
    default:
      return state;
  }
};

export default Session;
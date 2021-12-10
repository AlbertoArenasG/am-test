const initialState = {
  characters: [],
  students: [],
  staff: [],
  favorites: [],
  selected_type_character:''
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
      case 'SET_SELECTED_TYPE_CHARACTER':
        return {
          ...state, selected_type_character: data.payload
        };
    default:
      return state;
  }
};

export default Session;
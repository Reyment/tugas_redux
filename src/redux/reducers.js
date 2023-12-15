// src/redux/reducers.js
const initialState = {
  hasil: 0,
};

const kalkulatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TAMBAH_ANGKA':
      return { hasil: state.hasil + action.payload };

    case 'KURANG_ANGKA':
      const newHasil = state.hasil - action.payload;
      return { hasil: newHasil >= 0 ? newHasil : 0 };

    default:
      return state;
  }
};

export default kalkulatorReducer;

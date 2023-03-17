import {GET_MOTORCYCLES} from '../types';
import getMotorcyclesFromDB from '../../APIs/motorcycles';

const initialState = [];

export const getMotorcycles = () => async (dispatch) => {
  const motorcycles = await getMotorcyclesFromDB();
  dispatch({
    type: GET_MOTORCYCLES,
    payload: motorcycles,
  });
};

export const motorcyclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOTORCYCLES:
      return action.payload;

    default:
      return state;
  }
};
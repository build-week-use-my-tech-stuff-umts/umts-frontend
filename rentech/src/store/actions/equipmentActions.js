import {umtsApi} from '../../api/umtsApi';
import {umtsApiWithAuth} from '../../api/umtsApiWithAuth';

import { types }from './index'


export const getEquipmentList = () => async dispatch =>{
  dispatch({ type: types.GET_EQUIP_LIST_START});

  try {
    const res = await umtsApiWithAuth.get('/rentItems');

    dispatch({type: types.GET_EQUIP_LIST_SUCCESS, payload: res.data});

  } catch (error) {
    dispatch({type: types.GET_EQUIP_LIST_FAIL, payload: error});
  }
};

export const getEquipmentItem = () => async dispatch =>{
  dispatch({ type: types.GET_EQUIP_START});

  try {
    const res = await umtsApiWithAuth.get('/rentItems');

    dispatch({type: types.GET_EQUIP_SUCCESS, payload: res.data});

  } catch (error) {
    dispatch({type: types.GET_EQUIP_FAIL, payload: error});
  }
};


export const postEquipment = equipment => async dispatch =>{
  dispatch({ type: types.POST_EQUIP_LIST_START});

  try {
    const res = await umtsApiWithAuth.post('/rentItems', equipment);

    dispatch({type: types.POST_EQUIP_LIST_SUCCESS, payload: res.data});

  } catch (error) {
    dispatch({type: types.POST_EQUIP_LIST_FAIL, payload: error.res.data});
  }
};


export const editEquipment = equipment => async dispatch =>{
  dispatch({ type: types.PUT_EQUIP_ITEM_START});

  try {
    const res = await umtsApiWithAuth.post(`/rentItems/${equipment.id}`, equipment);
    const res2 = await umtsApiWithAuth.post('/rentItems');

    dispatch({type: types.PUT_EQUIP_ITEM_SUCCESS, payload: res2.data});

  } catch (error) {
    dispatch({type: types.PUT_EQUIP_ITEM_FAIL, payload: error});
  }
};



export const deleteEquipment = equipment => async dispatch => {
	dispatch({ type: types.DELETE_EQUIP_START });
	try {
    const res = await umtsApiWithAuth.delete(`/rentItems/${equipment.id}`);
    
		dispatch({ type: types.DELETE_EQUIP_SUCCESS, payload: equipment.id });
	} catch (error) {
		dispatch({ type: types.DELETE_EQUIP_FAIL, payload: error.res.data });
	}
};
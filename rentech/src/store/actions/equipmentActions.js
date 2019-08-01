import umtsApiWithAuth from '../../api/umtsApiWithAuth';
import { types }from './index'


//res.data.rentItems  ===returned list
//res.data.item  ===new item created


export const getEquipmentList = () => dispatch => {
  dispatch({ type: types.GET_EQUIP_LIST_START});
  return umtsApiWithAuth()
    .get('/rentItems')
    .then(res => {
      // console.log(res.data.rentItems)
      dispatch({type: types.GET_EQUIP_LIST_SUCCESS, payload: res.data.rentItems})
    })
    .catch(err => {
      dispatch({type: types.GET_EQUIP_LIST_FAIL, payload: err})
    })
};

export const getMyEquipmentItem = () => dispatch =>{

  // console.log( types.GET_MY_EQUIP_ITEM_START)
  dispatch({ type: types.GET_MY_EQUIP_ITEM_START});
  return umtsApiWithAuth()
    .get('/auth/user')
    .then(res => {
      // console.log(res.data.user.rentItems)
      dispatch({type: types.GET_MY_EQUIP_ITEM_SUCCESS, payload: res.data.user.rentItems})
    })
    .catch(err => {
      dispatch({type: types.GET_MY_EQUIP_ITEM_FAIL, payload: err})
    })
};


export const postEquipment = equipment => dispatch =>{
  dispatch({ type: types.POST_EQUIP_LIST_START});
  return umtsApiWithAuth()
  .post('/rentItems', equipment)
  .then(res => {

    dispatch({type: types.POST_EQUIP_LIST_SUCCESS, payload: res.data.item})
  })
  .catch(err => {
    dispatch({type: types.POST_EQUIP_LIST_FAIL, payload: err})
  })

};




export const editItem = equipment => dispatch =>{
  dispatch({ type: types.PUT_EQUIP_ITEM_START});
  return umtsApiWithAuth()
  .put(`/rentItems/${equipment.itemId}`, equipment)
  .then(res => {

    dispatch({type: types.PUT_EQUIP_ITEM_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({type: types.PUT_EQUIP_ITEM_FAIL, payload: err})
  })

};



export const deleteItem = id => dispatch => {
	dispatch({ type: types.DELETE_EQUIP_START });
  return umtsApiWithAuth()
  .delete(`/rentItems/${id}`)
  .then(res => {

    dispatch({type: types.DELETE_EQUIP_SUCCESS, payload: id})
  })
  .catch(err => {
    dispatch({type: types.DELETE_EQUIP_FAIL, payload: err})
  })

};
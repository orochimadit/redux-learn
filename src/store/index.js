import {createStore} from 'redux';

//anggap saja ini variabel global
const initialState={
    count:3,
    x:0
} ;

const reducer = (state=initialState,action)=>{
    console.log('reducer berjalan',action);
    return state;
}

const store = createStore(reducer);

export default store;
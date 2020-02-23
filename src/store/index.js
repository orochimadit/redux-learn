import {createStore} from 'redux';

//anggap saja ini variabel global
const initialState={
    count:3,
    x:0
} ;

const reducer = (state=initialState,action)=>{
    console.log('reducer berjalan',action);
    switch(action.type){
        case 'INCREMENT':
        return Object.assign({},state,{count:state.count+1});
        default:
        return state;
    }
   
}

const store = createStore(reducer);

export default store;
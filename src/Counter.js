import React from 'react'
import { connect } from 'react-redux';
import { act } from 'react-dom/test-utils';

function Counter(props){
    console.log('render =>',props);
    return(
        <div>
            <h1>Saya Mesin Penghitung</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
    );
}

function mapStatetoProps(state){
    console.log('mapStatetoProps',state);
    return{
        count:state.count
    }
}
function mapDispatchtoProps(dispatch){
    return{
        onIncrementClick:()=>{
            console.log('tombol di klik ');
            const action={
                type:'INCREMENT'
            }
            dispatch(action);
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);
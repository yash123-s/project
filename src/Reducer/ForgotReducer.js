const initialState={
    email:''
}
export default(state = initialState,action)=>{
    // debugger
    switch(action.type){
        case "FORGOT":{
        return{...state,
            email:action.payload.email
        }
    }
    default:
        return state;
    }  
}
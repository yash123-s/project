const initialState={
    email:'',
    password:'',
    error:''   
}
export default(state = initialState,action)=>{
    // debugger
    switch(action.type){
        case "LOGIN":{
        return{...state,
            email:action.payload.email, 
            password:action.payload.password
        }
    }
    default:
        return state;
    }  
}
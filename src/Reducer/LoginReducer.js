const initialState={
    mobile:'',
    password:''
    
}
export default(state = initialState,action)=>{
    // debugger
    switch(action.type){
        case "LOGIN":{
        return{...state,
            mobile:action.payload.mobile, 
            password:action.payload.password
        }
    }
    default:
        return state;
    }  
}
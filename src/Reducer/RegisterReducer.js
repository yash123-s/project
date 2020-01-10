const initialState={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    mobile:''
}

export default(state = initialState,action)=>{
    // debugger
    switch(action.type){
        
        case "REGISTER":{
        return{...state,firstname:action.payload.firstname,
            lastname:action.payload.lastname,
            email:action.payload.email,
            password:action.payload.password,
            mobile:action.payload.mobile
        }
    }
    default:
        return state;
    }
    
}
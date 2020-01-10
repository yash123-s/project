const initialState={
    firstname:'',
    lastname:'',
    email:'',
    project:'',
    amounttype:''
}
export default(state = initialState,action)=>{
    // debugger
    switch(action.type){
        case "DONATE":{
        return{...state,
            firstname:action.payload.firstname, 
            lastname:action.payload.lastname,
            email:action.payload.email,
            project:action.payload.project,
            amounttype:action.payload.amounttype
        }
    }
    default:
        return state;
    }  
}
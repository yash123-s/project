// const initialState={
//     headingText:'',
//     contentText:''
// }
// export default(state = initialState,action)=>{
//     // debugger
//     switch(action.type){
//         case "NEWS":{
//         return{...state,
//             headingText:action.payload.headingText, 
//             contentText:action.payload.contentText
//         }
//     }
//     default:
//         return state;
//     }  
// }
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


export const reducer = (state = {}, action) => {
    switch(action.type) {
       case 'SELECT':
         {
            let obj = state;
            let key = Object.keys(action.payload)[0];
            if(obj[key] === undefined){
                obj={...obj,...{[key] : [action.payload[key]]}}
            }else{
                if(!obj[key].includes(action.payload[key])){
                obj[key] = [...obj[key],action.payload[key]]}else{
                    obj[key] = obj[key].filter(num => num !==action.payload[key])
                }
            }
             return {...obj};
         }
         case 'SUBMIT':{
            let obj = state;
             localStorage.setItem('selected',JSON.stringify(obj))
             return state
         }
         case 'RESET':{
             let obj = {odd:[],even:[],fibbonaci:[],factorial:[]};
             localStorage.setItem('selected',JSON.stringify(obj));
             return {...obj}
         }
         case 'ADD':{
             let obj = action.payload;
             return {...obj}
         }
       default:
         return state;
     }
  };
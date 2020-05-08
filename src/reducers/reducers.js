const defaultState = () => {
    if(localStorage.getItem('selected')) return JSON.parse(localStorage.getItem('selected'));
    return {};
} 

export const reducer = (state = defaultState(), action) => {
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
            //  console.log('reset');
             let obj = {};
             localStorage.setItem('selected',JSON.stringify(obj));
             return {...obj}
         }
       default:
         return state;
     }
  };
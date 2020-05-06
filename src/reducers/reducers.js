const defaultState = () => {
    if(localStorage.getItem('selected')) return JSON.parse(localStorage.getItem('selected'));
    return [...Array(21).fill(false)];
} 

export const reducer = (state = defaultState(), action) => {
    switch(action.type) {
       case 'SELECT':
         {
            let obj = state;
            obj[action.payload]= !obj[action.payload]
             return [...obj];
         }
         case 'SUBMIT':{
            //  console.log('submit');
            let obj = state;
             localStorage.setItem('selected',JSON.stringify(obj))
             return [...obj]
         }
         case 'RESET':{
            //  console.log('reset');
             let obj = Array(21).fill(false);
             localStorage.setItem('selected',JSON.stringify(obj));
             return [...obj]
         }
       default:
         return state;
     }
  };
import axios from 'axios';

export const getData = (cb) => {
    axios.get('https://chatroom98.herokuapp.com/mock-json/')
      .then(resp => {cb(resp.data)})
}
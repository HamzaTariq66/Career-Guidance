import { host } from './host';

class Api {
  
    static headers() {
      let token = localStorage.getItem('jwtToken');
      return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + token
      }
    }
    
  
    static get(route, params) {
      return this.fetch(route, null,'GET');
    }
  
    static put(route, params) {
      return this.fetch(route, params, 'PUT')
    }
  
    static post(route, params) {      
      return this.fetch(route, params, 'POST')
    }
  
    static delete(route, params) {
      return this.fetch(route, params, 'DELETE')
    }
  
    static fetch(route, params, verb) {     
    
      const url = `${host}/${route}`
      let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
      options.headers = Api.headers();
    
      return fetch(url, options).then( resp => {
        let json = resp.json();          
        if (resp.ok) {          
            return json
        }
        return json.then( err => {throw err});
      }).then( res => { 
        return res;
      });
    }
  }
  export default Api
  
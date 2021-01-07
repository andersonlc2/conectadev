import axios from '../utils/axios';

class AuthService {

  signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/home/login', { email, password })
        .then((response) => {
          if (response.data.user) {
            this.setToken('JWT');
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios.post('/api/home/me') // envio o token pelo header (cabeçalho)
      .then((response) => {
        if (response.data.user) {
          this.setToken('JWT')
          resolve(response.data.user)
        } else {
          reject(response.data.error)
        }
      })
      .catch(error => {
        reject(error)
      })
    })
  }

  signOut = () => {
    this.removeToken();
  }



  setToken = (token) => {
    localStorage.setItem("accessToken", token);
  };

  removeToken = () => localStorage.removeItem("accessToken");

  getToken = () => localStorage.getItem("accessToken");



  isAuthenticate = () => !!this.getToken();

}

const authService = new AuthService();

export default authService;
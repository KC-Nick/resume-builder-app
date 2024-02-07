import decode from 'jwt-decode';

class AuthService {
  // get user data from JSON web token by decoding it
  getUser() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // saves user token to localStorage then reloads the application to log in
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // clear user token and data
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
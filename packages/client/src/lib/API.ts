import { User } from './types';

class API {
  prefix = 'http://localhost:8000';
  apiVersion = '/api/v1';

  async signup({ fullName, email, password, passwordConfirm, role }: User) {
    return this.request('post', '/users/signup', {
      name: fullName,
      email,
      password,
      passwordConfirm,
      role
    });
  }

  async login({ email, password }: User) {
    return this.request('post', '/users/login', {
      email,
      password
    });
  }

  async logout() {
    return this.request('get', '/users/logout');
  }

  async refreshToken() {
    return this.request('post', '/users/refreshToken');
  }

  async getMe() {
    return this.request('get', '/users/getMe');
  }

  private async request(
    type: 'get' | 'post' | 'patch',
    url: string,
    data?: object
  ) {
    const headers = {
      'Content-Type': 'application/json'
      // authorization: `Bearer ${JWT}`
    };

    const raw = JSON.stringify(data);

    try {
      let res: any;
      if (type === 'get') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'GET',
          credentials: 'include',
          headers
        });
      }

      if (type === 'post') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'POST',
          body: raw,
          credentials: 'include',
          headers
        });
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new API();

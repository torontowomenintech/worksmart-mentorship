import Utils from './utils';
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

  private async request(
    type: 'get' | 'post' | 'patch',
    url: string,
    data?: object
  ) {
    const JWT = Utils.getCookie('jwt');

    const headers = {
      'Content-Type': 'application/json'
      // authorization: `Bearer ${JWT}`
    };

    const raw = JSON.stringify(data);

    try {
      let res: any;
      if (type === 'get') {
        res = await fetch(`${this.prefix}/${url}`, {
          headers
        });
      }

      if (type === 'post') {
        res = await fetch(`${this.prefix}${this.apiVersion}${url}`, {
          method: 'POST',
          body: raw,
          headers
        });
      }

      return res!.data;
    } catch (error) {
      return null;
    }
  }
}

export default new API();

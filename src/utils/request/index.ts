import axios from 'axios';
import {generateQueryUri} from '../uri';

export default class Request {

  async post(path, body = {}, config) {
    return axios.post(path, body, config)
      .then((response) => {
        return Promise.resolve(response)
      })
      .catch(({response}) => {
        return Promise.reject(response)
      })
  }

  /**
   *
   * @param {string} path - base url
   * @param {object} params - every parameter will be converted as a querystring
   * @param {object} config - header, data, etc...   `config` is the config that was provided to `axios` for the request
   * @return {Q.Promise<Q.Promise<never> | * | Promise<T | never>>}
   *
   */

  //
  // const params = { foo: 'foo', moo: 'moo' }
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: {} data must be added otherwise will be caused a problem
  // };
  //
  // request.get( 'custom-endpoint', params , config );
  //

  async get(path, params, config={}) {
    if(params) {
      path = `${path}${generateQueryUri(params)}`
    }
    return axios.get(path, config)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch(({response}) => {
        return Promise.reject(response);
      })
  }

  async delete(path, body = {}) {
    return axios.delete(path, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: body
    })
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch(({response}) => {
        return Promise.reject(response);
      })
  }

  put(path, data = {}) {
    return axios.put(path, data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch(({response}) => {
        return Promise.reject(response);
      })
  }
}
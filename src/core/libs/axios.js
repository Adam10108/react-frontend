import * as R from 'ramda'
import axios from 'axios'

import { getToken } from '../localStores'

const baseUrl = 'https://candidate.neversitup.com'
const http = (method, pathUrl, body) => {
  return axios({
    url: `${baseUrl}${pathUrl}`,
    data: body,
    method,
    headers: {
      Authorization: `${
        R.isNil(getToken('token')) ? '' : `Bearer ${getToken('token')}`
      }`
    }
  }).then(response => response)
}

export default http

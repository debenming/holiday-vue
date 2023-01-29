import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://43.143.236.164:7002',
    timeout: 5000
  })

  return instance(config)
}


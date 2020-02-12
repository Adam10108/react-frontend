import http from '../../libs/axios'

export const login = (body: string) => {
  return http('POST', '/users/auth', body)
}

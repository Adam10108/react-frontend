import http from '../../libs/axios'

export const getTodo = query => {
  return http('GET', `/todos/${query}`)
}

export const addTodo = (body: any) => {
  return http('POST', '/todos/', body)
}

export const updateTodo = (_id: string, body: any) => {
  return http('PUT', `/todos/${_id}`, body)
}

export const deleteTodo = (_id: string) => {
  return http('DELETE', `/todos/${_id}`)
}

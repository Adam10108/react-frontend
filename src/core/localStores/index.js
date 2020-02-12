const prefix = 'todo-list_'

export const setToken = (key: string, value: string) => {
  localStorage.setItem(`${prefix}${key}`, value)
}

export const getToken = (key: string) => {
  return localStorage.getItem(`${prefix}${key}`)
}

export const removeToken = (key: string) => {
  localStorage.removeItem(`${prefix}${key}`)
}

export const clearToken = () => {
  localStorage.clear()
}

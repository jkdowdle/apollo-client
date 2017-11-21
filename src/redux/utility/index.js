import decode from 'jwt-decode'

const authorization = 'authorization'

let token 

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token)
  }

  return await localStorage.getItem('auth')
}

export const setToken = (newToken) => {
  token = newToken
  return localStorage.setItem(authorization, `Bearer ${newToken}`)
}

export const removeToken = () => {
  token = undefined
  return localStorage.removeItem(authorization)
}

export const checkAuth = (token) => {
  const profile = decode(token)
  console.log(token)
  console.log('profile yo',profile)
}
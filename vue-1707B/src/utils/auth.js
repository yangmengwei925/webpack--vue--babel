import Cookie from 'js-cookie';

const TokenKey = 'ADMIN-TOKEN';

export function setToken(token) {
  return Cookie.set(TokenKey, token);
}

export function getToken() {
  return Cookie.get(TokenKey);
}

export function removeToken() {
  return Cookie.remove(TokenKey);
}
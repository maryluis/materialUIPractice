export const URL_USERS = 'http://localhost:3000/users';
/**
 * @callback function to make url by query string parameter
 * @param {string} query parameter to find user by query string
 * @returns {string} returns new url string to find user
 */
const makeQueryUrl = (query) => `${URL_USERS}?q=${query}`;
/**
 * @callback function to make url by user's id
 * @param {string} id unique user's parameter
 * @returns {string} new string url
 */
const makeIdUrl = (id) => `${URL_USERS}/${id}`;
/**
 * @callback makes new object with some keys
 * @param {string} name
 * @param {string} email
 * @param {string} birthday
 * @param {string} country
 * @returns {import('./redux/actionCreators').userData}  new object
 */
export function makeUserObj(name, email, birthday, country) {
  return (
    {
      name, email, birthday, id: Date.now(), location: country,
    }
  );
}
/**
 * function to post new user to the backend
 * @param {string} url
 * @param {import('./redux/actionCreators').userData} data user's data containd
 *  name, email, birthday and location
 */
export async function postUser(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  await response.json();
}
/**
 * async function to get several users or all users
 * @param {string} query parameter to find some users. may be empty
 * @returns {import('./redux/actionCreators').userData[]} array with some users (may be empty)
 */
export async function getUsers(query) {
  let response;
  if (query) {
    response = await fetch(makeQueryUrl(query));
  } else {
    response = await fetch(URL_USERS);
  }
  return response.json();
}
/**
 * async function to get one user by unique id
 * @param {string} id unique user's id parameter
 * @returns {import('./redux/actionCreators').userData} object with data about user
 */
export async function getOneUser(id) {
  const response = await fetch(makeIdUrl(id));
  return response.json();
}
/**
 *@callback
 * @param {string} id unique user's id parameter
 * @param {import('./redux/actionCreators').userData} data user's new data includes name,
 *  email, location and birthday
 */
export async function editUser(id, data) {
  await fetch(makeIdUrl(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

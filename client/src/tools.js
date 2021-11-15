export const URL_USERS = 'http://localhost:3000/users';
/**
 * function to make url by query string parameter
 * @param {string} query parameter to find user by query string
 * @returns {string} returns new url string to find user
 */
const makeQueryUrl = (query) => `${URL_USERS}?q=${query}`;
/**
 * function to make url by user's id
 * @param {string} id unique user's parameter
 * @returns {string} new string url
 */
const makeIdUrl = (id) => `${URL_USERS}/${id}`;
/**
 * makes new object with some keys
 * @param {string} name
 * @param {string} email
 * @param {string} birthday
 * @param {string} country
 * @returns {object} new object
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
 * @param {object} data user's data containd name, email, birthday and location
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
 * @returns {Array} array with some users (may be empty)
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
 * @returns {object} object with data about user
 */
export async function getOneUser(id) {
  const response = await fetch(makeIdUrl(id));
  return response.json();
}
/**
 *
 * @param {string} id unique user's id parameter
 * @param {object} data user's new data includes name, email, location and birthday
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

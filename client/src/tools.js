export const URL_USERS = 'http://localhost:3000/users';

const makeQueryUrl = (query) => `${URL_USERS}?q=${query}`;

const makeIdUrl = (id) => `${URL_USERS}/${id}`;

export function makeUserObj(name, email, birthday, country) {
  return (
    {
      name, email, birthday, id: Date.now(), location: country,
    }
  );
}

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

export async function getUsers(query) {
  let response;
  if (query) {
    response = await fetch(makeQueryUrl(query));
  } else {
    response = await fetch(URL_USERS);
  }
  return response.json();
}

export async function getOneUser(id) {
  const response = await fetch(makeIdUrl(id));
  return response.json();
}

export async function editUser(id, data) {
  await fetch(makeIdUrl(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

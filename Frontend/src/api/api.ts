export const registerUser = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const response = await fetch('http://localhost:3000/addUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await response.json();
    console.log('User created:', data);
    localStorage.setItem('token', data.token);
    return data.user;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log('User logged in:', data);
    localStorage.setItem('token', data.token);
    return data.user;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const token = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const response = await fetch('http://localhost:3000/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    console.log('Token:', data);
    return data.user;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const refreshToken = async () => {
  try {
    const response = await fetch('http://localhost:3000/refreshToken', {
      method: 'POST',

      credentials: 'include',
    });

    const data = await response.json();
    console.log('Token refreshed:', data);
    localStorage.setItem('token', data.token);
    return data.user;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const registerUser = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const response = await fetch('http://localhost:3000/addUser', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await response.json();
    if (response.status === 500 || data === 1 || data === 2) {
      return data;
    }
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
    if (response.status === 500 || data === 1 || data === 2) {
      return data;
    }
    return data.user;
  } catch (error) {
    console.log('Error:', error);
  }
};

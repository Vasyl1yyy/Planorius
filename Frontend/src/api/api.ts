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
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log('User logged in:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

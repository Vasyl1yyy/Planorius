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
    return data;
    console.log('User created:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

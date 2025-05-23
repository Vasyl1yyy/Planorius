export const token = async () => {
  try {
    const response = await fetch('http://localhost:3000/token', {
      method: 'POST',
      credentials: 'include',
    });

    const data = await response.json();
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
    return data.user;
  } catch (error) {
    console.error('Error:', error);
  }
};

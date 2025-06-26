export const token = async () => {
  try {
    const response = await fetchAutoRefresh('http://localhost:3000/token', {
      method: 'POST',
      credentials: 'include',
    });

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const fetchAutoRefresh = async (
  input: RequestInfo,
  init: RequestInit = {}
) => {
  let response = await fetch(input, {
    ...init,
    credentials: 'include',
  });

  if (response.status === 401) {
    // If the response is unauthorized, try to refresh the token
    const refreshResponse = await fetch('http://localhost:3000/refreshToken', {
      method: 'POST',
      credentials: 'include',
    });

    if (refreshResponse.ok) {
      // Retry the original request after refreshing the token
      response = await fetch(input, {
        ...init,
        credentials: 'include',
      });
    } else {
      throw new Error('Failed to refresh token');
    }
  }
  return response;
};

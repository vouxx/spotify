export default async function getProfile(token) {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });

  const data = await response.json();
  console.log(data);
}
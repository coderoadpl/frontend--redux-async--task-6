export const getUsers = async () => {
  const response = await fetch('https://randomuser.me/api?results=10')
  const data = await response.json()
  return data.results
}

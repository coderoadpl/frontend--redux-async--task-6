export const getUsers = async ({ results = 10 }) => {
  const response = await fetch('https://randomuser.me/api?results=' + results)
  const data = await response.json()
  return data.results
}

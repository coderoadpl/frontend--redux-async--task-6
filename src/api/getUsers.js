export const getUsers = async (number = 10) => {
  const response = await fetch('https://randomuser.me/api?results=' + number)
  const data = await response.json()
  return data.results
}

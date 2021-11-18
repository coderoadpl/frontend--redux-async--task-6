import React from 'react'

import { useAsyncFn } from 'react-use'

import { Container, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'

import { getUsers as getUsersAPICall } from './api'

export const App = () => {
  const [usersState, getUsers] = useAsyncFn(getUsersAPICall)

  return (
    <div>
      <Container>
        <Button
          sx={{ width: '100%' }}
          onClick={() => getUsers()}
          disabled={usersState.loading}
        >
          LOAD USERS
        </Button>
        <List>
          {
            usersState.value && usersState.value.map((user) => {
              return (
                <ListItem
                  key={user.login.uuid}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar ${user.name.first} ${user.name.last}`}
                      src={user.picture.thumbnail}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${user.name.first} ${user.name.last}`}
                  />
                </ListItem>
              )
            })
          }
        </List>
      </Container>
    </div>
  )
}

export default App

import React from 'react'

import { useAsyncFn } from 'react-use'

import { Box, CircularProgress, Container, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material'

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
      {
        usersState.loading ?
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'flex',
              width: '100vw',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: (theme) => theme.palette.common.white
            }}
          >
            <CircularProgress />
          </Box>
          :
          null
      }
      {
        usersState.error ?
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'flex',
              width: '100vw',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              zIndex: 1,
              backgroundColor: (theme) => theme.palette.common.white
            }}
          >
            <Typography
              variant={'h5'}
            >
              ERROR
            </Typography>
            <Typography
              variant={'body1'}
            >
              {usersState.error.message}
            </Typography>
            <Button
              sx={{ width: 200 }}
              onClick={() => getUsers()}
            >
              RETRY
            </Button>
          </Box>
          :
          null
      }
    </div>
  )
}

export default App

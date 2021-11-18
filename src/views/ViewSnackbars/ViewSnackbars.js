import React from 'react'
import PropTypes from 'prop-types'

import { Box, Snackbar } from '@mui/material'

export const ViewSnackbars = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const openSnacbars = [
    {
      id: 0,
      message: 'Error!'
    },
    {
      id: 1,
      message: 'Success!'
    }
  ]

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      {
        openSnacbars && openSnacbars.map((snackbar, i) => {
          return (
            <Snackbar
              key={snackbar.id}
              open={true}
              message={snackbar.message}
              sx={{
                bottom: 8 + i * 56
              }}
            />
          )
        })
      }
    </Box>
  )
}

ViewSnackbars.propTypes = {
  sx: PropTypes.object
}

export default ViewSnackbars

import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import { Box, Snackbar } from '@mui/material'

export const ViewSnackbars = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const { openSnacbars } = useSelector((state) => state.snackbars)

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
                bottom: `${8 + i * 56}px !important`
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

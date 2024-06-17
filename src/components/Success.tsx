import React from 'react'
import Typography from '@mui/material/Typography'

export default function Success() {
  return (
    <>
      <Typography variant='h4' align='center' sx={{ py: 4 }}>
       Bạn Đã Đăng Ký Thành Công!
      </Typography>
      <Typography component='p' variant='h5' align='center'>
        Bạn sẽ nhận được Email.      
      </Typography>
    </>
  )
}

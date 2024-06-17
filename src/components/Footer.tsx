import React, { memo } from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Footer() {
  const copyStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    color: "red",
  }
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Mọi Bản Quyền Thuộc Về © '}
      <Link color='inherit' style={copyStyle} href='https://www.facebook.com/vinhtien.huynh.77/'>
        Huỳnh Vĩnh Tiến
      </Link>
    </Typography>
  )
}

export default memo(Footer)

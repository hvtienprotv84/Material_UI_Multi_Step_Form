import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { AppContext } from '../Context'

export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext)
  const { firstName, lastName, email, gender, date, city, phone } = formValues

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {}

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value
      }
      return form
    })
    // Do whatever with the values
    console.log(form)
    // Show last component or success message
    handleNext()
  }

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary='Họ' secondary={firstName.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Tên' secondary={lastName.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Địa Chỉ Email' secondary={email.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Giới Tính' secondary={gender.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Ngày Sinh' secondary={date.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Thành Phố' secondary={city.value || 'Not Provided'} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary='Số Điện Thoại' secondary={phone.value || 'Not Provided'} />
        </ListItem>
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Trở Về
        </Button>
        <Button variant='contained' color='success' onClick={handleSubmit}>
         Xác Nhận và Tiếp Tục
        </Button>
      </Box>
    </>
  )
}

import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Cursor from '../../../assets/images/Cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'

function AdminUsers() {
  const users = [
    {
      _id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      role: 'user',
      subscription: {
        status: 'Active'
      }
    },
    {
      _id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      password: 'pass456',
      role: 'admin',
      subscription: {
        status: 'Not Active'
      }
    },
    {
      _id: 3,
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      password: 'pass789',
      role: 'user',
      subscription: {
        status: 'Active'
      }
    },
    {
      _id: 4,
      name: 'Bob Wilson',
      email: 'bobwilson@example.com',
      password: 'pwd321',
      role: 'user',
      subscription: {
        status: 'Not Active'
      }
    },
    {
      _id: 5,
      name: 'Sarah Thompson',
      email: 'sarahthompson@example.com',
      password: 'password789',
      role: 'user',
      subscription: {
        status: 'Active'
      }
    },
    {
      _id: 6,
      name: 'Michael Brown',
      email: 'michaelbrown@example.com',
      password: 'pass123',
      role: 'admin',
      subscription: {
        status: 'Active'
      }
    },
    {
      _id: 7,
      name: 'Emily Davis',
      email: 'emilydavis@example.com',
      password: 'pwd456',
      role: 'user',
      subscription: {
        status: 'Not Active'
      }
    },
    {
      _id: 8,
      name: 'David Taylor',
      email: 'davidtaylor@example.com',
      password: 'password789',
      role: 'user',
      subscription: {
        status: 'Active'
      }
    },
    {
      _id: 9,
      name: 'Olivia Martin',
      email: 'oliviamartin@example.com',
      password: 'pass987',
      role: 'user',
      subscription: {
        status: 'Active'
      }
    },
    {
      _id: 10,
      name: 'James Wilson',
      email: 'jameswilson@example.com',
      password: 'pwd654',
      role: 'user',
      subscription: {
        status: 'Not Active'
      }
    }
  ]  

  const updateHandler=(userId)=>{
    console.log(userId)
  }
  const deleteButtonHandler=(userId)=>{
    console.log(userId)
  }
  return (
    <Grid css={{
        cursor: `url(${Cursor}),default`}} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
          <Box p={['0','16']} overflow={'auto'}>
          <Heading textTransform={'uppercase'} children="All Users" my={'16'} textAlign={['center','left']}/>
          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>All Users Available in database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((item,index)=>(
                  <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} item={item} key={index}/>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          </Box>
          <Sidebar/>
      </Grid>
  )
}

export default AdminUsers

function Row({item,updateHandler,deleteButtonHandler}){
  return(
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.password}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status==="active"?"Active":"Not Active"}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=>updateHandler(item._id)} variant={'outline'} color={'purple.500'}>
            Change Role
          </Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}
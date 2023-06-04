import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function ChangePassword() {
    const [oldPassword,setOldPassword] = useState()
    const [newPassword,setNewPassword] = useState()
  return (
    <Container py={'16'} minH={'95vh'}>
        <form>
            <VStack spacing={'8'}>
            <Heading textTransform={'uppercase'} children="Change Password" my={'16'} textAlign={['center','left']}/>
            <Input required value={oldPassword} onChange={e=>setOldPassword(e.target.value)} placeholder='Enter your old password' type='password' focusBorderColor='yellow.500'/>
            <Input required value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder='Enter your new password' type='password' focusBorderColor='yellow.500'/>
            <Button w={'full'} colorScheme='yellow' type='submit'>Change </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword
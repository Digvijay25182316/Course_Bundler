import {  Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function ResetPassword() {
    const [password,setPassword] = useState()
    const {token} =useParams()    
    console.log(token)
  return (
    <Container paddingY={'16'} height={'90vh'}>
        <form>
            <Heading children={"Reset Password"} my={"16"} textTransform={"uppercase"} textAlign={["center",'left']}/>
            <VStack spacing={'8'}>
                             
                    <FormLabel htmlFor='email' children="password"/>
                    <Input required id='email' value={password} onChange={e=>setPassword(e.target.value)}
                    focusBorderColor='yellow.500'
                    placeholder='Reset Password'
                    type='password'
                    />
            
                    <Button type='submit' width={'full'} colorScheme='yellow'>
                        Update Password
                    </Button>
            </VStack>

        </form>
    </Container>
  )
}

export default ResetPassword
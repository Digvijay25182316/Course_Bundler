import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function ForgetPassword() {
    const [email,setEmail] = useState()
  return (
    <Container paddingY={'16'} height={'90vh'}>
        <form>
            <Heading children={"Forget Password"} my={"16"} textTransform={"uppercase"} textAlign={["center",'left']}/>
            <VStack spacing={'8'}>
                             
                    <FormLabel htmlFor='email' children="email Address"/>
                    <Input required id='email' value={email} onChange={e=>setEmail(e.target.value)}
                    focusBorderColor='yellow.500'
                    placeholder='abc@gmail.com'
                    type='email'
                    />
            
                    <Button type='submit' width={'full'} colorScheme='yellow'>
                        Send Reset Link
                    </Button>
            </VStack>

        </form>
    </Container>
  )
}

export default ForgetPassword
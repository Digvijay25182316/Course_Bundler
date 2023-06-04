import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Request() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [course,setCourse] = useState('')
  return (
    <Container h={'95vh'}>
        <VStack h={"full"} justifyContent={'center'} spacing={'16'}>
            <Heading children="Request a request"/>
            <form style={{width:"100%"}}>
                <Box my={"4"}>
            <FormLabel htmlFor='name' children="Name"/>
                <Input required id='name' value={name} onChange={e=>setName(e.target.value)}
                focusBorderColor='yellow.500'
                placeholder='Enter your name'
                type='text'
                />
                </Box>
                <Box my={"4"}>
            <FormLabel htmlFor='email' children="email Address"/>
                <Input required id='email' value={email} onChange={e=>setEmail(e.target.value)}
                focusBorderColor='yellow.500'
                placeholder='abc@gmail.com'
                type='email'
                />
                </Box>
                <Box my={"4"}>

                <FormLabel htmlFor='course' children="course"/>
                <Textarea required id='course' value={course} onChange={e=>setCourse(e.target.value)} placeholder='Explain the course...' focusBorderColor='yellow.500'/>
                </Box>
                <Button my={'4'} colorScheme='yellow' type='submit'>Send Mail</Button>
                
                <Box my={'4'}>
                    Request for a course?{' '}<Link to={'/request'} ><Button colorScheme={'yellow'} variant={'link'}>Click Here</Button></Link>
                </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Request
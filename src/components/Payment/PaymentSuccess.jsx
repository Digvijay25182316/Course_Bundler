import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {RiCheckboxCircleFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

function PaymentSuccess() {
  return (
    <Container h={'100%'} p={'16'}>
      <Heading my={'8'} textAlign={'center'}>
        You Have Pro Pack
      </Heading>
      <VStack boxShadow={'lg'} pb={'16'} alignItems={'center'} borderRadius={'lg'}>
        <Box width={'full'} bg={'yellow.400'} p={"4"} css={{borderRadius:'8px 8px 0 0'}}>
          <Text color={'black'} >Payment Success</Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt="4" spacing={'8'}>
            <Text>Congratulations Pro Member you have pro plan</Text>
            <Heading>
              <RiCheckboxCircleFill/>
            </Heading>
          </VStack>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Link to={'/profile'} ><Button variant={'ghost'}>Go to Profile</Button></Link>
            <Heading size={'xs'}>
              Reference: ashdgashgdjsa
            </Heading>
          </Box>
        </Box>
      </VStack>

    </Container>
  )
}

export default PaymentSuccess
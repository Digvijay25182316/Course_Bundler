import {Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

function PaymentFail() {
  return (
    <Container h={'90vh'} p={'16'}>
        <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
      <RiErrorWarningFill size={'50'}/>
      <Heading textTransform={'uppercase'}>
        Payment Failed
      </Heading>
          <Link to={'/subscribe'}>
            <Button variant={'ghost'}>Try again</Button>
          </Link>
        </VStack>

    </Container>
  )
}

export default PaymentFail
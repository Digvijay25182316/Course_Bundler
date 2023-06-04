import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiSecurePaymentFill } from 'react-icons/ri'
import TermsAndConditions from '../../assets/docs/termsAndCondition'

const Founder = ()=>{
    return(
        <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
            <VStack justifyContent={'center'}>
                <Avatar boxSize={['40','48']}/>
                <Text children="Co-Founder" opacity={0.7}/>
            </VStack>
            <VStack justifyContent={'center'} textAlign={['center','flex-start']}>
                <Heading children="Digvijay Edake" size={['md','xl']} />
                <Text children="Hi ,I am a full-stack developer and a teacher Our mission is to provide quality content at a reasonable price"/>
            </VStack>
        </Stack>
    )
}

const VideoPlayer=()=>(
    <Box>
        <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src='https://youtu.be/2am19DDsu58?list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns'></video>
    </Box>
)

const TandC=()=>(
    <Box>
        <Heading size={'md'} children="Terms & Conditions" textAlign={['center','left']}/>

        <Box h={'sm'} p={'4'} overflow={'scroll'}>
            <Text letterSpacing={'widest'} fontFamily={'heading'} textAlign={['center','left']}>{TermsAndConditions}</Text>
            <Heading my="4" size={"xs"} children="Refund only applicable for cancellation within 7 days"/>
        </Box>
    </Box>
)

function About() {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center','left']}/>
        <Founder/>
        <Stack m={'8'} direction={['column','row']} textAlign={['center','left']}>
            <Text fontFamily={'cursive'} m={'8'} textAlign={['center','left']}>
                We are a video streaming with some premium courses available only for premium users
            </Text>
            <Link to={'/subscribe'}>
                <Button variant={"ghost"} colorScheme='yellow'>Check Out Plan</Button>
            </Link>
        </Stack>
        <VideoPlayer/>
        <TandC termsAndConditions={'terms and conditions'}/>
        <HStack my={'4'} p={'4'}>
            <RiSecurePaymentFill/>
            <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'} children={'Payment is secured by Razorpay'}/>
        </HStack>

    </Container>
  )
}

export default About
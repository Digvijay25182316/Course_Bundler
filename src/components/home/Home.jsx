import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import  {Link} from 'react-router-dom'
import React from 'react'
import "./home.css"
import vg from '../../assets/images/bg.png'
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'


function Home() {
  return (
    <section className='home'>
        <div className="container">
            <Stack
            direction={["column","row"]}
            height={"100%"}
            alignItems={'center'}
            justifyContent={['center','space-between']}
            spacing={['16','56']}
            >
                <VStack width={"full"} alignItems={['center','flex-end']}>
                    <Heading children="LEARN FROM THE EXPERTS" size={"2xl"}/>
                    <Text textAlign={["center","left"]} children="Find valueable content at reasonable price"/>
                    <Link to={"/courses"}>
                    <Button size={"lg"} colorScheme='yellow'>
                        Explore Now
                    </Button>
                    </Link>
                </VStack>
                <Image className='vectore-graphics' boxSize={'md'} src={vg}/>
            </Stack>
        </div>
        <Box padding={"8"} bg={"blackAlpha.800"}>
            <Heading textAlign={"center"} fontFamily={"body"} color={"yellow"} children="OUR BRANDS"/>
            <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"4"}>
                <CgGoogle/>
                <CgYoutube/>
                <SiCoursera/>
                <SiUdemy/>
                <DiAws/>
            </HStack>
        </Box>
        <div className='container2'>
        <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src='https://youtu.be/2am19DDsu58?list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns'></video>
        </div>
    </section>
  )
}

export default Home
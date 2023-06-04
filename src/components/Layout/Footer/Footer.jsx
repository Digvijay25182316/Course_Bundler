import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular,TiSocialGithubCircular} from 'react-icons/ti'
import {} from 'react-icons/di'

function Footer() {
  return (
    <Box padding={"4"} bg={"blackAlpha-900"} minH={"10vh"} bgColor={'rgb(78, 76, 76)'}>
        <Stack direction={['column','row']}>
        <VStack alignItems={['center','flex-start']} width={"full"}>
            <Heading children={"All Rights Reserved"} color={'white'}/>
            <Heading children={"@companyName"} fontFamily={'body'} color={'yellow'}/>
        </VStack>
        <HStack spacing={['2','10']} justifyContent={'center'} color={"white"} fontSize={"50"}>
            <a href='https://youtube.com/Digvijay25182316' target='blank'>
                <TiSocialYoutubeCircular/>
            </a>
            <a href='https://github.com/Digvijay25182316' target='blank'>
                <TiSocialGithubCircular/>
            </a>
            <a href='https://instagram.com/mr_d.s.e' target='blank'>
                <TiSocialInstagramCircular/>
            </a>
        </HStack>
        </Stack>
    </Box>
  )
}

export default Footer
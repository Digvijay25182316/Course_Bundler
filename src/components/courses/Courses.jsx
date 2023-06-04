import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course=({title,views,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
return(
  <>
  <VStack className='course' alignItems={['center','flex-start']}>
    <Image src={imageSrc} boxSize="60" objectFit={"contain"}/>
    <Heading textAlign={['center','left']} maxW="200px" fontFamily={"sans-sarif"}
    noOfLines={3} children={title}
    fontSize={"2xl"}
    />
    <Text noOfLines={2} children={description}/>
    <HStack>
    <Text 
    fontWeight={"bold"}
    textTransform={"uppercase"}
     children={creator}/>
    <Text 
    fontFamily={"body"}
    textTransform={"uppercase"}
     children={description}/>
    </HStack>
    <Heading textAlign={"center"} size={"xs"} children={`Lectures:${lectureCount}`}></Heading>
    <Stack direction={['column','row']} alignItems={"center"}>
      <Link to={"/course/:id"}>
        <Button colorScheme='yellow'>Watch Now</Button>
      </Link>   
      <Button variant={"ghost"} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add to playlist</Button> 

    </Stack>
  </VStack>
  </>
)
}

function Courses() {
  const [keyword,setKeyword] = useState("")
  const [category,setCategory] = useState("")
  const addToPlaylistHandler = ()=>{
    console.log('Added to playlist')
  }
  const categories=[
    "Web development","Artificial Intelligence","Data Structure & Algorithm","App Development","Data Science"
  ]
  return (
    <Container minH={"95vh"} maxW={"container.lg"} padding={"8"}>
<Heading children="All Courses" m={"8"}/>
<Input value={keyword} onChange={e=>setKeyword(e.target.value)}
  placeholder='Search a Course...'
  type='text'
  focusBorderColor='yellow.500'
/>
<HStack overflowX={"auto"} paddingY={"8"} css={{"&::-webkit-scrollbar":{
  display:"none"
}}}>
  {
  categories&&categories.map((item,index)=>
  <Button key={index} onClick={()=>setCategory(item)} minW={"60"}>
    <Text children={item}/>
  </Button>
  )}
</HStack>
<Stack direction={['column','row']}
flexWrap="wrap"
justifyContent={['flex-start','space-evenly']}
alignItems={['center','flex-start']}
>
<Course 
title={"sample"}
description={"sample"}
views={23}
creator={"sample one"}
imageSrc={"sample Src"}
lecture={"sample one"}
addToPlaylistHandler={addToPlaylistHandler}
/>
</Stack>
    </Container>
  )
}

export default Courses
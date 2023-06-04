import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function CoursePage() {
    const [lectureNumber,setLectureNumber] = useState(0)

    const lectures=[
        {
        _id:"shhsgdjfhgsd",
        title:"sample1",
        description:'sample skhdgfjs shksdhf jdhskdf kalsjiaeu acxnxnbvmxc',
        video:{
            url:'hsgfjhdsf',
        }
    },
        {
        _id:"shhsgdjfhgsd",
        title:"sample2",
        description:'sample skhdgfjs shksdhf jdhskdf kalsjiaeu acxnxnbvmxc',
        video:{
            url:'hsgfjhdsf',
        }
    },
        {
        _id:"shhsgdjfhgsd",
        title:"sample3",
        description:'sample skhdgfjs shksdhf jdhskdf kalsjiaeu acxnxnbvmxc',
        video:{
            url:'hsgfjhdsf',
        }
    }
]
  return (
    <Grid minH={'95vh'} templateColumns={['1fr','3fr 1fr']}>
        <Box>
        <video width={'100%'} autoPlay controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src='https://youtu.be/2am19DDsu58?list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns'></video>
        <Heading m={'4'} children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
        <Heading m={'4'} children="description"/>
        <Text m={'4'} children={lectures[lectureNumber].description}/>
        </Box>
        <VStack>
            {
                lectures.map((item,index)=>(
                    <>
                    <button
                        onClick={()=>setLectureNumber(index)}
                     key={item._id} 
                    style={{
                        width:'100%',
                        padding:'1rem',
                        textAlign:'center',
                        margin:0,
                        borderBottom:'1px solid rgba(0,0,0,0.3)'
                    }}  
                    >
                        <Text>
                            #{index+1}{item.title}
                        </Text>
                    </button>
                    </>
                ))
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage
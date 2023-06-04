import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const fileuploadStyle={
    "&::file-selector-button":{
        cursor:"pointer",
        marginLeft:"-5%",
        width:'110%',
        height:"100%",
        border:"none",
        color:"#ECC928",
        backgroundColor:"white",
    }
}
function Register() {
    const [name,setName] = useState()
    const [imagePrev,setImagePrev] = useState('')
    const [image,setImage] = useState('')
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmpassword,setConfirmpassword] = useState()

    const changeImageHandler=(e)=>{
        const file=e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setImagePrev(reader.result)
            setImage(file)
        }
    }
  return (
    <Container h={'100%'}>
        <VStack h={"full"} justifyContent={'center'} spacing={'16'}>
            <Heading children="Registeration"/>
            <form style={{width:"100%"}}>
                <Box my={'4'} display={'flex'} justifyContent={'center'}>
                    <Avatar size={'2xl'} display={'flex'} justifyContent={'center'} src={imagePrev}/>
                </Box>
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

                <FormLabel htmlFor='password' children="password"/>
                <Input required id='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter your password' type='password' focusBorderColor='yellow.500'/>
                </Box>
                <Box>
                <FormLabel htmlFor='confirm password' children="Confirm Password"/>
                <Input required id='password' value={confirmpassword} onChange={e=>setConfirmpassword(e.target.value)} placeholder='Confirm Password' type='password' focusBorderColor='yellow.500'/>
                </Box>
                <Box my={"4"}>

                <FormLabel htmlFor='chooseAvtar' children="chooseAvatar"/>
                <Input accept={"image/*"} required id='chooseAvatar' onChange={changeImageHandler} type='file' focusBorderColor='yellow.500' css={fileuploadStyle}/>
                </Box>
                <Button my={'4'} colorScheme='yellow' type='submit'>Register</Button>
                <Box my={'4'}>
                    Alredy Signed Up?<Link to={'/login'} ><Button colorScheme={'yellow'} variant={'link'}> Login</Button>{" "}here</Link>
                </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Register
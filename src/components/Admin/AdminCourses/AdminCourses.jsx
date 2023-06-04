import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Cursor from '../../../assets/images/Cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from '../CourseModal'

function AdminCourses() {
  const courses = [
    {
      id: 1,
      poster: 'course1.jpg',
      category: 'Programming',
      creator: 'John Doe',
      views: 500,
      lectures: 10,
      actions: ['Enroll', 'Share', 'Add to Wishlist'],
    },
    {
      id: 2,
      poster: 'course2.jpg',
      category: 'Web Development',
      creator: 'Jane Smith',
      views: 800,
      lectures: 15,
      actions: ['Enroll', 'Share', 'Add to Wishlist'],
    },
    {
      id: 3,
      poster: 'course3.jpg',
      category: 'Data Science',
      creator: 'Mike Johnson',
      views: 350,
      lectures: 8,
      actions: ['Enroll', 'Share', 'Add to Wishlist'],
    },
  ];
    

  const courseDetailsHandler=(courseId)=>onOpen()
  const deleteButtonHandler=(courseId)=>{
    console.log(courseId)
  }
  const deleteLectureButtonHandler=({courseId,lectureId})=>{
    console.log(courseId,lectureId)
  }
  const addLectureHandler=({e,courseId,title,description,video})=>{
    e.preventDefault()
  }

  const {isOpen,onClose , onOpen} =useDisclosure()

  return (
    <Grid css={{
        cursor: `url(${Cursor}),default`}} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
          <Box p={['0','16']} overflow={'auto'}>
          <Heading textTransform={'uppercase'} children="All Users" my={'16'} textAlign={['center','left']}/>
          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>All Available Courses in database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses&&courses.map((item)=>
                    <Row item={item} key={item.id} deleteButtonHandler={deleteButtonHandler} courseDetailsHandler={courseDetailsHandler}/>                  
                )}
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModal isOpen={isOpen} onClose={()=>onClose()} id={courses.id} deleteButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler} courseTitle='React Course'/>
          </Box>
          <Sidebar/>
      </Grid>
  )
}

export default AdminCourses;

function Row({item,courseDetailsHandler,deleteButtonHandler}){
  console.log(item.id)
  return(
    <Tr>
      <Td>{item.id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.CreatedBy}</Td>
      <Td isNumeric>{item.Views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=>courseDetailsHandler(item._id)} variant={'outline'} color={'purple.500'}>
            View Lectures
          </Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}
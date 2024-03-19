import {
  Box,
  Grid,
  Table,
  TableCaption,
  TableContainer,
  Heading,
  Thead,
  Image,
  Tr,
  Th,
  Td,
  Tbody,
  HStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: 'ksjdnf',
      title: 'React Corse',
      category: 'Web Development',
      poster: {
        url: 'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      createdBy: 'Mohd Afjal',
      views: 343,
      noOfVideos: 12,
    },
    {
      _id: 'ksjdnf',
      title: 'React Corse',
      category: 'Web Development',
      poster: {
        url: 'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      createdBy: 'Mohd Afjal',
      views: 343,
      noOfVideos: 12,
    },
    {
      _id: 'ksjdnf',
      title: 'React Corse',
      category: 'Web Development',
      poster: {
        url: 'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      createdBy: 'Mohd Afjal',
      views: 343,
      noOfVideos: 12,
    },
    {
      _id: 'ksjdnf',
      title: 'React Corse',
      category: 'Web Development',
      poster: {
        url: 'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      createdBy: 'Mohd Afjal',
      views: 343,
      noOfVideos: 12,
    },
    {
      _id: 'ksjdnf',
      title: 'React Corse',
      category: 'Web Development',
      poster: {
        url: 'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      createdBy: 'Mohd Afjal',
      views: 343,
      noOfVideos: 12,
    },
    {
      _id: 'ksjdnf',
      title: 'React Corse',
      category: 'Web Development',
      poster: {
        url: 'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      createdBy: 'Mohd Afjal',
      views: 343,
      noOfVideos: 12,
    },
    {
      _id: 'ksjdnf',
      title: 'React Corse',
      category: 'Web Development',
      poster: {
        url: 'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      createdBy: 'Mohd Afjal',
      views: 343,
      noOfVideos: 12,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userId => {
    onOpen();
  };

  const deleteHandler = userId => {
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId, lecturId) => {
    console.log(courseId);
    console.log(lecturId);
  };

  const addLectureHandler = ({ e, courseId, title, description, video }) => {
    e.preventDefault();
  };

  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children={'All Users'}
          my={'30'}
          textAlign={['center', 'left']}
        />
        <TableContainer width={['100vw', 'full']}>
          <Table variant={'simple'} size={'md'}>
            <TableCaption>All Availablle Courses in The Database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  courseDetailsHandler={courseDetailsHandler}
                  deleteHandler={deleteHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'erf'}
          courseTitle={'React Course'}
          deleteLectureButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

function Row({ item, deleteHandler, courseDetailsHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.noOfVideos}</Td>
      <Td isNumeric>
        <HStack justify={'flex-end'}>
          <Button
            onClick={() => courseDetailsHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lectures
          </Button>
          <Button onClick={() => deleteHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;

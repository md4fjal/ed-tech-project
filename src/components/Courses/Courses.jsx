import {
  Container,
  HStack,
  Heading,
  Input,
  Button,
  Text,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  cretor,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'40'} objectFit={'contain'} />
      <Heading
        children={title}
        alignItems={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text
          children={'Cretor'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text
          children={cretor}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        textTransform={'uppercase'}
        size={'xs'}
        children={`Lectures- ${lectureCount}`}
      />
      <Heading
        textTransform={'uppercase'}
        size={'xs'}
        children={`views- ${views}`}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/courses/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const addToPlaylistHandler = () => {
  console.log('playlist');
};

function Courses() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState([
    'Web Development',
    'App Development',
    'Data Science',
    'Data Analytics',
    'App Development',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'UI & UX Design',
    'Game Development',
    'MERN Stack Development',
  ]);
  // const categories = [];
  return (
    <Container minH={'85vh'} minW={'container.lg'} paddingY={'2'}>
      <Heading children="All Cources" margin={'2'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder={'search a course'}
        type="text"
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={'auto'}
        paddingY={'2'}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {category.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample'}
          description={'sample'}
          views={34}
          imageSrc={
            'https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1200'
          }
          id={'sample'}
          cretor={'sample'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
}

export default Courses;

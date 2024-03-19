import React, { useState } from 'react';
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import intro from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'kdjfhkdfg1',
      title: 'sample1',
      description: 'sample desc1',
      video: {
        url: 'isejfsjf',
      },
    },
    {
      _id: 'kdjfhkdfg2',
      title: 'sample2',
      description: 'sample desc2',
      video: {
        url: 'isejfsjf',
      },
    },
    {
      _id: 'kdjfhkdfg3',
      title: 'sample3',
      description: 'sample desc3',
      video: {
        url: 'isejfsjf',
      },
    },
  ];
  return (
    <Grid templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          autoPlay={false}
          controls
          controlsList="nodownload noremoteplayback muted"
          disablePictureInPicture
          disableRemotePlayback
          src={intro}
        ></video>
        <Heading
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children="Description" />
        <Text m="4" children={`${lectures[lectureNumber].description}`} />
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            key={item._id}
            onClick={() => setLectureNumber(index)}
            style={{
              width: '100%',
              padding: '1rem',
              margin: '0',
              textAlign: 'center',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;

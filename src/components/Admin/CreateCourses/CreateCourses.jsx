import {
  Input,
  Container,
  Grid,
  Heading,
  VStack,
  Select,
  Image,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../auth/Register';
const CreateCourses = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [createdby, setCreatedby] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const categories = [
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
  ];

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
    };
    setImage(file);
  };
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children={'Create Course'}
            my={'16'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              autoComplete="off"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              autoComplete="off"
              value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder="Description"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              autoComplete="off"
              value={createdby}
              onChange={e => setCreatedby(e.target.value)}
              placeholder="Creator Name"
              type="text"
              focusBorderColor="purple.300"
            />

            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Categoy</option>
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              type="file"
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
              onChange={changeImageHandler}
            />

            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}

            <Button w={'full'} colorScheme={'purple'} type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourses;

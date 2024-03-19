import {
  Box,
  Grid,
  Table,
  TableCaption,
  TableContainer,
  Heading,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {
  const users = [
    {
      _id: 'ksdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k1sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k2sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k3sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k4sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k5sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k6sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k7sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
    {
      _id: 'k8sdnf',
      name: 'afjal',
      role: 'admin',
      email: 'afjal@23434',
      subscription: { status: 'active' },
    },
  ];

  const updateHandler = userId => {
    console.log(userId);
  };

  const deleteHandler = userId => {
    console.log(userId);
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
            <TableCaption>All Availablle Users in The Database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row
                  updateHandler={updateHandler}
                  deleteHandler={deleteHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, deleteHandler, updateHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justify={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            Change Role
          </Button>
          <Button onClick={() => deleteHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    width={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193, 0.5)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text opacity={0.6} children={'since last month'} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box px={'4'} py={['0', '20']}>
    <Heading size={'sm'} mb={'2'} children={title} />
    <HStack w={'full'} alignItems={'center'}>
      <Text children={profit ? 0 : `-${value}%`} />
      <Progress w={'full'} value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);

function Dashboard() {
  return (
    <Grid
      css={{
        cursor: `url(${cursor}),default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`last change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          ml={['0', '16']}
          children={'Dashboard'}
          mb={'16'}
          textAlign={['center', 'left']}
        />

        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justify={'space-evenly'}
        >
          <Databox title="views" qty={130} qtyPercentage={30} profit={true} />
          <Databox title="Users" qty={1303} qtyPercentage={45} profit={true} />
          <Databox
            title="Subscription"
            qty={232}
            qtyPercentage={25}
            profit={false}
          />
        </Stack>
        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193, 0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            pt={['8', '0']}
            ml={['0', '16']}
            children={'Views Graph'}
          />
          <LineChart />
        </Box>
        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              textAlign={['center', 'left']}
              size={'md'}
              my={'8'}
              ml={['0', '16']}
              children={'Progress Bar'}
            />
            <Box>
              <Bar title={'Views'} value={32} profit={true} />
              <Bar title={'Users'} value={89} profit={true} />
              <Bar title={'Subscription'} value={20} profit={false} />
            </Box>
          </Box>
          <Box p={['0', '16']} boxSizing="border-box" py={'4'}>
            <Heading
              textAlign={'center'}
              size={'md'}
              mb={'4'}
              children={'Users'}
            />
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
}

export default Dashboard;

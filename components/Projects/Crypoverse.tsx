import { Box, Button, Fade, Grid, GridItem, HStack, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { FaGithubAlt } from "react-icons/fa";
import {
    Tag,
    TagLabel,

} from '@chakra-ui/react'
import Image from 'next/image';
// import Link from 'next/link';
import InstaPic from '../../public/insta3.jpg'
import UpworkPic from '../../public/upwork.jpg'
import GptPic from '../../public/Headerportfolio.png';
import Cryptoverse from '../../public/cryptoverse.jpg'

function Crypoverse() {
  return (
    <GridItem data-aos-duration="600"
    data-aos-easing="ease-in-out" data-aos-once="true" data-aos="zoom-in-up" py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
    <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
        <VStack gap={[0, 0, 12, 12]}  >
            <Image placeholder="blur" alt="Picture of project" height={250} width={250} src={Cryptoverse} />

            <HStack>
                <Link isExternal href='https://cryptoverse-lyart.vercel.app/crypto' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                </Link>
                <Link isExternal href='https://github.com/surendhar-palanisamy/cryptoverse' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
            </HStack>

        </VStack>
        <Stack  >
            <Text fontWeight={'semibold'} fontSize={'xl'}>Cryptoverse</Text>
            <Text w={['', '', '300px', '300px']}>
                One stop solution to all your cryptcurrency related questions Realtime time Update about your favourite cryptocurrency Historical chart data A library of all the listed coin and much more..

            </Text>
            <Grid w={['', '', '300px', '300px']} gap={3} templateColumns='repeat(3, 0fr)'>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>ReactJs</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>NextJs</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>TypeScript</TagLabel>
                    </Tag>
                </GridItem>

                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>ChakraUI</TagLabel>
                    </Tag>
                </GridItem>

                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>Vercel</TagLabel>
                    </Tag>
                </GridItem>

                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>AI</TagLabel>
                    </Tag>
                </GridItem>

                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>Rapid API</TagLabel>
                    </Tag>
                </GridItem>

                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>Chart.js</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>RTK</TagLabel>
                    </Tag>
                </GridItem>
            </Grid>
        </Stack>
    </Box>
</GridItem>

  )
}

export default Crypoverse
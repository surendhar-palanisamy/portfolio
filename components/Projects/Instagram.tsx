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


function Instagram() {
  return (
    
    <GridItem data-aos-duration="600"
    data-aos-easing="ease-in-out" data-aos-once="true" data-aos="zoom-in-up" py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
    <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
        <VStack   >
            <Image alt="Picture of project" src={InstaPic} />

            <HStack>
                <Link isExternal href='https://insta-mauve.vercel.app/' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                </Link>
                <Link isExternal href='https://github.com/surendhar-palanisamy/insta' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
            </HStack>

        </VStack>
        <Stack  >
            <Text fontWeight={'semibold'} fontSize={'xl'}>Instagram Clone</Text>
            <Text w={['', '', '300px', '300px']}>
                The idea of this website is to create a usable copy of a popular media sharing app  using a serverless backend having a realtime EventListeners and
                Providing the end user with app monitoring functionalities

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
                        <TagLabel>Firebase</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>OAuth</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>ChakraUI</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>Recoil</TagLabel>
                    </Tag>
                </GridItem>
            </Grid>
        </Stack>
    </Box>
</GridItem>
  )
}

export default Instagram
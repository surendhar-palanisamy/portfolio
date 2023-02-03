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
import Ecom from '../../public/ecom_logo.jpg'

function Phanox() {
  return (
    
    <GridItem data-aos-duration="600"
    data-aos-easing="ease-in-out" data-aos-once="true" data-aos="zoom-in-up" py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
    <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
        <VStack   >
            <Box  pb={['','','','8']}>
            <Image height={200} width={200} alt="Picture of project" src={Ecom} />
            </Box>

            <HStack>
                <Link isExternal href='https://phanox-beta.vercel.app/' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                </Link>
                <Link isExternal href='https://github.com/surendhar-palanisamy/Phanox' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
            </HStack>

        </VStack>
        <Stack >
            <Text fontWeight={'semibold'} fontSize={'xl'} pt={['','','','2']}>Phanox</Text>
            <Text w={['', '', '300px', '300px']} pb={['','','','10']}>
            Modern Ecommerce website to buy tech online with checkout,Stripe payment integration , shipping facilites and live banner updates

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
                        <TagLabel>Redux Toolkit</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>TypeScript</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>Sanity CMS</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>Stripe</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>ChakraUI</TagLabel>
                    </Tag>
                </GridItem>
            </Grid>
        </Stack>
    </Box>
</GridItem>
  )
}

export default Phanox
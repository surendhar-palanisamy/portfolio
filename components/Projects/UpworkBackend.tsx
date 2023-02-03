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

function UpworkBackend() {
  return (
    <GridItem
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-once="true" data-aos="zoom-in-up" py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
    <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
        <VStack  >
           <Box pt={['','','','5']}>
           <Image  alt="Picture of project" height={200} width={200} src={UpworkPic} />

           </Box>
            <HStack pt={['','','','5']}>
                {/* <Link isExternal href='https://gpt-woad.vercel.app/' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                </Link> */}
                <Link isExternal href='https://github.com/surendhar-palanisamy/clone-backend' _hover={{ decoration: 'none' }}>
                    <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
            </HStack>

        </VStack>
        <Stack  >
            <Text fontWeight={'semibold'} fontSize={'xl'}>Freelance Work Search portal</Text>
            <Text w={['', '', '300px', '300px']}>
                Website built for the online community to find and outsource jobs which can handle high webiste load and efficiently manage tasks

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
                        <TagLabel>Django</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>JavaScript</TagLabel>
                    </Tag>
                </GridItem>



                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>Heroku</TagLabel>
                    </Tag>
                </GridItem>

                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>TailWindCss</TagLabel>
                    </Tag>
                </GridItem>

                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>WebSockets</TagLabel>
                    </Tag>
                </GridItem>



                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>PostGreSQl</TagLabel>
                    </Tag>
                </GridItem>
                <GridItem >
                    <Tag colorScheme='teal'>
                        <TagLabel>DRF</TagLabel>
                    </Tag>
                </GridItem>
            </Grid>
        </Stack>
    </Box>
</GridItem>
  )
}

export default UpworkBackend
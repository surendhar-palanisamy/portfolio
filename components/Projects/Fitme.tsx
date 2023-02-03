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
import FitMe from '../../public/fitMe.png';
import Cryptoverse from '../../public/cryptoverse.jpg'

function Fitme() {
  return (
    <GridItem data-aos-duration="600"
        data-aos-easing="ease-in-out" data-aos-once="true" data-aos="zoom-in-up" py={2} shadow='xl' rounded={'lg'} borderWidth={'thin'}  >
        <Box alignItems={'flex-end'} gap={4} display={['', '', 'flex', 'flex']} px={'4'} py={2}  >
            <VStack gap={[0, 0, 12, 6]}  >
                <Box mt={[0,0,0,14]}>
                <Image  placeholder="blur" alt="Picture of project" height={200} width={250} src={FitMe} />

                </Box>
                <HStack pt={['','','','1']}> 
                    <Link isExternal href='https://fitme-xi.vercel.app/
' _hover={{ decoration: 'none' }}>
                        <Button size={'sm'} leftIcon={<CgWebsite />}  > Demo</Button>
                    </Link>
                    <Link  isExternal href='https://github.com/surendhar-palanisamy/fitme' _hover={{ decoration: 'none' }}>
                        <Button size={'sm'} leftIcon={<FaGithubAlt />} >Github</Button></Link>
                </HStack>

            </VStack>
            <Stack  >
                <Text fontWeight={'semibold'} fontSize={'xl'}>Fit Me</Text>
                <Text w={['', '', '300px', '300px']}>
                Developed in Nextjs with Rapid API, Fitme is your one-stop solution to all your fitness-related queries. It has exercises categorised, based on muscle groups.

                </Text>
                <Grid pt={['','','','5']} w={['', '', '300px', '300px']} gap={3} templateColumns='repeat(3, 0fr)'>
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
                            <TagLabel>MaterialUI</TagLabel>
                        </Tag>
                    </GridItem>

                    <GridItem >
                        <Tag colorScheme='teal'>
                            <TagLabel>Vercel</TagLabel>
                        </Tag>
                    </GridItem>

                    <GridItem >
                        <Tag colorScheme='teal'>
                            <TagLabel>RapidAPI</TagLabel>
                        </Tag>
                    </GridItem>

                    <GridItem >
                        <Tag colorScheme='teal'>
                            <TagLabel>RTKQuery</TagLabel>
                        </Tag>
                    </GridItem>

                </Grid>
            </Stack>
        </Box>
    </GridItem>
  )
}

export default Fitme
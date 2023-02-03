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

import Instagram from './Instagram';
import UpworkBackend from './UpworkBackend';
import GPT from './GPT';
import Fitme from './Fitme';
import Crypoverse from './Crypoverse';
import Phanox from './Phanox';
function Index() {
    return (

        <VStack>
            <Grid templateColumns={['repeat(1  , 1fr)', 'repeat(1  , 1fr)', 'repeat(1  , 1fr)', 'repeat(2  , 1fr)']} gap={4}>
            <Phanox/>
            <GPT/>
            <Fitme/>
            <Instagram/>
            <Crypoverse/>
            <UpworkBackend/>
            </Grid>
        </VStack >

    )
}

export default Index



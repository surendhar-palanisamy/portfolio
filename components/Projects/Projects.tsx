import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Dividers from './Divider'
import GPT from './GPT'
import Index from '.'

function Projects() {
    return (
        <Box id='projects'>
            <Dividers />
            <Text ml={['2', '2', '2', '2']} fontFamily={'cursive'} fontSize={'3xl'} fontWeight={'semibold'}>Projects</Text>
            <Index />

        </Box >
    )
}

export default Projects
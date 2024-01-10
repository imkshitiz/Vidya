import React from 'react'
import { Box, Stack, Heading, HStack, VStack, Button, Input, Text } from '@chakra-ui/react'
import {Ai, AiOutlineSend} from 'react-icons/ai';


const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

    <Stack direction={["column","row"]}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size="md" textTransform={"uppercase"} textAlign={['center','left']}>
                Scubscibe to get updated
            </Heading>

            <HStack borderBottom={'2px solid white'} py={'2'}>
                <Input placeholder='Enter your Email here..'
                 border={'none'}
                 borderRadius={'none'}
                 outline={'none'}
                 focusBorderColor={'none'}
                 />

                <Button
                p={'0'}
                colorScheme={"purple"}
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}
                >
                    <AiOutlineSend size={"20"}/>
                </Button>
            </HStack>
        </VStack>

        <VStack w={'full'}
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}
        >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
                VIDYA
                </Heading>
                <Text>All rights reserved</Text>

        </VStack>
 target={'blank'}

        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                social media
            </Heading>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
                <a target={'blank'} href='https://youtube.com'>
                    youtube
                </a>
            </Button>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
                <a target={'blank'} href='https://instagram.com'>
                    instagram
                </a>
            </Button>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
                <a target={'blank'} href='https://github.com'>
                    Github
                </a>
            </Button>

        </VStack>

    </Stack>

  </Box>
   
  
}

export default Footer
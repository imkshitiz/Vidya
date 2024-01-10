import { Box, Container, Heading, Img, Stack,Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  p:"4",
  size:"4xl",
}

const Home = () => {
 return <Box>
  
   <MyCarousel/>
   <Container  maxW={'container.xl'} minH={'100vh'} p="16">
    <Heading 
    textTransform={"uppercase"}
     py="2" 
     w={"fit-content"}
     borderBottom={'2px solid'}
     m="auto"

     >
      Services

     </Heading>

    <Stack
    h="full"
    p={"4"}
    alignItems={'center'}
    direction={["column","row"]}
    >
      <Img src={img5} h={['40','400']} filter={'hue-rotate(-120deg)'}/>
      <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} >
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta optio maxime perferendis alias id nobis a necessitatibus quibusdam cumque aliquid quas officiis consectetur nam ratione odit nesciunt placeat, deserunt distinctio quisquam laborum impedit ab magnam porro aut. Earum, consequatur modi. Minima, recusandae. Laudantium aperiam velit et ab ipsum nobis, at ipsa eum. Qui, doloribus natus asperiores deserunt dolores pariatur blanditiis eos recusandae, sunt eum ratione delectus laborum aspernatur eius fugit fugiat praesentium cum ipsa voluptas iusto. Est, minima vitae officia molestiae nihil dolor consectetur, id eaque, totam saepe facere. Est natus beatae explicabo. Perferendis earum consectetur repudiandae soluta dicta quia!
      </Text>

    </Stack>
    
   </Container>


 </Box>
  
};

const MyCarousel = ()=>(
  <Carousel autoPlay
   infiniteLoop
    interval ={1500}
     showArrows={false}
      showStatus={false}
       showThumbs={false}
  >
  <Box w="full" h={'100vh'}>
    <Img src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
    <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>watch the future</Heading>

  </Box>

  <Box w="full" h={'100vh'}>
    <Img src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
    <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Future is Gaming </Heading>

  </Box>

  <Box w="full" h={'100vh'}>
    <Img src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
    <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions} >Gaming on Console</Heading>

  </Box>

  <Box w="full" h={'100vh'}>
    <Img src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
    <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions} >Night life</Heading>

  </Box>



  </Carousel>
)


export default Home;
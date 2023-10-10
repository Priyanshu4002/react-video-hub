import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };

const Home = () => {
  return (
    <Box>
         <MyCarousel />
         <Container maxW={'container.x1'} minH={'100vh'} p="16">
            <Heading 
            textTransform={'uppercase'}
            py='2'
            w={'fit-content'}
            borderBottom={'2px solid'}
            m="auto">
                services
            </Heading>
            <Stack h='full'
            p={'4'}
            alignItems={"center"}
            direction={['column', 'row']}>
                <Image src={img5} h={["40","400"]} filter={'hue-rotate(-130deg)'}/>
            
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                     elit. Atque aspernatur molestiae repudiandae qui. 
                     Quasi animi voluptatum dolorum exercitationem molestiae?
                      Officia unde numquam animi dolorum minima eligendi praesentium 
                      earum sint ducimus. Consectetur ullam nostrum ratione laborum
                       explicabo libero non eos ut dolore optio, voluptatum maiores,
                        exercitationem incidunt, aliquam doloribus animi molestiae. 
                        Ea voluptatem facere quis enim quisquam tenetur itaque quibusdam, 
                        assumenda qui, quia dolorum iusto eaque consequuntur error velit 
                        nesciunt ipsam modi accusantium vitae sequi possimus amet? Unde 
                        sed quisquam incidunt. Placeat deleniti excepturi possimus labore 
                        sed quo odio delectus porro? Placeat officia, nostrum soluta nulla 
                        debitis possimus impedit. Impedit at soluta vitae delectus numquam ipsum
                         ad, incidunt amet tenetur animi provident nobis blanditiis reprehenderit
                          error aspernatur voluptas cum voluptates cumque accusamus perspiciatis 
                          qui quam! Officiis culpa consectetur voluptatem ducimus delectus inventore.
                </Text>
            </Stack>
         </Container>
    </Box>
  )
 
};
const MyCarousel =()=>(
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w={"full"} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
                Watch the future
            </Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions} >
                Future is coming
            </Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >
                Gaming on console
            </Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home

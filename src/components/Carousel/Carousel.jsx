'use client'

import React from 'react'
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text, Container } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Pérgolas',
      text: "Elegí un diseño y nosotros lo hacemos realidad. ",
      image:
        'https://puertasdeforjamonterrey.com/wp-content/uploads/2023/03/pergolas-elegantes-para-casas-en-Monterrey.jpg',
    },
    {
      title: 'Escaleras',
      text: "Elegí un diseño y nosotros lo hacemos realidad. ",
      image:
        'https://www.hola.com/imagenes/decoracion/20191010150640/ideas-decoracion-diseno-escalera-interior/0-726-846/escaleras-12t-t.jpg',
    },
    {
      title: 'Portones corredizos',
      text: "Elegí un diseño y nosotros lo hacemos realidad.",
      image:
        'https://scontent-eze1-1.xx.fbcdn.net/v/t1.6435-9/119471595_3187983631270077_3470008902316656300_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=onmzwvTFAa4Q7kNvgGv-SXt&_nc_ht=scontent-eze1-1.xx&oh=00_AYCai_SMWMYgUxgY4bxrdbIfsQ0LTMQ9cosx7LJwDK5zFw&oe=66B3BCDE',
    },
  ]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'} maxH={'85svh'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            maxH={'85svh'}
            >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative" filter={"brightness(100%)"}>
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading bg={'white'} w={'max-content'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={'black'}>
                  {card.title}
                </Heading>
                <Text bg={'white'}  w={'max-content'} fontSize={{ base: 'md', lg: 'lg' }} color="black">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

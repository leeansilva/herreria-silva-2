"use client"
import CaptionCarousel from "@/components/Carousel/Carousel";
import Hero from "@/components/Hero/Hero";
import QuienesSomos from "@/components/QuienesSomos/quienesSomos";
import { Box } from "@chakra-ui/react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Home() {
  return (
    <>
      <Hero />
      <Element name="quienesSomos">
        <QuienesSomos />
      </Element>

      <Element name="trabajos">
        <CaptionCarousel />
      </Element>
    </>
  );
}

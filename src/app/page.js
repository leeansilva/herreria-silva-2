"use client"
import CaptionCarousel from "@/components/Carousel/Carousel";
import Hero from "@/components/Hero/Hero";
import Quienes from "@/components/Quienes/Quienes";

import { Element } from 'react-scroll';

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

export default function Home() {
  return (
    <>
      <Hero />
      <Element name="quienesSomos">
        <Quienes />
      </Element>

      <Element name="trabajos">
        <CaptionCarousel cards={cards} />
      </Element>
    </>
  );
}

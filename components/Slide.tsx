import { Card } from "./Card";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

interface SlideProps {
  data: {
    id: string;
    title: string;
    strong: string;
    src: string;
    alt: string;
    link: string;
  }[];
}

export function Slide({ data }: SlideProps) {
  return (
    <Swiper
      spaceBetween={16}
      freeMode={true}
      breakpoints={{
        350: {
          slidesPerView: 3,
        },
        550: {
          slidesPerView: 4,
        },
        780: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper mob:flex tablet:flex pc:flex"
    >
      {data.map((item) => {
        return (
          <SwiperSlide className="mb-14" key={item.id}>
            <Card>
              <Link href={item.link} target="_blank" rel="noreferrer">
                <Image title={item.title} src={item.src} alt={item.alt} width={600}
                    height={600} />
              </Link>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

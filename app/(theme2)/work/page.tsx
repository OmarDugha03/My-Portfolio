"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css"
import Image from "next/image"
import Link from "next/link"

const Work = ({}) => {
  const slides = [
    {
      images: [
        {
          title: "Weather App",
          path: "/weather.png",
          project: "https://weather-app-eight-iota-24.vercel.app/",
        },
        {
          title: "Personal Website",
          path: "/omarwebsite.png",
          project: "https://omar-dugha.vercel.app/",
        },

        {
          title: "BookMark Manager",
          path: "/bookmark.png",
          project: "https://bookmark-manager.pages.dev/",
        },
        {
          title: "Blog Manager",
          path: "/blogmanager.png",
          project: "https://blog-manager.pages.dev/",
        },
      ],
    },
    {
      images: [
        {
          title: "Daraak arabic",
          path: "/arab.png",
          project:
            "https://daraak-main-6h5s1rxes-omars-projects-1578f2e9.vercel.app/",
        },
        {
          title: "countries api",
          path: "/restapi.png",
          project: "",
        },
        {
          title: "Easybank",
          path: "/eaysbank.png",
          project: " https://easybank-landing-page-five-phi.vercel.app/",
        },
        {
          title: "title",
          path: "/minidash.png",
          project: "https://mini-dashboard-two.vercel.app/",
        },
      ],
    },
  ]

  return (
    <section className="container w-full lg:mt-14 items-center md:items-start lg:flex-row gap-x-2   lg:mb-0 ls:mb-12 mb-14 flex-col justify-start flex">
      <div className="max-w-md mt-12 text-left">
        <h1 className="text-4xl md:text-6xl   font-medium">
          My Work <span className="font-bold text-rose-500">.</span>
        </h1>

        <p className="mt-12 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum, unde
          sint ea animi ullam consequuntur architecto, tenetur similique
          incidunt rerum. Rem deserunt quod repellat aspernatur mollitia
          consequuntur eveniet distinctio.
        </p>
      </div>

      <div className="mb-16 lg:mb-0 ">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          className="w-[300px] h-[220px] ls:w-[380px] ls:h-[270px] md:h-[500px] md:w-[700px]"
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}>
          {slides.map((item, index) => (
            <SwiperSlide
              className="w-full  rounded-lg  pb-16  flex  cursor-pointer "
              key={index}>
              <div className="grid  grid-cols-2 grid-rows-2  gap-4">
                {item.images.map((img, i) => (
                  <Link
                    href={img.project}
                    key={i}
                    target="_blank"
                    className="group relative rounded-md  ">
                    <div className="group-hover:blur-sm  transition-all duration-300 peer rounded-md">
                      <Image
                        width={200}
                        height={200}
                        src={img.path}
                        alt={img.title}
                        className="w-full   rounded-md"
                      />
                    </div>
                    <div className="absolute h-full z-50 left-[30%] transition-all opacity-0 group-hover:translate-y-12 group-hover:opacity-100  w-fit -top-7  md:top-[20%] font-extrabold  ">
                      <p className="transition-all duration-300  hover:text-rose-500">
                        Go to the Project !
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Work

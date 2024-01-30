import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Logo from "./images/logo.svg";
import Plus from "./images/plus.png";
import Skip from "./images/Skip.png";
import EnergyIcon from "./images/energy.png";
import Iphone from "./images/Iphone.png";
import Iphone2 from "./images/Iphone2.png";
import MovieStrip from "./images/movieStrip.png";
import StarIcon from "./images/star.png";
import TV from "./images/tv.png";
import BlueStar from "./images/blueStar.png";
import BookIcon from "./images/BookIcon.png";
import Pic1 from "./images/pic1.png";
import Pic2 from "./images/pic2.png";
import Pic3 from "./images/pic3.png";
import Pic4 from "./images/pic4.png";
import Pic5 from "./images/pic5.png";
import Next from "./images/next.png";
import Arrow from "./images/Arrow.png";
import Arrow1 from "./images/Arrow-1.png";
import Profile from "./images/profile.png";
import Stars from "./images/Stars.png";
import Mask from "./images/Mask.png";
import MovieIcon from "./images/movieIcon.png";
import Light from "./images/light.png";
import Fb from "./images/fb.png";
import Twitter from "./images/twitter.png";
import Insta from "./images/insta.png";
import Apple from "./images/apple.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [nav, setNav] = useState();
  const slider = useRef();

  useEffect(() => {
      setNav(slider.current)
  }, []);

  const prev= () => nav.slickPrev();
  const next= () => nav.slickNext();

  const [showModal , setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-full bg-background-200 relative">
      {showModal ? (
        <>
          <div
            className="w-full justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
              <div className="absolute top-0 left-0 h-[100vh] w-full" onClick={() => setShowModal(false)}></div>
            <div className="relative w-full md:w-3/5 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-background-100 outline-none focus:outline-none">
                <div className="flex flex-row items-center justify-between p-5 rounded-t">
                <div className="flex w-1/2 flex-col pl-[30px]">
                  <h3 className="font-bold text-4xl text-white">Join as a</h3>
                  <h3 className="font-bold text-4xl text-primary">Performer</h3>
                </div>
                <div className="w-1/2 justify-end flex pr-[50px]">
                  <img src={Mask} alt="" className="w-[70px] md:w-[120px]"/>
                </div>
                </div>
                <div className="flex flex-col bg-background-300 relative p-6 flex-auto">
                <label htmlFor="name" className="text-white opacity-50 font-medium text-sm">YOUR NAME</label>
                <input type="text" name="name" id="" className="text-white bg-transparent border-b-gray-400 border-b mt-1"/>
                <label htmlFor="email" className="text-white opacity-50 font-medium text-sm mt-8">Email</label>
                <input type="email" name="name" id="" className="bg-transparent border-b-gray-400 border-b mt-1"/>
                <div className="w-full flex justify-end md:mt-64 mt-10">
                <button
                      className=" bg-secondary hover:bg-opacity-80 text-white relative pl-6 pr-[48.41px] h-[54px] rounded-md"
                      style={{ backdropFilter: "blur(20px)" }}
                      onClick={() => setShowModal(true)}
                    >
                      Join Waitlist
                      <img
                        className="absolute right-6 top-[22px] "
                        src={Next}
                        alt=""
                      />
                    </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="bg-[url('images/hero.png')] bg-black bg-cover flex flex-col  relative items-center h-screen w-full top-0 after:absolute after:w-full after:h-[101%] after:top-0 after:bg-gradient-to-t after:from-black ">
        <nav
          className="w-full flex flex-col self-start top-0 z-20 pb-3 before:w-full before:min-h-full before:bg-black before:absolute before:opacity-25 before:-z-10"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <div className="h-full flex flex-row w-full mt-[20px] justify-between lg:max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row w-full items-center justify-between h-16">
              <div className="w-full flex items-center">
                <div className="flex-shrink-0">
                  <img src={Logo} alt="Workflow" />
                </div>
                <div className="hidden lg:block w-full">
                  <div className="w-auto justify-center flex items-center">
                    <div className="border-white border-y-0 border-l-0 border h-[49px] w-[1px] mr-[30px]"></div>
                    <a
                      href="#"
                      className=" hover:bg-gray-400 hover:bg-opacity-10 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Performers
                    </a>

                    <a
                      href="#"
                      className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-[30px]"
                    >
                      Film Makers
                    </a>

                    <a
                      href="#"
                      className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-[30px]"
                    >
                      Organisations
                    </a>

                    <div className="border-white border-y-0 border-l-0 border h-[49px] w-[1px] mr-[30px]"></div>
                    <a
                      href="#"
                      className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-[30px]"
                    >
                      About
                    </a>

                    <a
                      href="#"
                      className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-[150px]"
                    >
                      Sponsors
                    </a>
                    <button
                      className=" bg-secondary hover:bg-opacity-80 text-white relative pl-6 pr-[48.41px] h-[54px] rounded-md"
                      style={{ backdropFilter: "blur(20px)" }}
                      onClick={() => setShowModal(true)}
                    >
                      Join Waitlist
                      <img
                        className="absolute right-6 top-[19px] "
                        src={Plus}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
              </div>
              <div className=" flex lg:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-black bg-opacity-10 inline-flex items-center justify-between p-2 rounded-full text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {() => (
              <div className="lg:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#"
                    className="text-white hover:bg-gray-400 hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Performers
                  </a>

                  <a
                    href="#"
                    className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Film Makers
                  </a>

                  <a
                    href="#"
                    className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Organisations
                  </a>

                  <a
                    href="#"
                    className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="text-white hover:bg-gray-400 hover:bg-opacity-10 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Sponsors
                  </a>
                  <button className=" bg-secondary hover:bg-opacity-80 text-white relative pl-6 pr-[48.41px] h-[45px] rounded-md" 
                    onClick={() =>{ setShowModal(true); setIsOpen(false)}}
                  >
                    Join Waitlist
                    <img
                      className="absolute right-6 top-[15px] "
                      src={Plus}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </nav>

        <div className="w-[85%] md:w-[60%] md:flex-row flex flex-col z-10 gap-y-5 md:items-center h-full 1 justify-center">
          <div className="w-[30%] md:w-[20%]  order-2 md:order-1">
            <img src={Skip} alt="" />
          </div>
          <div className="w-[80%] flex flex-col order-1 md:order-2">
            <h1 className="font-black font-roboto lg:text-7xl text-3xl text-white">
              Type & Get Hired
            </h1>
            <h1 className="font-black font-roboto lg:text-7xl text-3xl text-white opacity-40">
              in films & TV
            </h1>
            <h1 className="font-black font-roboto lg:text-7xl text-3xl text-white opacity-40">
              Shows.
            </h1>
          </div>
        </div>
      </div>
    
      <div className="w-full flex justify-center items-center mt-10">
        <div className="flex lg:flex-row flex-col w-full lg:w-5/6">
          <div className="bg-background-100 text-white w-full lg:w-3/6 flex flex-col justify-center items px-[10px] md:px-14 py-[60px] lg:py-0 lg:pl-[87.09px] rounded-l-3xl">
            <img
              className="xl:w-[10%] lg:w-[7%] w-[60px]"
              src={EnergyIcon}
              alt=""
            />
            <h2 className="font-roboto font-black xl:text-4xl lg:text-3xl text-2xl mt-[34px] lg:leading-[50px]">
              Type Others'
            </h2>
            <h2 className="font-roboto font-black xl:text-4xl lg:text-3xl text-2xl lg:leading-[50px]">
              headshots<span className="opacity-40">, earn points</span>
            </h2>
            <h2 className="font-roboto font-black xl:text-4xl lg:text-3xl text-2xl lg:leading-[50px]">
              <span className="opacity-40">and use them to</span>
            </h2>
            <h2 className="font-roboto font-black text-primary lg:text-3xl text-2xl lg:leading-[50px]">
              connect with Directors
            </h2>
            <h2 className="font-roboto font-black text-primary lg:text-3xl text-2xl lg:leading-[50px]">
              and Producers
            </h2>
            <p className="w-auto text-tertiary font-roboto font-semibold text-[16px]  pt-[14px] rounded-md mt-9">
              JOIN WAITLIST +
            </p>
          </div>
          <div className="bg-background-100 flex text-white w-full lg:w-3/6 relative rounded-r-3xl 2xl:h-[700px] xl:h-[650px] md:h-[521px] lg:h-[500px] h-[380px]">
            <img
              src={Iphone}
              alt=""
              className="absolute z-10 md:w-[40%] w-[50%]"
            />
            <img
              src={Iphone2}
              alt=""
              className="absolute bottom-0 right-0 z-10 md:w-[30%] w-[40%]"
            />
            <div className="absolute lg:left-0 right-0  w-[80%] h-full bg-background-300"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-5/6 flex flex-col items-center bg-background-100 mt-8 relative lg:pt-20 rounded-3xl">
          <img
            src={MovieStrip}
            alt=""
            className="w lg:w-1/5 lg:absolute top-0 left-0"
          />
          <img src={StarIcon} alt="" className="lg:w-[8%] w-[20%]" />
          <h1 className="font-black font-roboto lg:leading-snug lg:text-[64px] text-4xl text-white pt-5">
            CastTyped to
          </h1>
          <h1 className="font-black font-roboto lg:leading-snug lg:text-[64px] text-4xl text-secondary">
            Break in
          </h1>
          <p className="font-normal font-roboto lg:text-md text-white pt-5 xl:px-[450px] md:px-[200px] px-[50px] text-center">
            Know your Type, make it easy for the industry to get you working in
            films right away!
          </p>
          <button className="text-tertiary font-roboto font-semibold text-[16px] relative pl-6 pr-[58.41px] h-[54px] rounded-md mt-9">
            JOIN WAITLIST{" "}
            <img
              className="absolute right-6 top-[19px] text-[#246DA8]"
              src={BlueStar}
              alt=""
            />
          </button>
          <img src={TV} alt="" className=" mt-[68px] lg:w-1/2 w-5/6" />
        </div>
      </div>

      <div className="w-full mt-20 flex justify-center">
        <div className="w-5/6 flex flex-col">
          <img src={BookIcon} alt="" className="lg:w-[4%] w-[20%]" />
          <div className="w-full flex lg:flex-row flex-col mt-8">
            <div className="lg:w-1/2 w-full">
              <h1 className="font-black font-roboto text-2xl lg:text-5xl text-white opacity-40">
                Don't believe us?
              </h1>
              <h1 className="font-black font-roboto text-2xl lg:text-5xl text-white pt-1">
                Look at these stars
              </h1>
              <h1 className="font-black font-roboto text-2xl lg:text-5xl text-tertiary pt-1">
                sustaining their careers
              </h1>
              <h1 className="font-black font-roboto text-2xl lg:text-5xl text-tertiary pt-1">
                through their types!
              </h1>
            </div>
            <div className="lg:w-1/2 w-full flex lg:justify-end">
              <button className="text-tertiary font-roboto font-semibold text-[16px] relative lg:pl-6 pr-[58.41px] h-[54px] rounded-md mt-9">
                JOIN WAITLIST{" "}
                <img
                  className="absolute right-6 top-[19px] text-[#246DA8]"
                  src={BlueStar}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[44px] flex justify-center">
        <div className="w-[90%]">
          <Slider {...settings} ref={slider}>
            <div className="relative rounded-2xl">
              <img src={Pic1} alt="" className="rounded-2xl" />
              <div className='absolute bottom-[11px] left-[19px] p-[10px] text-white rounded-full border-none before:w-full before:h-full before:bg-black before:opacity-80' style={{ backdropFilter: "blur(10px)", }}>
                <p>Tough Chick</p>
              </div>
            </div>
            <div className="relative rounded-2xl">
              <img src={Pic2} alt="" className="rounded-2xl" />

              <div className='absolute bottom-[11px] left-[19px] p-[10px] text-white rounded-full border-none before:w-full before:h-full before:bg-black before:opacity-80' style={{ backdropFilter: "blur(10px)", }}>
                <p>Old Teacher</p>
              </div>
            </div>
            <div className="relative rounded-2xl">
              <img src={Pic3} alt="" className="rounded-2xl" />
              <div className='absolute bottom-[11px] left-[19px] p-[10px] text-white rounded-full border-none before:w-full before:h-full before:bg-black before:opacity-80' style={{ backdropFilter: "blur(10px)", }}>
                <p>Wise Guy</p>
              </div>
            </div>
            <div className="relative rounded-2xl">
              <img src={Pic4} alt="" className="rounded-2xl" />
              <div className='absolute bottom-[11px] left-[19px] p-[10px] text-white rounded-full border-none before:w-full before:h-full before:bg-black before:opacity-80' style={{ backdropFilter: "blur(10px)", }}>
                <p>Revenge Guy</p>
              </div>
            </div>
            <div className="relative rounded-2xl">
              <img src={Pic5} alt="" className="rounded-2xl" />
              <div className='absolute bottom-[11px] left-[19px] p-[10px] text-white rounded-full border-none before:w-full before:h-full before:bg-black before:opacity-80' style={{ backdropFilter: "blur(10px)", }}>
                <p>HotShot</p>
              </div>
            </div>
          </Slider>
          <div className="w-full flex flex-row mt-[28px] justify-center gap-[64px]">
            <div className="flex justify-center items-center w-[72px] h-[72px] bg-background-300 rounded-full cursor-pointer hover:opacity-80" onClick={prev} >
              <img src={Arrow1} alt="" />
            </div>
            <div className="flex justify-center items-center w-[72px] h-[72px] bg-background-300 rounded-full cursor-pointer  hover:opacity-80" onClick={next}>
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mt-[100px] flex justify-center'>
        <div className='lg:w-5/6 w-full flex lg:flex-row flex-col items-center justify-center'>
          <div className='lg:w-[55%] w-full bg-background-300 flex flex-row lg:justify-between justify-center lg:rounded-l-2xl lg:order-1 order-2' >
            <div className='h-[333px] w-[20%] mt-[218px] mb-[75px] lg:flex hidden justify-center items-center bg-gradient-to-r from-background-300 rounded-2xl' style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <div className='flex justify-center items-center w-[72px] h-[72px] bg-background-300 rounded-full cursor-pointer'>
                <img src={Arrow1} alt="" />
              </div>
            </div>

            <div className='h-[333px] lg:w-[55%] w-[90%] lg:mt-[104px] my-[20px] rounded-2xl flex justify-center items-center flex-col' style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <img src={Profile} alt="" className='w-[15%]' />
              <p className='font-medium my-1 text-[16px] text-white font-Metropolis'>Meyer G.</p>
              <img src={Stars} alt="" className='w-[25%]' />
              <p className='font-normal text-[16px] text-white opacity-70 px-3 text-center'>If you know me, you know I like Susie’s cakes even though I have slight problems with fast food restaurants (I consider their experience mid at most).
                <br /><br /> The food was okay. Better than CRs tbh.</p>
            </div>

            <div className='h-[333px] w-[15%] mt-[218px] mb-[75px] lg:flex hidden justify-center items-center  bg-gradient-to-l from-background-300 rounded-2xl' style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <div className='flex justify-center items-center w-[72px] h-[72px] bg-background-300 rounded-full cursor-pointer'>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
          <div className='lg:w-[45%] w-full bg-background-100 flex flex-col  justify-center h-full pl-9 py-[80px] lg:py-0 lg:rounded-r-2xl lg:order-2 order-1' >
            <h1 className='font-black lg:text-[64px] text-5xl text-white font-roboto leading-none'>Take their</h1>
            <h1 className='font-black lg:text-[64px] text-5xl text-white font-roboto leading-none'>word <span className='opacity-40'>for it</span></h1>
            <div className='text-tertiary font-roboto font-semibold text-[16px] relative h-[54px] mt-9 w-auto flex flex-row justify-start items-center cursor-pointer`'><p> JOIN WAITLIST </p> <img className=' pl-[10px] text-[#246DA8]' src={BlueStar} alt="" /></div>
          </div>
        </div>
      </div>

      <div className='w-full mt-[100px] flex justify-center'>
        <div className='w-5/6 flex flex-col'>
          <h1 className='font-black font-roboto text-white text-6xl lg:text-[96px] opacity-40 leading-none'>It's pretty</h1>
          <h1 className='font-black font-roboto text-white text-6xl lg:text-[96px] leading-none'>simple</h1>
        </div>
      </div>

      <div className='w-full mt-[48px] flex justify-center relative'>
        <div className='lg:w-5/6 w-full flex lg:flex-row flex-col justify-between items-center gap-y-10'>
          <div className='lg:w-[30%] w-full lg:px-0 px-14 pl-8 flex flex-col'>
            <img src={Mask} alt="" className='lg:w-[30%] w-[120px]' />
            <h4 className='leading-none font-bold font-roboto text-2xl text-white mt-4'>Sign Up</h4>
            <p className='text-white opacity-40 font mt-3'>Register to join CastTypes as a performer and get typed.</p>
          </div>
          <div className='lg:w-[30%] w-full lg:px-0 px-14  pl-8 flex flex-col'>
            <img src={Light} alt="" className='lg:w-[16%] w-[70px]' />
            <h4 className='leading-none font-bold font-roboto text-2xl text-white mt-4'>Type & Earn Points</h4>
            <p className='text-white opacity-40 font mt-3'>Type others’ headshots, earn points and earn points.</p>
          </div>
          <div className='lg:w-[30%] w-full lg:px-0 px-14 pl-8 flex flex-col'>
            <img src={MovieIcon} alt="" className='lg:w-[23%] w-[100px]' />
            <h4 className='leading-none font-bold font-roboto text-2xl text-white mt-4'>Audition</h4>
            <p className='text-white opacity-40 font mt-3'>Connect with Directors and Producers.</p>
          </div>
        </div>
        <div className='lg:w-[30%] md:w-[60%] w-full h-[435px] absolute right-0 lg:top-0 top-96 bg-secondary rounded-full lg:opacity-30 opacity-20' style={{ filter: 'blur(120px)' }}></div>
      </div>

      <div className='w-full lg:mt-[30px] mt-0 flex justify-center'>
        <div className='lg:w-5/6 w-full flex justify-center '>
          <div className='text-tertiary font-roboto font-semibold text-[16px] relative h-[54px] mt-9 w-auto flex flex-row justify-start items-center cursor-pointer'><p> JOIN WAITLIST </p> <img className=' pl-[10px] text-[#246DA8]' src={BlueStar} alt="" /></div>
        </div>
      </div>

      <footer className='w-full lg:mt-[70px] mt-[10px] flex justify-center relative'>
        <div className='lg:w-5/6 w-full flex flex-col justify-center items-center py-[50px]'>
          <img src={Logo} alt="" />
          <p className='font-roboto text-white font-[17px] opacity-40 lg:mt-[68px] mt-[35px] text-center leading-tight'>We help you to build your career in digital firms <br /> and world wide Organizations.</p>
          <div className='flex lg:flex-row flex-col gap-y-[20px] gap-x-[40px] justify-around items-center mt-[48px]'>
            <p className='cursor-pointer font-roboto text-white font-[15px]'>Performers</p>
            <p className='cursor-pointer font-roboto text-white font-[15px]'>Filmmakers</p>
            <p className='cursor-pointer font-roboto text-white font-[15px]'>Organizations</p>
            <div className='lg:block hidden border-white border-y-0 border-l-0 border h-[49px] w-[1px] mx-[35px]'></div>
            <p className='cursor-pointer font-roboto text-white font-[15px]'>Sponsors</p>
            <p className='cursor-pointer font-roboto text-white font-[15px]'>About</p>
          </div>
          <div className='flex flex-col justify-around items-center mt-[2px]'>
            <div className='flex flex-row gap-[28px] justify-around items-center mt-[52px]'>
              <img src={Fb} alt="" />
              <img src={Twitter} alt="" />
              <img src={Insta} alt="" />
              <img src={Apple} alt="" />
            </div>
            <p className=' text-white opacity-40 text-[14px] mt-[20px]'>All Right Reserved by <span className='font-bold'>CastTypes</span></p>
          </div>
          <div className='w-[30%] h-[435px] absolute left-0 bottom-0 bg-primary rounded-full opacity-30' style={{ filter: 'blur(120px)' }}></div>
        </div>
      </footer>
    </div>
  );
}

export default App;

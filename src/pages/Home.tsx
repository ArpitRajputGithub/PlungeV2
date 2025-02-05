import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import chillout from '../assets/chillout.png';
import hello from '../assets/hello.png';
import friends1 from '../assets/friends1.png';
import friends2 from '../assets/friends2.png';
import joined1 from '../assets/joined1.png';
import joined1L from '../assets/joined1L.png';
import joined2 from '../assets/joined2.png';
import joined3 from '../assets/joined3.png';
import joined3R from '../assets/joined3R.png';
import joined5 from '../assets/joined5.png';
import mockup2 from '../assets/mockup2.png';
import mockup3 from '../assets/mockup3.png';
import mockup4 from '../assets/mockup4.png';
import mockup5 from '../assets/mockup5.png';
import phoneMockup from '../assets/phone-mockup.png';
import sunEmoji from '../assets/sun-emoji.png';
import sun2 from '../assets/sun2.png';
import sunglasses from '../assets/sunglasses.png';




// Star component with random animation delay
const Star = ({ className = "", color = "yellow" }) => {
  const delay = Math.random() * 2;
  return (
    <svg
      className={`${className} animate-twinkle`}
      style={{ animationDelay: `${delay}s` }}
      viewBox="0 0 24 24"
      fill={color === "yellow" ? "#F9F871" : "#FF7A00"}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
};


interface WireframeContent {
  image: string;
  title: string;
  joinedImage?: string;
  joinedSecond?: string;

  joinedStyles?: {
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };

  joinedSecondStyles?: {
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

const wireframes: WireframeContent[] = [
  {
    image: phoneMockup,
    title: 'Discover exciting activities around you',
    joinedImage: joined1,
    joinedStyles: {
      width: '20rem',
      top: '50%',
      left: '15rem'
    },
    joinedSecond: joined1L,
    joinedSecondStyles: {
      width: '16rem',
      top: '10rem',
      left: '-15rem'
    }
  },
  {
    image: mockup2,
    title: 'Discover and Engage Through Your Feed!',
    joinedImage: joined2,
    joinedStyles: {
      width: '20rem',
      top: '50%',
      right: '-16rem'
    },
  },
  {
    image: mockup3,
    title: 'Organize and track your activities',
    joinedImage: joined3,
    joinedStyles: {
      width: '20rem',
      top: '60%',
      right: '-20rem'
    },
    joinedSecond: joined3R,
    joinedSecondStyles: {
      width: '10rem',
      top: '19rem',
      right: '-11rem'
    }
  },
  {
    image: mockup4,
    title: 'Join and manage activities easily',


  },
  {
    image: mockup5,
    title: 'Connect and communicate with your friends',
    joinedImage: joined5,
    joinedStyles: {
      width: '20rem',
      top: '30%',
      right: '15rem'
    },
  }
];

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentWireframe, setCurrentWireframe] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWireframe((prev) => (prev + 1) % wireframes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-plunge-purple h-[75vh] sm:h-[80vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-6 w-full">
          {/* Main Content */}
          <div className="relative max-w-7xl mx-auto -mt-4 sm:-mt-12 md:-mt-20">
            {/* Main Text Container */}
            <div className="relative flex flex-col items-center justify-center text-center w-full">
              {/* Main Text */}
              <h1 className="text-white font-display text-[40px] sm:text-7xl md:text-8xl lg:text-9xl leading-tight relative font-black w-full">
                <div className="flex flex-col items-center w-full">
                  <div className="flex items-center justify-center mb-2 sm:mb-6 relative ml-0 sm:-ml-12 md:-ml-20 w-full">
                    {/* Sun Emoji */}
                    <div className="absolute left-6 sm:-left-24 md:-left-40 lg:left-36 -top-4 sm:-top-8 md:-top-12 lg:-top-16">
                      <img
                        src={sunEmoji}
                        alt="Sun"
                        className="w-8 sm:w-24 sm:h-24 md:w-26 md:h-26 animate-rotate"
                      />
                    </div>
                    <span className="relative">Find</span>
                    <span className="text-plunge-yellow ml-2 sm:ml-4 md:ml-6 relative">
                      Friends
                      {/* <svg className="absolute -bottom-1 sm:-bottom-3 md:-bottom-4 left-0 w-full" height="8" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#FF7A00" strokeWidth="2" fill="none" />
                      </svg> */}
                    </span>
                  </div>
                  <div className="flex items-center justify-center relative ml-1 sm:ml-12 md:ml-20">
                    <img
                      src={sunglasses}
                      alt="Sunglasses"
                      className="w-6 sm:w-16 sm:h-16 md:w-20 md:h-20 mr-1 sm:mr-3 md:mr-4"
                    />
                    <span>For</span>
                    <span className="text-plunge-yellow ml-1 sm:ml-4 md:ml-6 relative">
                      Anything
                      {/* Positioned Chillout under Anything */}
                      <div className="absolute top-full right-0 mt-2 sm:mt-6 md:mt-8">
                        <img
                          src={chillout}
                          alt="Chill Out"
                          className="w-16 sm:w-32 md:w-44 transform rotate-6 animate-float"
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </h1>

              {/* Decorative Elements */}
              <div className="absolute right-2 sm:right-16 md:right-32 -top-2 sm:-top-6 md:-top-10">
                <img
                  src={hello}
                  alt="Hello"
                  className="w-12 sm:w-32 md:w-40 animate-float"
                />
              </div>

              {/* Stars */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Yellow Stars */}
                <div className="absolute -top-4 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-24">
                  <Star className="w-3 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
                </div>
                <div className="absolute right-0 top-0">
                  <Star className="w-2 h-2 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </div>
                <div className="absolute right-6 sm:right-24 md:right-30 lg:right-36 xl:right-40 top-20 sm:top-70 md:top-80 lg:top-96 xl:top-[30rem]">
                  <Star className="w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
                </div>

                {/* Orange Stars */}
                <div className="absolute right-4 sm:-right-4 md:-right-8 lg:-right-12 xl:right-10 top-14 sm:top-14 md:top-20 lg:top-28 xl:top-22">
                  <Star className="w-5 h-5 sm:w-2 sm:h-2 md:w-4 md:h-4 lg:w-8 lg:h-8 xl:w-10 xl:h-10" color="orange" />
                </div>
                <div className="absolute -left-0 sm:-left-12 md:-left-16 lg:-left-20 xl:left-36 
                bottom-8 sm:bottom-24 md:bottom-32 lg:bottom-40 xl:-bottom-12">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" color="orange" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Wave Shape */}
        <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-500 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
          <svg className="w-full h-12 sm:h-30 md:h-40" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0 200V50C240 120 480 180 720 160C960 140 1200 40 1440 50V200H0Z"
              fill="white"
              className="transition-all duration-300"
            />
          </svg>

        </div>
      </section>


      {/* What We Do Section */}
      <section className="bg-white py-10 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-24 md:mb-32">
            <div className="relative inline-block">
              <h2 className="text-[#161024] font-display text-[40px] sm:text-5xl md:text-6xl font-bold relative">
                <span className="block mb-3 sm:mb-5 md:mb-6">WHAT WE</span>
                <div className="relative inline-block">
                  {/* Yellow blob background */}
                  <div className="absolute -inset-2 sm:-inset-4 -bottom-3 sm:-bottom-6 bg-[#F9F871] rounded-[30px] sm:rounded-[50px] transform -rotate-6 origin-left"></div>
                  {/* Text */}
                  <div className="relative flex items-center justify-center -rotate-6">
                    <span className="relative z-10 ml-1 text-plunge-purple">DO</span>
                    <span className="relative z-10 text-plunge-purple">?</span>
                  </div>
                  <div className="absolute -right-6 sm:-right-10 md:-right-11 -top-5 sm:-top-8 md:-top-7 z-20">
                    <img
                      src={sun2}
                      alt="Smiley"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                </div>
              </h2>
            </div>
            <p className="text-plunge-purple text-2xl sm:text-3xl md:text-4xl font-sans font-semibold leading-relaxed max-w-3xl mx-auto mt-4 sm:mt-7 md:mt-8 px-4">
              Help you meet people for things you<br className="hidden sm:block" />
              do in your real life.
            </p>
          </div>

          {/* Our Approach Card */}
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Main Card */}
            <div className="bg-[#F9F871] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12">
              {/* Left Side - Images */}
              <div className="w-full md:w-1/2 relative h-[400px] sm:h-[400px] md:h-[600px]">
                <div className="absolute top-0 left-0 right-0 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white p-3 sm:p-3 md:p-4 shadow-lg rounded-sm">
                    <img
                      src={friends1}
                      alt="Friends enjoying outdoors"
                      className="w-full h-44 sm:h-48 md:h-64 object-cover rounded-sm"
                    />
                  </div>
                </div>
                <div className="absolute top-52 sm:top-60 md:top-80 left-0 right-0 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white p-3 sm:p-3 md:p-4 shadow-lg rounded-sm">
                    <img
                      src={friends2}
                      alt="Friends hanging out"
                      className="w-full h-44 sm:h-48 md:h-64 object-cover rounded-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="w-full md:w-1/2 pt-4 sm:pt-6 md:pt-8 text-center md:text-left">
                <h2 className="text-[#161024] font-display text-[32px] sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 md:mb-12">
                  OUR APPROACH
                </h2>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <h3 className="text-plunge-purple font-display text-[28px] sm:text-4xl md:text-5xl font-bold transform transition-all duration-300">
                    Build real Life bonds
                  </h3>
                  <h4 className="text-plunge-purple font-display text-[28px] sm:text-4xl md:text-5xl font-bold transform transition-all duration-300">
                    No ads, No content
                  </h4>
                  <p className="text-[#161024] text-base sm:text-lg md:text-xl leading-relaxed opacity-90 transform transition-all duration-300 hover:opacity-100">
                    Remember school days? Making friends was effortless. We had time—loads of it—and endless ways to bond. Fast forward to now: no time, no energy, and making friends feels like a full-time job. That's where we come in. We're building a way to connect, vibe, and bond—without messing up your schedule.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white relative flex flex-col font-sans overflow-x-hidden overflow-y-hidden">
        {/* Section Title */}
        <div className="text-center py-0 sm:py-12 md:py-0">
          <h2 className="text-[#161024] font-display text-[32px] sm:text-5xl md:text-6xl font-bold">
            How it works?
          </h2>
        </div>
        {/* Purple Background Block */}
        <div className="absolute left-0 top-[7vh] h-[70vh] 
                sm:top-[7vh] sm:h-[75vh] 
                md:top-[7vh] md:h-[80vh] 
                lg:top-[8vh] lg:h-[85vh] 
                xl:top-[13vh] xl:h-[77vh] 
                2xl:top-[10vh] 2xl:h-[90vh] 
                w-full md:w-[45%] lg:w-[40%] xl:w-[42%] 
                bg-plunge-purple rounded-b-[24px] 
                md:rounded-b-none md:rounded-r-[24px]">
          {/* Diamond decoration */}
          <div className="hidden md:block absolute top-[2rem] sm:top-[3rem] md:top-[4rem] lg:top-[5rem] left-[30rem] sm:left-[32rem] md:left-[30rem] w-5 h-5 bg-white transform rotate-45" />
        </div>

        <div className="container h-full">
          <div className="flex flex-col md:flex-row items-start pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Left Side - Phone with Wireframes */}
            <div className="w-full md:w-1/2 relative flex justify-center md:justify-start mb-6 md:mb-0">
              {/* Star Decoration */}
              <div className="hidden md:block absolute left-[60rem] top-[15rem] z-20">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#FF7A00">
                  <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
                </svg>
              </div>

              <div className="phone-frame relative w-[100%] sm:w-[60%] md:w-[18rem] lg:w-[16rem] xl:w-[18rem] 
                md:ml-12 lg:ml-16 xl:ml-20 md:-top-4 lg:-top-5 xl:-top-16 
                md:left-[16rem] lg:left-[18rem] xl:left-[20rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWireframe}
                    initial={{ opacity: 0, x: "10vw" }}
                    animate={{ opacity: 1, x: "0vw" }}
                    exit={{ opacity: 0, x: "-10vw" }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="relative z-10"
                  >
                    <motion.img
                      src={wireframes[currentWireframe].image}
                      alt={wireframes[currentWireframe].title}
                      className="w-full h-[400px] sm:h-[450px] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh] object-contain rounded-[30px]"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Mobile View Text */}
                    <div className="block md:hidden mt-12 text-center">
                      <motion.h3
                        className="text-white text-[1.8rem] font-sans font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        {wireframes[currentWireframe].title}
                      </motion.h3>
                    </div>

                    {/* Joined button image with manual positioning */}
                    {wireframes[currentWireframe].joinedImage && (
                      <motion.img
                        src={wireframes[currentWireframe].joinedImage}
                        alt="Joined"
                        className="absolute transform -translate-y-1/2 hidden md:block"
                        style={{
                          ...wireframes[currentWireframe].joinedStyles,
                          position: "absolute"
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      />
                    )}

                    {/* Joined second image with manual positioning */}
                    {wireframes[currentWireframe].joinedSecond && (
                      <motion.img
                        src={wireframes[currentWireframe].joinedSecond}
                        alt="Joined"
                        className="absolute transform -translate-y-1/2 hidden md:block"
                        style={{
                          ...wireframes[currentWireframe].joinedSecondStyles,
                          position: "absolute"
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Right Side Content - Hidden on Mobile */}
            <div className="hidden md:block w-full md:w-[39vw] md:pl-40 md:-pt-6 text-center md:text-left px-4 md:px-0">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWireframe}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="space-y-4"
                  >
                    <motion.h3
                      className="text-plunge-purple text-[24px] sm:text-4xl md:text-5xl font-sans font-semibold leading-tight px-6 md:px-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {wireframes[currentWireframe].title}
                    </motion.h3>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="hidden md:flex justify-center md:justify-end gap-2 mt-4 md:mt-0 md:absolute md:bottom-8 md:right-8 pb-8 md:pb-0">
            {wireframes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentWireframe(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentWireframe
                  ? 'w-8 bg-plunge-purple'
                  : 'w-2 bg-plunge-purple opacity-50 hover:opacity-75'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
        {/* </div> */}
      </section>



      {/* CTA Sections */}
      <section className="overflow-hidden py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-white">
        {/* First CTA - Right to Left */}
        <div className="relative w-screen -ml-[50vw] left-1/2">
          <div className="absolute -inset-1 bg-[#F9F871] transform -rotate-3 origin-left"></div>
          <div className="relative transform -rotate-3 origin-left">
            <div className="animate-[scroll_10s_linear_infinite] whitespace-nowrap min-w-full flex-shrink-0">
              <p className="text-plunge-purple text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 inline-block">
                Nobody deserves to be alone, Plunge has your back &nbsp;&nbsp;
                Nobody deserves to be alone, Plunge has your back &nbsp;&nbsp;
                Nobody deserves to be alone, Plunge has your back &nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>

        {/* Second CTA - Left to Right */}
        <div className="relative w-screen -ml-[50vw] left-1/2">
          <div className="absolute -inset-1 bg-[#F9F871] transform rotate-3 origin-left"></div>
          <div className="relative transform rotate-3 origin-left">
            <div className="animate-[scroll-reverse_10s_linear_infinite] whitespace-nowrap min-w-full flex-shrink-0">
              <p className="text-plunge-purple text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 inline-block">
                Download the plunge app now! &nbsp;&nbsp;
                Download the plunge app now! &nbsp;&nbsp;
                Download the plunge app now! &nbsp;&nbsp;
                Download the plunge app now! &nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home; 
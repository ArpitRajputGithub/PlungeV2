import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Star component with random animation delay
const Star = ({ className = "", color = "yellow" }) => {
  const delay = Math.random() * 2; // Random delay between 0-2s
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

// Add this interface and array before the Home component
interface WireframeContent {
  image: string;
  title: string;
  joinedImage?: string;
  joinedSecond?: string;
  // Manual positioning for first joined image
  joinedStyles?: {
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  // Manual positioning for second joined image
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
    image: '/src/assets/phone-mockup.png',
    title: 'Discover exciting activities around you',
    joinedImage: '/src/assets/joined1.png',
    joinedStyles: {
      width: '20rem',
      top: '50%',
      left: '15rem'
    },
    joinedSecond: '/src/assets/joined1L.png',
    joinedSecondStyles: {
      width: '16rem',
      top: '8rem',
      left: '-13rem'
    }
  },
  {
    image: '/src/assets/mockup2.png',
    title: 'Discover and Engage Through Your Feed!',
    joinedImage: '/src/assets/joined2.png',
    joinedStyles: {
      width: '20rem',
      top: '50%',
      right: '-16rem'
    },
  },
  {
    image: '/src/assets/mockup3.png',
    title: 'Organize and track your activities',
    joinedImage: '/src/assets/joined3.png',
    joinedStyles: {
      width: '20rem',
      top: '60%',
      right: '-20rem'
    },
    joinedSecond: '/src/assets/joined3R.png',
    joinedSecondStyles: {
      width: '10rem',
      top: '19rem',
      right: '-11rem'
    }
  },
  {
    image: '/src/assets/mockup4.png',
    title: 'Join and manage activities easily',
   
    
  },
  {
    image: '/src/assets/mockup5.png',
    title: 'Connect and communicate with your friends',
    joinedImage: '/src/assets/joined5.png',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-plunge-purple min-h-screen overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-6">
          {/* Main Content */}
          <div className="relative max-w-7xl mx-auto -mt-20">
            {/* Main Text Container */}
            <div className="relative flex flex-col items-center justify-center text-center">
              {/* Main Text */}
              <h1 className="text-white font-display text-8xl md:text-9xl leading-tight relative font-black">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center mb-6 relative -ml-20">
                    {/* Sun Emoji */}
                    <div className="absolute -left-40 -top-12">
                      <img
                        src="/src/assets/sun-emoji.png"
                        alt="Sun"
                        className="w-32 h-32 animate-rotate"
                      />
                    </div>
                    <span className="relative">Find</span>
                    <span className="text-plunge-yellow ml-6 relative">
                      Friends
                      <svg className="absolute -bottom-4 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#FF7A00" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center justify-center relative ml-20">
                    <img
                      src="/src/assets/sunglasses.png"
                      alt="Sunglasses"
                      className="w-20 h-20 mr-4"
                    />
                    <span>For</span>
                    <span className="text-plunge-yellow ml-6 relative">
                      Anything
                      {/* Positioned Chillout under Anything */}
                      <div className="absolute top-full right-0 mt-8">
                        <img
                          src="/src/assets/chillout.png"
                          alt="Chill Out"
                          className="w-44 transform rotate-6 animate-float"
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </h1>

              {/* Decorative Elements */}
              <div className="absolute right-32 -top-10">
                <img
                  src="/src/assets/hello.png"
                  alt="Hello"
                  className="w-40 animate-float"
                />
              </div>

              {/* Stars */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Yellow Stars */}
                <div className="absolute -top-16">
                  <Star className="w-10 h-10" />
                </div>
                <div className="absolute right-0 top-0">
                  <Star className="w-6 h-6" />
                </div>
                <div className="absolute right-30 top-80 bottom-50">
                  <Star className="w-8 h-8" />
                </div>
                

                {/* Orange Stars - Only 2 */}
                <div className="absolute -right-20 top-40">
                  <Star className="w-16 h-16" color="orange" />
                </div>
                <div className="absolute -left-20 bottom-40">
                  <Star className="w-12 h-12" color="orange" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Shape */}
        <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-500 ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
          <svg className="w-full h-40" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              d="M0 200V50C240 120 480 180 720 160C960 140 1200 40 1440 50V200H0Z"
              fill="white"
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <div className="relative inline-block">
              <h2 className="text-[#161024] font-display text-6xl font-bold relative">
                <span className="block mb-4">WHAT WE</span>
                <div className="relative inline-block">
                  {/* Yellow blob background */}
                  <div className="absolute -inset-4 -bottom-6 bg-[#F9F871] rounded-[40px] transform -rotate-6 origin-left"></div>
                  {/* Text */}
                  <div className="relative flex items-center justify-center -rotate-6">
                    <span className="relative z-10 -ml-1 text-plunge-purple ">DO</span>
                    <span className="relative z-10 text-plunge-purple">?</span>
                  </div>
                  {/* Emoji */}
                  <div className="absolute -right-11 -top-5 z-20">
                    <img
                      src="/src/assets/sun2.png"
                      alt="Smiley"
                      className="w-12 h-12"
                    />
                  </div>
                </div>
              </h2>
            </div>
            <p className="text-plunge-purple text-4xl font-sans font-semibold leading-relaxed max-w-3xl mx-auto mt-8">
              Help you meet people for things you<br />
              do in your real life.
            </p>
          </div>

          {/* Our Approach Card */}
          <div className="relative max-w-6xl mx-auto">
            {/* Sun Emoji Badge */}
            <div className="absolute -right-9 -top-12 z-20">
              <img
                src="/src/assets/sun-emoji.png"
                alt="Smiley"
                className="w-32 h-32 animate-float"
              />
            </div>

            {/* Main Card */}
            <div className="bg-[#F9F871] rounded-[40px] p-12 flex flex-col md:flex-row gap-12">
              {/* Left Side - Images */}
              <div className="md:w-1/2 relative h-[600px]">
                <div className="absolute top-0 left-0 right-0 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white p-4 shadow-lg rounded-sm">
                    <img
                      src="/src/assets/friends1.jpg"
                      alt="Friends enjoying outdoors"
                      className="w-full h-64 object-cover rounded-sm"
                    />
                  </div>
                </div>
                <div className="absolute top-80 left-0 right-0 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white p-4 shadow-lg rounded-sm">
                    <img
                      src="/src/assets/friends2.jpg"
                      alt="Friends hanging out"
                      className="w-full h-64 object-cover rounded-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="md:w-1/2 pt-8">
                <h2 className="text-[#161024] font-display text-6xl font-bold mb-12">
                  OUR APPROACH
                </h2>
                <div className="space-y-6">
                  <h3 className="text-plunge-purple font-display text-5xl font-bold transform transition-all duration-300">
                    Build real Life bonds
                  </h3>
                  <h4 className="text-plunge-purple font-display text-5xl font-bold transform transition-all duration-300">
                    No ads, No content
                  </h4>
                  <p className="text-[#161024] text-xl leading-relaxed opacity-90 transform transition-all duration-300 hover:opacity-100">
                    Remember school days? Making friends was effortless. We had time—loads of it—and endless ways to bond. Fast forward to now: no time, no energy, and making friends feels like a full-time job. That's where we come in. We're building a way to connect, vibe, and bond—without messing up your schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white relative min-h-screen flex flex-col font-sans">
        {/* Section Title - Moved outside the purple background */}
        <div className="text-center py-8 ">
          <h2 className="text-[#161024] font-display text-6xl font-bold">
            How it works?
          </h2>
        </div>

        {/* Content Container with Purple Background */}
        <div className="relative flex-1">
          {/* Purple Background Block */}
          <div className="absolute left-0 top-0 h-[87vh] w-[45%] bg-plunge-purple rounded-r-[24px]">
            {/* Diamond decoration */}
            <div className="absolute top-[2.5rem] left-[27rem] w-4 h-4 bg-white transform rotate-45" />
          </div>

          <div className="container mx-auto px-4 h-full">
            <div className="flex h-full items-start pt-12 max-w-6xl mx-auto">
              {/* Left Side - Phone with Wireframes */}
              <div className="w-1/2 relative">
                {/* Star Decoration */}
                <div className="absolute left-[60rem] top-[15rem] z-20">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#FF7A00">
                    <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
                  </svg>
                </div>

                <div className="phone-frame relative w-[19vw] ml-12 -top-7 left-[16rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentWireframe}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <motion.img
                        src={wireframes[currentWireframe].image}
                        alt={wireframes[currentWireframe].title}
                        className="w-full h-[590px] object-fit rounded-[30px] shadow-lg"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Joined button image with manual positioning */}
                      {wireframes[currentWireframe].joinedImage && (
                        <motion.img
                          src={wireframes[currentWireframe].joinedImage}
                          alt="Joined"
                          className="absolute transform -translate-y-1/2"
                          style={{
                            ...wireframes[currentWireframe].joinedStyles,
                            position: 'absolute'
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
                          className="absolute transform -translate-y-1/2"
                          style={{
                            ...wireframes[currentWireframe].joinedSecondStyles,
                            position: 'absolute'
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

              {/* Right Side Content */}
              <div className="w-[39vw] pl-40 -pt-6">
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
                        className="text-plunge-purple text-5xl font-sans font-semibold leading-tight"
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
            <div className="absolute bottom-8 right-8 flex gap-1.5">
              {wireframes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentWireframe(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentWireframe 
                      ? 'w-6 bg-plunge-purple' 
                      : 'w-1.5 bg-plunge-purple opacity-50 hover:opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="overflow-hidden mb-20 mt-20 py-40 bg-white">
        {/* First CTA - Right to Left */}
        <div className="relative w-screen -ml-[50vw] left-1/2">
          <div className="absolute inset-0 bg-[#F9F871] transform -rotate-6 origin-left"></div>
          <div className="relative transform -rotate-6 origin-left">
            <div className="animate-marquee-rtl whitespace-nowrap">
              <p className="text-plunge-purple text-5xl font-display font-extrabold py-12 inline-block">
                Nobody deserves to be alone, Plunge has your back &nbsp;&nbsp;&nbsp;
                Nobody deserves to be alone, Plunge has your back &nbsp;&nbsp;&nbsp;
                Nobody deserves to be alone, Plunge has your back &nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>

        {/* Second CTA - Left to Right */}
        <div className="relative w-screen -ml-[50vw] left-1/2 mt-0">
          <div className="absolute inset-0 bg-[#F9F871] transform rotate-6 origin-left"></div>
          <div className="relative transform rotate-6 origin-left">
            <div className="animate-marquee-ltr whitespace-nowrap">
              <p className="text-plunge-purple text-5xl font-display font-extrabold py-12 inline-block">
                Download the plunge app now! &nbsp;&nbsp;&nbsp;
                Download the plunge app now! &nbsp;&nbsp;&nbsp;
                Download the plunge app now! &nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
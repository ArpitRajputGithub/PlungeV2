import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-20 py-4 sm:py-5 md:py-6 lg:py-6">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
            Plunge
          </Link>

          {/* Download Button */}
          <button
            onClick={scrollToFooter}
            className="bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#F9F871] transition-all hover:shadow-[0_0_20px_rgba(249,248,113,0.5)]"
          >
            Download App
          </button>
        </div>
    </nav>
  );
};

export default Navbar;

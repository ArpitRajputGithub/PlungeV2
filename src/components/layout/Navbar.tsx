import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center gap-60"> 
          {/* Logo */}
          <Link to="/" className="text-white text-4xl font-bold font-sans">
            Plunge
          </Link>

          {/* Download Button */}
          <button
            onClick={scrollToFooter}
            className="bg-white text-black px-8 py-3 rounded-full text-base font-medium hover:bg-[#F9F871] transition-all hover:shadow-[0_0_20px_rgba(249,248,113,0.5)]"
          >
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

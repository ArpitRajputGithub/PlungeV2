import { Link } from 'react-router-dom';
import googleplay from '../../assets/googleplay.png';
import appstore from '../../assets/appstore.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-plunge-purple text-white py-6 sm:py-8 md:py-10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/2 mb-6 sm:mb-8 md:mb-0 flex flex-col">
            {/* Logo */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-semibold mb-3 sm:mb-4 md:mb-6 text-center md:text-left">Plunge</h2>

            {/* App Store Buttons */}
            <div className="flex flex-row gap-4 mb-4 sm:mb-6 md:mb-8 items-center justify-center md:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.plunge&hl=en"
                className="w-[45%] sm:w-[12rem] md:w-[16rem] hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googleplay}
                  alt="Get it on Google Play"
                  className="w-full"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/plunge-one/id6739748321"
                className="w-[45%] sm:w-[12rem] md:w-[16rem] hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appstore}
                  alt="Download on the App Store"
                  className="w-full"
                />
              </a>
            </div>

            {/* Map */}
            <div className="h-[10rem] w-[18rem] sm:h-56 sm:w-[32rem] md:h-72 md:w-[48rem] lg:w-[39rem] mb-1 overflow-hidden mx-auto md:mx-0 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53222.05504797422!2d77.08552068483678!3d28.703631509973352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d5b0619f3f%3A0x2208402cf282fb02!2sPitampura%2C%20Delhi!5e1!3m2!1sen!2sin!4v1738324980603!5m2!1sen!2sin"
                height="100%"
                width="100%"
                className="max-w-full sm:max-w-[85%] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>



            {/* Copyright */}
            <div className="mt-auto pt-2">
              <p className="text-xs sm:text-sm opacity-60 text-center md:text-left">
                © {new Date().getFullYear()} Plunge | Powered by Plunge Technologies Private Limited
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 flex flex-col">
            <div>
              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 justify-center md:justify-end mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6 md:mt-16">
                {/* Instagram */}
                <a href="https://www.instagram.com/plunge.one/"
                  className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#DFE742] hover:text-plunge-purple transition-all"
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61565351822168"
                  className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#DFE742] hover:text-plunge-purple transition-all"
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#"
                  className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#DFE742] hover:text-plunge-purple transition-all"
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/plunge-one/?viewAsMember=true"
                  className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#DFE742] hover:text-plunge-purple transition-all"
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* Contact Info */}
              <div className="mb-4 sm:mb-6 md:mb-8 text-center md:text-right">
                <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-2 opacity-60">CONTACT US</h3>
                <p className="text-sm sm:text-base md:text-lg mb-2">+91 7814916436</p>
                <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-2 mt-3 sm:mt-4 opacity-60">LOCATION</h3>
                <p className="text-sm sm:text-base md:text-lg mb-2">Pitampura, India</p>
                <h3 className="text-xs sm:text-sm uppercase tracking-wider mb-2 mt-3 sm:mt-4 opacity-60">EMAIL</h3>
                <p className="text-sm sm:text-base md:text-lg">nikhil@plunge.one</p>
              </div>
            </div>

            {/* Navigation Button and Legal Links */}
            <div className="mt-auto">
              <div className="flex flex-col items-center md:items-end">
                <button
                  onClick={scrollToTop}
                  className="bg-[#DFE742] text-plunge-purple w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full mb-3 sm:mb-4 hover:bg-white transition-colors flex items-center justify-center"
                >
                  <svg className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>

                {/* Legal Links */}
                <div className="text-center md:text-right space-y-1">
                  <Link to="/privacy-policy" className="text-xs sm:text-sm hover:text-[#F9F871] block">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-xs sm:text-sm hover:text-[#F9F871] block">
                    Terms and conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
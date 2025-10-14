'use client';

import { useState,useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Great_Vibes } from "next/font/google";
import LottieIcon from "@/components/LottieIcon";
import TiltedCard from "@/components/TiltedCard";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // only has 400 officially
});






export default function LandingPage() {
  // ✅ Hooks must be inside the component
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  /*Sticky Button for going Αρχικη */
  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScrollButton = () => {
    setShowScrollTop(window.scrollY > 300); // show after scrolling 300px
  };

  window.addEventListener("scroll", handleScrollButton);
  return () => window.removeEventListener("scroll", handleScrollButton);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative scroll-smooth">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-white/10 rounded-b-[45px] animate-fadeIn-15 ${scrolled? "bg-slate-900/80 backdrop-blur-md shadow-lg": "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <img src="/card.png" alt="Λογότυπο Dante Barbershop" className="h-16 w-auto" />
              </a>
            </div>
            

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Αρχική
                </a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Σχετικά
                </a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Υπηρεσίες
                </a>
                <a href="#locations" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Καταστήματα
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Επικοινωνία
                </a>
                <a
                  href="#appointment"
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Ραντεβού
                </a>
                
                
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors  "
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 rounded-b-4xl bg-transparent">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-white py-2 transition-colors">
                Αρχική
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white py-2 transition-colors">
                Σχετικά
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white py-2 transition-colors">
                Υπηρεσίες
              </a>
              <a href="#locations" className="block text-gray-300 hover:text-white py-2 transition-colors">
                Καταστήματα
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white py-2 transition-colors">
                Επικοινωνία
              </a>
              <a
                href="#appointment"
                className="block w-full text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Ραντεβού
              </a>
            </div>
          </div>
        )}
      </nav>






      <section id="home" className="relative h-[100dvh] flex flex-col items-center justify-start overflow-hidden ">
        {/* Background image */}
        <img src="/dante.jpg" alt="Barbershop" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-[10vh] sm:pt-[12vh] lg:pt-[15vh] animate-fadeIn-2">
          <h1 className="text-6xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ">
            <span
              className={`${greatVibes.className} bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_15px_rgba(0,200,255,0.7)]`}
            >
              Dante Barbershop
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#appointment" className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 animate-fadeInLeft">
              Κλείσε Ραντεβού
              <ChevronRight className="group-hover:translate-x-1 transition-transform " size={20} />
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fadeInRight">
              Δείτε τις Υπηρεσίες
            </a>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="absolute bottom-10 z-10 ">
          <a href="#about" className="flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition-all opacity-0 animate-appear">
            <span className="mb-2 text-sm tracking-wide uppercase animate-appear">Μάθε Περισσότερα</span>
            <i className="fa-solid fa-angles-down text-2xl animate-bounce"></i>
          </a>
        </div>
      </section>







      <hr id="hrblue" />
      {/* About Section */}
      <section id="about" className="min-h py-40 bg-black text-white flex items-stretch justify-center px-8 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          
          {/* Left Side - Text */}
          <div className="flex flex-col justify-start mt-20 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 ">Σχετικά με εμάς</h2>

            {/* ⭐ Google rating */}
            <div className="flex justify-center md:justify-start items-center gap-2 mb-6 text-yellow-400 animate-pulse">

              <i className="fa-solid fa-star text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500"></i>
              <i className="fa-solid fa-star text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500"></i>
              <i className="fa-solid fa-star text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500"></i>
              <i className="fa-solid fa-star text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500"></i>
              <i className="fa-solid fa-star-half-stroke text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500"></i>
              <span className="text-gray-300 ml-2 text-lg">
                4.9 / 5 — 490+ αξιολογήσεις Google
              </span>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Με χρόνια εμπειρίας, συνδυάζουμε τεχνογνωσία και στυλ για να δημιουργούμε μοναδικά looks
              που ταιριάζουν στην προσωπικότητά σας.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Επισκεφθείτε το Dante Barbershop και απολαύστε μια εμπειρία κουρέματος
              με άνεση, ποιότητα και φιλική εξυπηρέτηση.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:flex justify-center items-center">
            <TiltedCard image="/card.jpg" />
          </div>
        </div>
      </section>






      <hr id="hrblueonly" />
      {/* Services Section */}
      <section id="services" className="min-h-screen bg-slate-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Οι Υπηρεσίες μας</h2>
          <p className="text-lg text-gray-300">
            Από τον σχεδιασμό μέχρι την υλοποίηση, καλύπτουμε κάθε σας ανάγκη.
          </p>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service card */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            <img src="/haircut1.jfif" alt="Κούρεμα" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Κούρεμα</h3>
              <p className="text-gray-300 text-sm">
                Κλασικά και μοντέρνα κουρέματα προσαρμοσμένα στο στυλ σας.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            <img src="/beard.webp" alt="Ξύρισμα" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Ξύρισμα</h3>
              <p className="text-gray-300 text-sm">
                Απολαύστε ένα αυθεντικό, χαλαρωτικό ξύρισμα με ζεστή πετσέτα.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            <img src="/care.jpg" alt="Περιποίηση" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Περιποίηση</h3>
              <p className="text-gray-300 text-sm">
                Προϊόντα και θεραπείες για άψογο αποτέλεσμα κάθε φορά.
              </p>
            </div>
          </div>
        </div>
      </section>





      <hr id="hrblue"/>
      {/* Locations Section */}
      <section
        id="locations"
        className="min-h-screen bg-black text-white flex items-center justify-center px-4" /*bg-slate-900*/
      >
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Τα Καταστήματά μας</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Store 1 */}
            <a
              href="https://www.google.com/maps/dir/40.6192128,22.9638144/Dante+barbershop,+Κλεάνθους+42,+Θεσσαλονίκη+544+53"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-cyan-500/40 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">Κάτω Τούμπα</h3>
              <p className="text-gray-300 mb-4">Κλεάνθους 42, Θεσσαλονίκη 544 53</p>
              <img
                src="/store1.png"
                alt="Χάρτης Κλεάνθους 42"
                className="rounded-lg w-full h-48 object-cover"
              />
            </a>

            {/* Store 2 */}
            <a
              href="https://www.google.com/maps/dir/40.6085146,22.967155/Dante+Barbershop,+25ης+Μαρτίου+28,+Θεσσαλονίκη+546+46"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-cyan-500/40 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">25ης Μαρτίου</h3>
              <p className="text-gray-300 mb-4">25ης Μαρτίου 28, Θεσσαλονίκη 546 46</p>
              <img
                src="/store2.png"
                alt="Χάρτης 25ης Μαρτίου 28"
                className="rounded-lg w-full h-48 object-cover"
              />
            </a>
          </div>
        </div>
      </section>









      <hr id="hrblueonly" />

      {/* Contact + Footer Wrapper */}
      <section
        className="relative text-white overflow-hidden"
      >
        {/* Background image */}
        <img
          src="/barbershop.jpg" // 👉 your image in /public
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content wrapper (Contact + Footer) */}
        <div className="relative z-10">
          {/* Contact Section */}
          <section
            id="contact"
            className="py-40 flex items-center justify-center px-4"
          >
            <div className="max-w-3xl text-center">
              <h2 className="text-4xl font-bold mb-4">Επικοινωνήστε μαζί μας</h2>
              <p className="text-lg text-gray-300">
                Ελάτε σε επαφή και ας δημιουργήσουμε κάτι μοναδικό μαζί.
              </p>
            </div>
          </section>

          <hr  />

          {/* Footer */}
          <section
            id="footer"
            className="text-gray-400 py-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo / Brand */}
                <div className="flex items-center gap-3">
                  <img
                    src="/card.png"
                    alt="Dante Barbershop Logo"
                    className="h-10 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                  />
                  <span className="text-white font-semibold text-lg tracking-wide">
                    Dante Barbershop
                  </span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="#home" className="hover:text-cyan-400 transition-colors">Αρχική</a>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">Σχετικά</a>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">Υπηρεσίες</a>
                  <a href="#locations" className="hover:text-cyan-400 transition-colors">Καταστήματα</a>
                  <a href="#contact" className="hover:text-cyan-400 transition-colors">Επικοινωνία</a>
                </div>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/p/Dante-barbershop-100067311980700/?locale=el_GR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-[0_0_10px_rgba(0,255,255,0.6)] transition-all duration-300"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/dante.barbershop/?hl=el"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-[0_0_10px_rgba(0,255,255,0.6)] transition-all duration-300"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-[0_0_10px_rgba(0,255,255,0.6)] transition-all duration-300"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://www.google.com/maps/search/Dante+Barbershop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-[0_0_10px_rgba(0,255,255,0.6)] transition-all duration-300"
                  >
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                </div>
              </div>

              {/* Divider + Copyright */}
              <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} <span className="text-cyan-400">Dante Barbershop</span>. Όλα τα δικαιώματα διατηρούνται.
              </div>
            </div>
          </section>
        </div>
      </section>






    {/* Scroll-to-Top Button */}
    {showScrollTop && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 animate-fadeIn-07 "
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    )}

    </div>
  );
}

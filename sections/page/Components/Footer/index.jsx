import Image from "next/image";
import { Mail, Linkedin, X, MapPin, Code, Github } from "lucide-react";
import footerContent from "../../../data/footer";

export const Footer = ({ lang = 'es' }) => {

  const t = footerContent[lang] || footerContent.es;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
          
          {/* About Section */}
          <div className="w-full lg:w-5/12">
            {/* Header with Icon */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 shadow-lg">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t.cloudExpert}</h3>
                <p className="text-blue-400 text-sm font-medium">Gabriel Contreras</p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed text-sm lg:text-base max-w-lg text-justify sm:text-left">
              {t.description}
            </p>
            
            {/* Skills Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">{t.skills}</h4>
              <div className="flex flex-wrap gap-2">
                {t.skills_list.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-gray-800/80 text-blue-300 text-xs font-medium rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/80 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
                  {t.quickLinks}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></div>
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href={`/${lang}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                      {t.home}
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`/${lang}/blog`}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                      {t.blog}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
                  {t.contact}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></div>
                </h4>
                <ul className="space-y-5">
                  <li className="flex items-start text-gray-300 group">
                    <Mail className="w-5 h-5 sm:w-4 sm:h-4 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                    <a 
                      href={`mailto:${t.email}`} 
                      className="hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                    >
                      {t.email}
                    </a>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 sm:w-4 sm:h-4 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{t.location}</span>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <h5 className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">{t.connect}</h5>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/gabrielcontrerasv3/" 
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-800/80 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all duration-200 group shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://github.com/gacodev" 
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-800/80 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:scale-105 transition-all duration-200 group shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://x.com/gacodev" 
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-800/80 rounded-xl flex items-center justify-center hover:bg-blue-400 hover:scale-105 transition-all duration-200 group shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="x"
                  >
                    <X className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-800/60"></div>

      {/* Bottom Bar */}
      <div className="bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Image
                  src="/bandera.webp"
                  alt={lang === "en" ? "nationality" : "nacionalidad"}
                  width={20}
                  height={20}
                  className="mr-3 opacity-80"
                  style={{ width: "20px", height: "auto" }}
                />
                <span className="text-gray-400 text-sm">
                  {currentYear} Gabriel Contreras. {t.copyright}
                </span>
              </div>
            </div>
            
            {/* Built With */}
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-3 hidden sm:inline">{t.builtWith}</span>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 bg-gray-800/60 text-gray-300 rounded-md text-xs font-medium border border-gray-700/50">Next.js</span>
                <span className="px-2.5 py-1 bg-gray-800/60 text-gray-300 rounded-md text-xs font-medium border border-gray-700/50">Tailwind</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

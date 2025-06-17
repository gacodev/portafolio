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
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* About Section - Takes more space */}
          <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-8">
            {/* Header with Icon */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t.cloudExpert}</h3>
                <p className="text-blue-400 text-sm font-medium">Gabriel Contreras</p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed text-sm lg:text-base max-w-lg">
              {t.description}
            </p>
            
            {/* Skills Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-blue-400 mb-4 uppercase tracking-wider">{t.skills}</h4>
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

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white relative">
                {t.quickLinks}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={`/${lang}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    {t.home}
                  </a>
                </li>
                <li>
                  <a 
                    href={`/${lang}/blog`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm"
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
              <h4 className="text-lg font-semibold mb-6 text-white relative">
                {t.contact}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 rounded-full"></div>
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start text-gray-300 group">
                  <Mail className="w-4 h-4 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                  <a 
                    href={`mailto:${t.email}`} 
                    className="hover:text-blue-400 transition-colors text-sm break-all"
                  >
                    {t.email}
                  </a>
                </li>
                <li className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.location}</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h5 className="text-xs font-semibold text-blue-400 mb-4 uppercase tracking-wider">{t.connect}</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/gabrielcontrerasv3/" 
                  className="w-11 h-11 bg-gray-800/80 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all duration-200 group shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://github.com/gacodev" 
                  className="w-11 h-11 bg-gray-800/80 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:scale-105 transition-all duration-200 group shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://x.com/gacodev" 
                  className="w-11 h-11 bg-gray-800/80 rounded-xl flex items-center justify-center hover:bg-blue-400 hover:scale-105 transition-all duration-200 group shadow-md"
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
                  src="/bandera.png"
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

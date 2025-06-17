import Image from "next/image";
import { RoleChanger } from "../RoleChanger";
import { CalendarLink } from "../CalendarButton";
import profileData from "../../../data/profile";
import SkillCard from "./SkillCard";


export const ProfileContainer = ({ lang }) => {
  const profile = profileData.find((data) => data.lang === lang);

  const handleDownload = (lang) => {
    const fileMap = {
      en: { href: "/docs/cv.pdf", download: "cv.pdf" },
      es: { href: "/docs/hv.pdf", download: "hv.pdf" },
    };

    const { href, download } = fileMap[lang] ?? fileMap['es'];
    const link = document.createElement("a");
    link.href = href;
    link.download = download;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6 p-1" id="profile">
        {/* Left Block */}
        <div className="basis-full md:basis-2/3 grow-0 shrink-0 p-6 lg:p-8 bg-gray-800/80 text-gray-100 rounded-xl shadow border border-white/30 flex flex-col items-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center">{profile.title}</h1>
          <Image
            src="/gabriel.webp"
            priority
            alt={lang === "es" ? "foto de perfil de Gabriel Contreras" : "profile picture of Gabriel Contreras"}
            className="rounded-full mt-4"
            width={100}
            height={100}
          />
          <RoleChanger lang={lang} />
          <hr className="my-4 border-gray-600" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full items-stretch">
            <SkillCard
              title={lang === "es" ? "Habilidades Técnicas" : "Hard Skills"}
              skills={profile.hardSkills}
              lang={lang}
              coreCount={6}
              icon="hard"
            />
            <SkillCard
              title={lang === "es" ? "Habilidades Blandas" : "Soft Skills"}
              skills={profile.softSkills}
              lang={lang}
              coreCount={6}
              icon="soft"
            />
          </div>

          <div className="mt-4">
            <h3 className="flex justify-center text-lg md:text-xl font-semibold">{lang === "es" ? "Redes Sociales" : "Social Media"}</h3>
            <div className="flex space-x-3 justify-center">
              {profile.socialMedia.map(({ href, src, alt, width, height }) => (
                <a key={alt} href={href}>
                  <Image
                    src={src}
                    alt={alt}
                    width={width || 40}
                    height={height || 40}
                    className="rounded-lg"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Block */}
        <div className="basis-full md:basis-1/3 grow-0 shrink-0 p-6 lg:p-8 bg-gray-800/80 text-gray-100 rounded-xl shadow mt-4 md:mt-0 flex flex-col items-center border border-white/30">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center">{profile.cvTitle}</h3>
          <Image
            src="/images/cv.jpg"
            alt={lang === "es" ? "curriculum vitae de Gabriel Contreras" : "Curriculum Vitae of Gabriel Contreras"}
            width={200}
            height={200}
            className="rounded-lg mt-2"
          />
          <button className="mt-4 w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400" onClick={() => handleDownload(lang)}>
            {profile.cvButton}
          </button>

          <div className="mt-4 text-center">
            {profile.contactPhone} <strong>+573126004185</strong>
          </div>
          <div className="text-center">
            {profile.contactEmail}
            <a href="mailto:gabriel.contrerasv3@gmail.com" className="text-blue-500 underline">
              gabriel.contrerasv3@gmail.com
            </a>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg md:text-xl font-semibold">{profile.availableMessage}</h3>
            <CalendarLink message={profile.calendarMessage} />
          </div>

          {/* Certifications Section */}
          <div className="mt-4 text-center">
            <h3 className="text-lg md:text-xl font-semibold">{lang == 'en' ? 'Credentials' : 'Certificaciones'}</h3>
            <ul className="mt-2 space-y-3 sm:space-y-4 w-full">
              <li className="flex items-center space-x-4 p-2 bg-gray-900 bg-opacity-50 rounded-lg shadow-md">
                <img src="/images/Microsoft_logo.svg" alt="Microsoft Certified" className="w-8 h-8" />
                <a href="https://learn.microsoft.com/en-us/users/gacodev/credentials/293c1d62fb1d5d85?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-semibold text-blue-400 hover:underline">Microsoft Certified Administrator Associate</a>
              </li>
              <li className="flex items-center space-x-4 p-2 bg-gray-900 bg-opacity-50 rounded-lg shadow-md">
                <img src="/images/kafka.png" alt="Apache Kafka" className="w-8 h-8" />
                <a href="https://www.credly.com/users/gacodev" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-semibold text-blue-400 hover:underline">Learning Apache Kafka...</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Profile Description */}
      <div className="mt-6 p-6 lg:p-8 bg-gray-800/80 text-gray-100 rounded-xl shadow flex justify-center">
        <p className="text-justify leading-relaxed tracking-wide text-base sm:text-lg">
          {profile.description}
        </p>

      </div>
    </div>
  );
};
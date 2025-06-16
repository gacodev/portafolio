import Image from "next/image";
import { RoleChanger } from "../RoleChanger";
import { CalendarLink } from "../CalendarButton";
import profileData from "../../../data/profile";


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
    <div className="w-full px-4 py-8 md:px-8">
      <div className="flex flex-col md:flex-row justify-between p-1" id="profile">
        {/* Left Block */}
        <div className="md:w-1/2 p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-md border-2 border-white flex flex-col items-center">
          <h1 className="text-lg font-semibold text-center">{profile.title}</h1>
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

          <div className="flex justify-around mt-4 w-full">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold">{lang === "es" ? "Habilidades Técnicas" : "Hard Skills"}</h3>
              <ul className="list-none text-left mt-2">
                {profile.hardSkills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="mx-1 text-green-500">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold">{lang === "es" ? "Habilidades Blandas" : "Soft Skills"}</h3>
              <ul className="list-none text-left mt-2">
                {profile.softSkills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="mx-1 text-green-500">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="flex justify-center text-lg md:text-xl font-semibold">{lang === "es" ? "Redes Sociales" : "Social Media"}</h3>
            <div className="flex space-x-2 justify-center text-md">
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
        <div className="md:w-1/2 p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-md mt-4 md:mt-0 flex flex-col items-center border-2 border-white">
          <h3 className="text-lg font-semibold text-center">{profile.cvTitle}</h3>
          <Image
            src="/images/cv.jpg"
            alt={lang === "es" ? "curriculum vitae de Gabriel Contreras" : "Curriculum Vitae of Gabriel Contreras"}
            width={200}
            height={200}
            className="rounded-lg mt-2"
          />
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handleDownload(lang)}>
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
            <ul className="mt-2 space-y-4 w-full">
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
      <div className="mt-6 p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-md flex justify-center">
        <p className="text-left leading-relaxed tracking-wide text-lg">
          {profile.description}
        </p>

      </div>
    </div>
  );
};
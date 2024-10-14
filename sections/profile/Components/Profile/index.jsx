import Image from "next/image";
import { RoleChanger } from "../RoleChanger";
import { CalendarLink } from "../CalendarButton";

const profileData = [
  {
    lang: "es",
    title: "Ingeniero de Sistemas",
    description: `Ingeniero de Sistemas, SRE, Desarrollador, autodidacta apasionado por mejorar la vida de las personas mediante la tecnología, electrónica y los retos tecnológicos...`,
    hardSkills: [
      "Scrum", "Docker", "Bash", "Typescript", "Azure DevOps", "ReactJS", "SQL", "NodeJS", "PHP Laravel"
    ],
    softSkills: [
      "Solución de Problemas", "Escucha Activa", "Persistencia", "Flexibilidad",
      "Comunicación Asertiva", "Gestión del tiempo", "Gestión de conflictos", "Inteligencia emocional", "Trabajo en equipo"
    ],
    socialMedia: [
      { href: "https://api.whatsapp.com/send?phone=3126004185", src: "/socialmedia/whatsapp.png", alt: "WhatsApp" },
      { href: "https://github.com/gacodev", src: "/socialmedia/github.png", alt: "GitHub" },
      { href: "https://www.linkedin.com/in/gabrielcontrerasv3", src: "/socialmedia/linkedin.webp", alt: "LinkedIn" },
      { href: "mailto:gabriel.contrerasv3@gmail.com", src: "/socialmedia/gmail.png", alt: "Email" }
    ],
    cvTitle: "Curriculum Vitae",
    cvButton: "Descargar",
    contactPhone: "Teléfono:",
    contactEmail: "Correo: ",
    availableMessage: "¡Disponible para nuevos proyectos!",
    calendarMessage: "¿Estás listo para agendar una reunión?",
  },
  {
    lang: "en",
    title: "Systems Engineer",
    description: `Systems Engineer,SRE Developer, self-taught passionate about improving people's lives through technology, electronics, and technological challenges...`,
    hardSkills: [
      "Scrum", "Docker", "Bash", "TypeScript", "Azure DevOps", "ReactJS", "SQL", "NodeJS", "PHP Laravel", "Python"
    ],
    softSkills: [
      "Problem Solving", "Active Listening", "Persistence", "Flexibility",
      "Assertive Communication", "Time Management", "Conflict Management", "Emotional Intelligence", "Teamwork", "Leadership"
    ],
    socialMedia: [
      { href: "https://api.whatsapp.com/send?phone=3126004185", src: "/socialmedia/whatsapp.png", alt: "WhatsApp" },
      { href: "https://github.com/gacodev", src: "/socialmedia/github.png", alt: "GitHub" },
      { href: "https://www.linkedin.com/in/gabrielcontrerasv3", src: "/socialmedia/linkedin.webp", alt: "LinkedIn" },
      { href: "mailto:gabriel.contrerasv3@gmail.com", src: "/socialmedia/gmail.png", alt: "Email" }
    ],
    cvTitle: "Curriculum Vitae",
    cvButton: "Download",
    contactPhone: "Phone:",
    contactEmail: "Email: ",
    availableMessage: "Available for new projects!",
    calendarMessage: "Are you ready to schedule a meeting?",
  },
];

export const ProfileContainer = ({ lang }) => {
  const profile = profileData.find((data) => data.lang === lang);

  const handleDownload = (lang) => {
    const link = document.createElement("a");
    link.href = "/docs/hv.pdf";
    link.download = lang === 'en' ? "cv.pdf": "hv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-1">
        {/* Left Block */}
        <div className="md:w-1/2 p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-md border-2 border-white flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center">{profile.title}</h2>
          <Image
            src="/gabriel.webp"
            alt={lang === "es" ? "foto de perfil de Gabriel Contreras" : "profile picture of Gabriel Contreras"}
            className="rounded-full mt-4"
            width={150}
            height={150}
          />
          <RoleChanger lang={lang} />
          <hr className="my-4 border-gray-600" />

          <div className="flex justify-center w-full mt-4 ml-4 ">
            <div className="text-center mx-2">
              <h3 className="text-lg font-semibold">{lang == 'en' ? 'Hard Skills' : 'Habilidades Tecnicas'}</h3>
              <ul className="list-none text-left">
                {profile.hardSkills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span style={{ margin: '3px', color: 'green' }}>✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mx-3">
              <h3 className="text-lg font-semibold">{lang == 'en' ? 'Soft Skills' : 'Habilidades Blandas'}</h3>
              <ul className="list-none text-left">
                {profile.softSkills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span style={{ margin: '3px', color: 'green' }}>✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="flex justify-center text-lg font-semibold">{lang === "es" ? "Redes Sociales" : "Social Media"}</h3>
            <div className="flex space-x-2 justify-center text-lg">
              {profile.socialMedia.map(({ href, src, alt }) => (
                <a key={alt} href={href}>
                  <Image
                    src={src}
                    alt={alt}
                    width={60}
                    height={60}
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
            width={300}
            height={300}
            className="rounded-lg mt-2"
          />
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleDownload(lang)}>
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
            <h3 className="text-lg font-semibold">{profile.availableMessage}</h3>
            <CalendarLink message={profile.calendarMessage} />
          </div>

          {/* Certifications Section */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold">{lang == 'en' ? 'Crendentials' : 'Certificaciones'}</h3>
            <ul className="list-disc list-inside text-left">
              <li>Cisco CCNA Routing and Switching</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Profile Description */}
      <div className="mt-6 p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-md flex justify-center">
        <p className="text-center">{profile.description}</p>
      </div>
    </>
  );
};

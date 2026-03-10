import Image from "next/image";
import styles from "../../../../styles/Home.module.css";

const technologies = [
  { name: "ReactJS", image: "/tecnologies/react.webp" },
  { name: "Angular", image: "/tecnologies/angular.webp" },
  { name: "Tailwind CSS", image: "/tecnologies/tailwind.svg" },
  { name: "Windows Server", image: "/tecnologies/win.svg" },
  { name: "MongoDB", image: "/tecnologies/mongoDB.webp" },
  { name: "Sequelize", image: "/tecnologies/sequelize.webp" },
  { name: "Prisma ORM", image: "/tecnologies/prisma.webp" },
  { name: "Netlify", image: "/tecnologies/netlify.webp" },
  { name: "Vercel", image: "/tecnologies/vercel.webp" },
  { name: "Azure DevOps", image: "/tecnologies/azure.webp" },
  { name: "TypeScript", image: "/tecnologies/typescript.webp" },
  { name: "Next.js", image: "/tecnologies/nextjs.webp" },
  { name: "TypeORM", image: "/tecnologies/typeorm.webp" },
  { name: "MySQL", image: "/tecnologies/mysql.webp" },
  { name: "PostgreSQL", image: "/tecnologies/postgres.webp" },
  { name: "Laravel", image: "/tecnologies/laravel.webp" },
  { name: "NestJS", image: "/tecnologies/nestjs.webp" },
  { name: "GraphQL", image: "/tecnologies/graph.webp" },
  { name: "GitHub Actions", image: "/tecnologies/gha.webp" },
  { name: "Jest", image: "/tecnologies/jest.avif" },
  { name: "Puppeteer", image: "/tecnologies/puppeter.webp" },
  { name: "Docker", image: "/tecnologies/docker.webp" },
  { name: "Linux", image: "/tecnologies/linux.webp" },
  { name: "Ansible", image: "/tecnologies/ansible.webp" },
  { name: "Serverless Framework", image: "/tecnologies/sls.webp" },
  { name: "Firebase", image: "/tecnologies/firebase.webp" },
  { name: "Node.js", image: "/tecnologies/nodejs.webp" },

];

export const TechList = ({ lang }) => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 bg-gradient-to-r from-blue-900 to-purple-900 w-full">
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white mb-6 sm:mb-8 lg:mb-12">
          {{ en: "Technologies I've Worked With", es: "Tecnologías con las que he trabajado", pt: "Tecnologias com as quais trabalhei" }[lang] || "Technologies I've Worked With"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 w-full">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center p-2 sm:p-3 lg:p-4 bg-white bg-opacity-10 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 w-full"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-contain transition duration-300 ease-in-out group-hover:opacity-80 rounded-xl w-full h-full"
                />
              </div>
              <span className="text-white text-center font-medium group-hover:text-yellow-300 transition duration-300 ease-in-out text-xs sm:text-sm lg:text-base">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
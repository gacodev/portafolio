import Image from "next/image";
import styles from "../../../../styles/Home.module.css";

const technologies = [
  { name: "ReactJS", image: "/tecnologies/react.png" },
  { name: "Angular", image: "/tecnologies/angular.png" },
  { name: "Tailwind CSS", image: "/tecnologies/tailwind.svg" },
  { name: "Windows Server", image: "/tecnologies/win.svg" },
  { name: "MongoDB", image: "/tecnologies/mongoDB.jpg" },
  { name: "Sequelize", image: "/tecnologies/sequelize.png" },
  { name: "Prisma ORM", image: "/tecnologies/prisma.webp" },
  { name: "Netlify", image: "/tecnologies/netlify.png" },
  { name: "Vercel", image: "/tecnologies/vercel.jpg" },
  { name: "Azure DevOps", image: "/tecnologies/azure.webp" },
  { name: "TypeScript", image: "/tecnologies/typescript.png" },
  { name: "Next.js", image: "/tecnologies/nextjs.jpeg" },
  { name: "TypeORM", image: "/tecnologies/typeorm.jpeg" },
  { name: "MySQL", image: "/tecnologies/mysql.jpeg" },
  { name: "PostgreSQL", image: "/tecnologies/postgres.png" },
  { name: "Laravel", image: "/tecnologies/laravel.jpg" },
  { name: "NestJS", image: "/tecnologies/nestjs.png" },
  { name: "GraphQL", image: "/tecnologies/graph.png" },
  { name: "GitHub Actions", image: "/tecnologies/gha.webp" },
  { name: "Jest", image: "/tecnologies/jest.avif" },
  { name: "Puppeteer", image: "/tecnologies/puppeter.png" },
  { name: "Docker", image: "/tecnologies/docker.webp" },
  { name: "Linux", image: "/tecnologies/linux.png" },
  { name: "Ansible", image: "/tecnologies/ansible.png" },
  { name: "Serverless Framework", image: "/tecnologies/sls.png" },
  { name: "Firebase", image: "/tecnologies/firebase.png" },
  { name: "Node.js", image: "/tecnologies/nodejs.png" },

];

export const TechList = ({ lang }) => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          {lang === "en" ? "Technologies I've Worked With" : "Tecnologías con las que he trabajado"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition duration-300 ease-in-out group-hover:opacity-80"
                />
              </div>
              <span className="text-white text-center font-medium group-hover:text-yellow-300 transition duration-300 ease-in-out">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
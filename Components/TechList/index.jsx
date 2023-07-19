import Image from "next/image";
import styles from "../../styles/Home.module.css";

export const TechList = () => {
  return (
    <div>
      <div className={styles.cloudFirstSection}>
        <h2 className={styles.titles}>He trabajado Con </h2>
      </div>
      <div className={styles.tecnologies}>
        <ul className={styles.lists}>
          <div>
            <li>ReactJS </li>
            <Image
              src="/tecnologies/react.png"
              alt="react"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>tailwind Css</li>
            <Image
              src="/tecnologies/tailwind.svg"
              alt="tailwind"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>NodeJS </li>
            <Image
              src="/tecnologies/nodejs.png"
              alt="nodejs"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>MongoDB </li>
            <Image
              src="/tecnologies/mongoDB.jpg"
              alt="mongodb"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>Sequelize</li>
            <Image
              src="/tecnologies/sequelize.png"
              alt="sequelize"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>Prisma ORM</li>
            <Image
              src="/tecnologies/prisma.webp"
              alt="prisma Orm"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>Netlify</li>
            <Image
              src="/tecnologies/netlify.png"
              alt="netlify"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>Vercel</li>
            <Image
              src="/tecnologies/vercel.jpg"
              alt="Vercel"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>Typescript</li>
            <Image
              src="/tecnologies/typescript.png"
              alt="Typescript"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>Next js</li>
            <Image
              src="/tecnologies/nextjs.jpeg"
              alt="nextjs"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>TypeOrm</li>
            <Image
              src="/tecnologies/typeorm.jpeg"
              alt="typeorm"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>MySQL</li>
            <Image
              src="/tecnologies/mysql.jpeg"
              alt="mysql"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>PostgreSQL</li>
            <Image
              src="/tecnologies/postgres.png"
              alt="postgreSQL"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>Laravel </li>
            <Image
              src="/tecnologies/laravel.jpg"
              alt="laravel"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>NestJS</li>
            <Image
              src="/tecnologies/nestjs.png"
              alt="nestjs"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>Graphql</li>
            <Image
              src="/tecnologies/graph.png"
              alt="graphql"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>Github Actions</li>
            <Image
              src="/tecnologies/gha.webp"
              alt="github actions"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>Jest</li>
            <Image
              src="/tecnologies/jest.avif"
              alt="jest"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>puppeter</li>
            <Image
              src="/tecnologies/puppeter.png"
              alt="puppeter"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>docker</li>
            <Image
              src="/tecnologies/docker.png"
              alt="docker"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>Linux</li>
            <Image
              src="/tecnologies/linux.png"
              alt="linux"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>Ansible</li>
            <Image
              src="/tecnologies/ansible.png"
              alt="ansible"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>

          <div>
            <li>Windows Server</li>
            <Image
              src="/tecnologies/win.svg"
              alt="windows"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
          <div>
            <li>Azure Devops</li>
            <Image
              src="/tecnologies/azure.webp"
              alt="azure"
              width={100}
              height={100}
              className={styles.images}
            />
          </div>
        </ul>
        <hr></hr>
      </div>
    </div>
  );
};

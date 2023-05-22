import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React, { forwardRef } from "react";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/hv.pdf";
    link.download = "hv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <Link href="/">
            <div className={styles.langs}>Español</div>
          </Link>
          <Link href="/english">
            <div className={styles.langs}>English</div>
          </Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.profileContent}>
          <div className={styles.profile}>
            <div className={styles.card}>
              <p>Ingeniero de Sistemas</p>
              <Image
                src="/gabriel.webp"
                alt="profile picture of Gabriel Contreras"
                className={styles.profile}
                width={150}
                height={150}
              />
              <p>
                Desarrollador <br></br> Backend
              </p>
              <hr></hr>
              <div className={styles.skills}>
                <h2>Hard Skills</h2>
                <ul className={styles.skillslist}>
                  <li>Scrum</li>
                  <li>Docker</li>
                  <li>Vagrant</li>
                  <li>Typescript</li>
                  <li>AzureDevops</li>
                  <li>ReactJS</li>
                  <li>SQL</li>
                  <li>NodeJS</li>
                </ul>
              </div>

              <div className={styles.skills}>
                <h2>Soft Skills</h2>
                <ul className={styles.skillslist}>
                  <li>Solucion de Problemas</li>
                  <li>Escucha Activa</li>
                  <li>Persistencia</li>
                  <li>Flexibilidad</li>
                  <li>Comunicacion Asertiva</li>
                  <li>Gestion del tiempo</li>
                  <li>Gestion de conflictos</li>
                  <li>Inteligencia emocional</li>
                </ul>
              </div>

              <div>
                <h1>Redes Sociales</h1>
                <div className={styles.social}>
                  <div>
                    <a href="https://api.whatsapp.com/send?phone=3123702296">
                      <Image
                        src="/socialmedia/whatsapp.png"
                        alt="whatsapp"
                        width={60}
                        height={60}
                        className={styles.images}
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/gabrielcontrerasv3">
                      <Image
                        src="/socialmedia/linkedin.webp"
                        alt="Linkedin"
                        width={60}
                        height={60}
                        className={styles.images}
                      />
                    </a>
                  </div>
                  <a href="mailto:gabriel.contrerasv3@gmail.com">
                    <div>
                      <Image
                        src="/socialmedia/gmail.png"
                        alt="email"
                        width={60}
                        height={60}
                        className={styles.images}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.cvcard} mobile-width`}>
              <h3>Curriculum vitae</h3>
              <Image
                src="/images/cv.jpg"
                alt="profile picture of Gabriel Contreras"
                className={styles.profile}
                width={150}
                height={150}
              />

              <p>
                <button onClick={handleDownload}>Descargar</button>
              </p>
              <hr></hr>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Desarrollador Backend, con un amplio conocimiento en construccion
              de aplicaciones del lado del servidor utilizando Node JS/NestJS o
              PHP/Laravel, tengo conocimiento y experiencia trabajando con
              ReactJS, base de datos SQL y No SQL para generar API con el fin
              consumirse como servicios REST y/o GRAPHQL entre otras
              habilidades...
            </p>
          </div>
          <div className={styles.tecnologies}>
            <h1 className={styles.titles}>He trabajado con</h1>
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
            <div>
              <p className={styles.techparagraph}>
                Me apasiona trabajar con herramientas como Docker, Vagrant y
                Ansible, ya que me permiten ser más eficiente y productivo tanto
                en la administración de servidores como en el desarrollo de
                software. Actualmente estoy aprendiendo Springboot con el
                objetivo de ampliar mis conocimientos y aplicar patrones de
                diseño de software en diferentes entornos.
              </p>
            </div>
          </div>

          <div className={styles.projects}>
            <div className={styles.experience}>
              <h1 className={styles.titles}>Mi Experiencia</h1>
            </div>
            <div className={styles.experienceCard}>
              <a href="https://www.instagram.com/mideberesmiderecho/?hl=es-la">
                <h2>Mi deber es mi derecho</h2>
                <Image
                  src="/projects/mideber.png"
                  alt="gabriel profiel"
                  width={150}
                  height={150}
                  className={styles.images}
                />
                <p>
                  FullStack <br></br> Developer
                </p>
                <ul>
                  <li>MySQL</li>
                  <li>PHP</li>
                  <li>ReactJS</li>
                  <li>Styled Components</li>
                  <li>Axios</li>
                  <li>MongoDB</li>
                </ul>
                <hr></hr>
              </a>
            </div>

            <div className={styles.experienceCard}>
              <a href="https://www.comfama.com">
                <h2>Aula digital Comfama</h2>
                <Image
                  src="/projects/comfama.png"
                  alt="gabriel profiel"
                  width={150}
                  height={150}
                  className={styles.images}
                />
                <p>
                  Backend <br></br> Developer
                </p>
                <ul>
                  <li>MySQL</li>
                  <li>PHP</li>
                  <li>Moodle</li>
                  <li>Docker</li>
                  <li>AzureDevops</li>
                  <li>JavaScript</li>
                </ul>
                <hr></hr>
              </a>
            </div>

            <div className={styles.experienceCard}>
              <a href="https://www.emavi.edu.co/interescuelas2022">
                <h2>Interescuelas 2022 FFMM</h2>
                <Image
                  src="/projects/interescuelas.png"
                  alt="gabriel profiel"
                  width={150}
                  height={150}
                  className={styles.images}
                />
                <p>
                  FullStack <br></br> Developer
                </p>
                <ul>
                  <li>MySQL</li>
                  <li>Laravel</li>
                  <li>Psysh</li>
                  <li>Styled Components</li>
                  <li>ReactJS - INERTIA</li>
                  <li>MongoDB</li>
                </ul>
                <hr></hr>
              </a>
            </div>
          </div>
          <div className={styles.ideas}>
            <h1 className={styles.titles}>¿Quién soy?</h1>
            <p>
              Soy un <strong> Ingeniero </strong> analítico y flexible que
              siempre busca mejorar, crecer y ayudar a mi equipo a alcanzar sus
              metas. Me comprometo con los proyectos en los que trabajo, soy
              perseverante y siempre trato de mantenerme actualizado. También
              soy alguien que está dispuesto a compartir su conocimiento y
              experiencia para hacer la vida de los demás más sencilla.
            </p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Orgullosamente</p>
        <Image
          src="/bandera.png"
          alt="nacionalidad"
          width={50}
          height={50}
          className={styles.images}
        />
      </footer>
    </div>
  );
}

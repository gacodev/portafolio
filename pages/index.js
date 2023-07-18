import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";

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
            <div className={styles.profileCard}>
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
                  <li>PHP Laravel</li>
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
              <div>
                <p> Telefono</p>
                <h1> +573126004185</h1>
              </div>
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
        </div>

        <div className={styles.cloud}>
          <h2 className={styles.titles}>Experiencia en Nube</h2>
          <div className={styles.providers}>
            <div className={styles.provider}>
              <h2>Azure Cloud</h2>
              <Image
                src="/images/azure.svg"
                alt="Azure Cloud"
                className={styles.profile}
                width={100}
                height={100}
              />

              <ul>
                <li>SQL Databases</li>
                <li>Azure Active Directory</li>
                <li>Azure IAM</li>
                <li>Azure Policies</li>
                <li>Web Apps</li>
                <li>API Management</li>
                <li>Functions</li>
                <li>Backups</li>
                <li>Cost Management</li>
                <li>Virtual Machines</li>
                <li>Azure Blob Storage</li>
                <li>Key Vault</li>
                <li>Azure DevOps</li>
              </ul>
            </div>
            <div className={styles.provider}>
              <h2>Amazon Web Services</h2>
              <Image
                src="/images/aws.svg"
                alt="AWS Cloud"
                className={styles.profile}
                width={100}
                height={100}
              />

              <ul>
                <li>EC2</li>
                <li>S3</li>
                <li>Route 53</li>
                <li>CloudFront</li>
                <li>AWS lambdas</li>
                <li>CloudWatch</li>
                <li>CloudFormation</li>
              </ul>
            </div>
            <div className={styles.provider}>
              <h2>Google Cloud</h2>
              <Image
                src="/images/gcp.svg"
                alt="Google Cloud"
                className={styles.profile}
                width={100}
                height={100}
              />

              <ul>
                <li>Compute Engine</li>
                <li>Cloud Storage</li>
                <li>Cloud Functions</li>
                <li>Cloud SQL</li>
                <li>Cloud DNS</li>
                <li>Cloud CDN</li>
                <li>Cloud Build</li>
                <li>Cloud Source Repositories</li>
                <li>Cloud IAM</li>
                <li>Cloud Deployment Manager</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.techparagraph}>
          <p>
            Me apasiona trabajar con herramientas como Docker, Vagrant y
            Ansible, ya que me permiten ser más eficiente y productivo tanto en
            la administración de servidores como en el desarrollo de software.
            Actualmente estoy aprendiendo Springboot con el objetivo de ampliar
            mis conocimientos y aplicar patrones de diseño de software en
            diferentes entornos.
          </p>
        </div>

        <div className={styles.projects}>
          <div className={styles.projectsFirstSection}>
            <h1 className={styles.titles}>Proyectos de software</h1>
          </div>
          <div className={styles.projectsSecondSection}>
            <div className={styles.experienceCard}>
              <a href="https://www.instagram.com/mideberesmiderecho/?hl=es-la">
                <h1 className={styles.title}>Mi deber es mi derecho</h1>
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
                <ul className={styles.stack}>
                  <li>MySQL</li>
                  <li>PHP</li>
                  <li>ReactJS</li>
                  <li>Styled Components</li>
                  <li>Axios</li>
                  <li>MongoDB</li>
                </ul>
              </a>
            </div>

            <div className={styles.experienceCard}>
              <a href="https://www.comfama.com">
                <h1 className={styles.title}>Aula digital comfama</h1>
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
                <ul className={styles.stack}>
                  <li>MySQL</li>
                  <li>PHP</li>
                  <li>Moodle</li>
                  <li>Docker</li>
                  <li>AzureDevops</li>
                  <li>JavaScript</li>
                </ul>
              </a>
            </div>

            <div className={styles.experienceCard}>
              <a href="https://www.emavi.edu.co/interescuelas2022">
                <h1 className={styles.title}>Interescuelas 2022 FFMM</h1>
                <Image
                  src="/projects/interescuelas.png"
                  alt="gabriel profile"
                  width={150}
                  height={150}
                  className={styles.images}
                />
                <p>
                  FullStack <br></br> Developer
                </p>
                <ul className={styles.stack}>
                  <li>MySQL</li>
                  <li>Laravel</li>
                  <li>Psysh</li>
                  <li>Styled Components</li>
                  <li>ReactJS - INERTIA</li>
                  <li>MongoDB</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Orgullosamente</p>
        <div>
          <Image
            src="/bandera.png"
            alt="nacionalidad"
            width={50}
            height={50}
            className={styles.images}
          />
        </div>
      </footer>
    </div>
  );
}

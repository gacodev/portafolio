import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <Link href="/">
            <div className={styles.langs}>Spanish</div>
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
              <p>Systems Engineer</p>
              <Image
                src="/gabriel.webp"
                alt="profile picture of Gabriel Contreras"
                className={styles.profile}
                width={150}
                height={150}
              />
              <p>
                Backend <br></br> Developer
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
                  <li>Problem Solving</li>
                  <li>Active Listening</li>
                  <li>Persistence</li>
                  <li>Flexibility</li>
                  <li>Assertive Communication</li>
                  <li>Time Management</li>
                  <li>Conflict Resolution</li>
                  <li>Emotional Intelligence</li>
                  <li>Teamwork</li>
                </ul>
              </div>

              <div>
                <h1>Social Media</h1>
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
            <div className={styles.cvcard}>
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
              Backend Developer, with extensive knowledge in building
              server-side applications using Node JS/NestJS or PHP/Laravel, I
              have knowledge and experience working with ReactJS, SQL and No SQL
              databases to generate API to be consumed as REST and/or GRAPHQL
              services among other skills...
            </p>
          </div>

          <div className={styles.tecnologies}>
            <h1 className={styles.titles}>I have worked with</h1>
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
                I am passionate about using tools such as Docker, Vagrant, and
                Ansible in my work because they make my work more efficient and
                productive, both in terms of server administration and software
                development. I am currently learning Springboot in order to
                expand my knowledge and apply software design patterns in
                different environments. I am an analytical and flexible
                professional who is always looking to improve, grow and help my
                team achieve their goals.
              </p>
            </div>
          </div>

          <div className={styles.projects}>
            <div className={styles.experience}>
              <h1 className={styles.titles}>Professional Experience</h1>
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
            <h1 className={styles.titles}>¿Who I am?</h1>
            <p>
              {" "}
              I am Software Engineer dedicated to the projects I work on,
              persistent and always strive to stay up-to-date. I am also someone
              who is always willing to share their knowledge and experience to
              make the lives of others simpler.
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

import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { CloudProviderList } from "../../Components/CloudProviderList";
import { ProjectList } from "../../Components/ProjectList";
import { TechList } from "../../Components/TechList";
import { RoleChanger } from "../../Components/RoleChanger";

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
      <Head>
        <title>Backend Developer</title>
        <meta name="description" content="Portfolio" />
      </Head>
      <div className={styles.header}>
        <div className={styles.menu}>
          <Link href="/">
            <div className={styles.langs}>Spanish</div>
          </Link>
          <Link href="/en">
            <div className={styles.langs}>English</div>
          </Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.profileContent}>
          <div className={styles.profile}>
            <div className={styles.profileCard}>
              <p>Systems Engineer</p>
              <Image
                src="/gabriel.webp"
                alt="profile picture of Gabriel Contreras"
                className={styles.profile}
                width={150}
                height={150}
              />
              <RoleChanger lang="en" />
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
                  <li>Conflict Management</li>
                  <li>Emotional Intelligence</li>
                  <li>Teamwork</li>
                </ul>
              </div>

              <div>
                <h1>Social Media</h1>
                <div className={styles.social}>
                  <div>
                    <a href="https://api.whatsapp.com/send?phone=3126004185">
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
                    <a href="https://github.com/gabrielcontrerasv">
                      <Image
                        src="/socialmedia/github.png"
                        alt="github"
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
                width={120}
                height={120}
              />

              <p>
                <button className={styles.actions} onClick={handleDownload}>
                  Download
                </button>
              </p>
              <hr></hr>

              <div>
                <label htmlFor="phone">Teléfono:</label>
                <strong id="phone">+573126004185</strong>
              </div>

              <div>
                <label htmlFor="email">Correo:</label>
                <a id="email" href="mailto:gabriel.contrerasv3@gmail.com">
                  gabrielcontrerasv3@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Backend Developer, with extensive knowledge in server-side
              application development using Node.js/NestJS or PHP/Laravel. I
              have knowledge and experience working with ReactJS, SQL and NoSQL
              databases to generate APIs that can be consumed as REST and/or
              GraphQL services, among other skills.
            </p>
          </div>
        </div>
        <TechList lang={"en"} />

        <CloudProviderList lang={"en"} />
        <div className={styles.techparagraph}>
          <p>
            I prefer to use cutting-edge tools in server administration and
            software development, such as Docker, Vagrant, and Ansible. These
            tools have allowed me to optimize my efficiency and productivity in
            previous projects and avoid repetitive tasks. I tend to automate
            provisioning tasks to be prepared in hostile situations. My
            experience with these technologies demonstrates my ability to
            implement fast and reliable solutions.
          </p>
        </div>

        <ProjectList lang={"en"} />
      </div>

      <footer className={styles.footer}>
        <p>Proudly</p>
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

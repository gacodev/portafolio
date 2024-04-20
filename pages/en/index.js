import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { CloudProviderList } from "../../Components/CloudProviderList";
import { ProjectList } from "../../Components/ProjectList";
import { TechList } from "../../Components/TechList";
import { RoleChanger } from "../../Components/RoleChanger";
import { Footer } from "../../Components/Footer";
import { MigrationComponent } from "../../Components/Migrations";

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
            <div className={styles.cvcard}>
              <h3>Curriculum vitae</h3>
              <Image
                src="/images/cv.jpg"
                alt="profile picture of Gabriel Contreras"
                className={styles.cvImage}
                width={350}
                height={350}
              />

              <p>
                <button className={styles.actions} onClick={handleDownload}>
                  Download
                </button>
              </p>
              <div>
                Teléfono:<strong id="phone">+573126004185</strong>
              </div>

              <div>
                Correo:
                <a id="email" href="mailto:gabriel.contrerasv3@gmail.com">
                  gabriel.contrerasv3@gmail.com
                </a>
              </div>
              <div className="call-to-action">
                <h3 className={`${styles.titles} ${styles.separator}`}>
                  I am available for new projects!
                </h3>
                <p>Contact me now to get started!</p>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              DevOps Engineer, Developer, passionate about technology and
              technological challenges with extensive knowledge and experience
              in building server-side applications with various architectures
              and triggers (microservices, serverless, monoliths, etc.). I have
              used Node.js/NestJS or PHP/Laravel or Python in complex projects.
              My solid background in object-oriented programming and
              understanding of business rules allow me to navigate through
              multiple tools or languages. I have knowledge and experience
              working with ReactJS, SQL and NoSQL databases to generate APIs for
              consumption as REST and/or GraphQL services, among other skills.
            </p>
          </div>
        </div>
        <TechList lang={"en"} />

        <CloudProviderList lang={"en"} />

        <ProjectList lang={"en"} />
        <MigrationComponent lang={"en"} />
      </div>

      <Footer lang="en" />
    </div>
  );
}

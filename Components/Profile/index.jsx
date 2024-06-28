import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { RoleChanger } from "../RoleChanger";
import { CalendarLink } from "../CalendarButton";

export const ProfileContainer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/hv.pdf";
    link.download = "hv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
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
          <RoleChanger lang="es" />
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
              <li>Trabajo en equipo</li>
            </ul>
          </div>

          <div className="socialMedia">
            <h1>Redes Sociales</h1>
            <div className={styles.social}>
              <a href="https://api.whatsapp.com/send?phone=3126004185">
                <Image
                  src="/socialmedia/whatsapp.png"
                  alt="whatsapp"
                  width={60}
                  height={60}
                  className={styles.images}
                />
              </a>

              <a href="https://github.com/gacodev">
                <Image
                  src="/socialmedia/github.png"
                  alt="github"
                  width={60}
                  height={60}
                  className={styles.images}
                />
              </a>

              <a href="https://www.linkedin.com/in/gabrielcontrerasv3">
                <Image
                  src="/socialmedia/linkedin.webp"
                  alt="Linkedin"
                  width={60}
                  height={60}
                  className={styles.images}
                />
              </a>

              <a href="mailto:gabriel.contrerasv3@gmail.com">
                <Image
                  src="/socialmedia/gmail.png"
                  alt="email"
                  width={60}
                  height={60}
                  className={styles.images}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.cvcard} mobile-width`}>
          <h3>Curriculum vitae</h3>
          <Image
            src="/images/cv.jpg"
            alt="profile picture of Gabriel Contreras"
            width={350}
            height={350}
          />
          <p>
            <button className={styles.actions} onClick={handleDownload}>
              Descargar
            </button>
          </p>
          <div>
            Teléfono:<strong name="phone">+573126004185</strong>
          </div>

          <div>
            Correo:
            <a
              id="email"
              name="email"
              href="mailto:gabriel.contrerasv3@gmail.com"
            >
              gabriel.contrerasv3@gmail.com
            </a>
          </div>
          <div className="call-to-action">
            <h3 className={`${styles.titles} ${styles.separator}`}>
              ¡Disponible para nuevos proyectos!
            </h3>
           <CalendarLink message="¿Estas listo para agendar una reunion?"/>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          Ingeniero Devops, Desarrollador, apasionado por la tecnologia y los
          retos tecnologicos con un amplio conocimiento y experiencia en
          construccion de aplicaciones del lado del servidor con diversas
          arquitecturas y/o desencadenadores(microservicios, serverless,
          monolitos etc...) he utilizando Node JS/NestJS o PHP/Laravel o Python
          en proyectos complejos, mi solida formacion en programacion orientada
          a objetos y entendimiento de las reglas de negocio me permiten
          desplazarme a traves de multiples herramientas o lenguajes. Tengo
          conocimiento y experiencia trabajando con ReactJS, base de datos SQL y
          No SQL para generar API con el fin consumirse como servicios REST y/o
          GRAPHQL entre otras habilidades...
        </p>
      </div>
    </div>
  );
};

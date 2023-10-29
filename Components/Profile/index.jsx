import Image from "next/image";
import styles from "../../styles/Home.module.css";

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
              <li>Trabajo en equipo</li>
            </ul>
          </div>

          <div>
            <h1>Redes Sociales</h1>
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
              Descargar
            </button>
          </p>

          <hr></hr>
          <div>
            <label for="phone">Teléfono:</label>
            <strong id="phone">+573126004185</strong>
          </div>

          <div>
            <label for="email">Correo:</label>
            <a id="email" href="mailto:gabriel.contrerasv3@gmail.com">
              gabrielcontrerasv3@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          Desarrollador Backend, con un amplio conocimiento en construccion de
          aplicaciones del lado del servidor utilizando Node JS/NestJS o
          PHP/Laravel, tengo conocimiento y experiencia trabajando con ReactJS,
          base de datos SQL y No SQL para generar API con el fin consumirse como
          servicios REST y/o GRAPHQL entre otras habilidades...
        </p>
      </div>
    </div>
  );
};

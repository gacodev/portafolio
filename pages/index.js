import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <a href="/spanish">
            <div className={styles.langs}>Espanol</div>
          </a>
          <a href="/english">
            <div className={styles.langs}>English</div>
          </a>
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
          </div>
          <div className={styles.description}>
            <p>
              Desarrollador Backend, con un amplio conocimiento en construccion
              de aplicaciones del lado del servidor utilizando Node JS/NestJS o
              PHP/Laravel, tengo conocimiento y experiencia trabajando con
              ReactJS, base de datos SQL y No SQL para generar API con el fin
              consumirse como servicios REST y/o GRAPHQL entre otras habilidades...
            </p>
          </div>
        </div>
        <div className={styles.tecnologies}>
          <h1>Tecnologias</h1>
          <ul className={styles.lists}>
            <div>
              <li>ReactJS </li>
              <Image
                src="/tecnologies/react.png"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>

            <div>
              <li>NodeJS </li>
              <Image
                src="/tecnologies/nodejs.png"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>
            <div>
              <li>MongoDB </li>
              <Image
                src="/tecnologies/mongoDB.jpg"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>
            <div>
              <li>Sequelize</li>
              <Image
                src="/tecnologies/sequelize.png"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>

            <div>
              <li>TypeOrm</li>
              <Image
                src="/tecnologies/typeorm.jpeg"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>

            <div>
              <li>MySQL</li>
              <Image
                src="/tecnologies/mysql.jpeg"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>

            <div>
              <li>PostgreSQL</li>
              <Image
                src="/tecnologies/postgres.png"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>

            <div>
              <li>NestJS</li>
              <Image
                src="/tecnologies/nestjs.png"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>

            <div>
              <li>Linux</li>
              <Image
                src="/tecnologies/linux.png"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>

            <div>
              <li>Windows Server</li>
              <Image
                src="/tecnologies/win.svg"
                alt="nacionalidad"
                width={100}
                height={100}
                className={styles.images}
              />
            </div>
          </ul>
          <hr></hr>
          <p className={styles.techparagraph}>
            me gusta trabajar utilizando Docker, Vagrant y Ansible por la
            practiciadad y porque me ayudan a ser mas productivo tanto en
            administracion de Servidores como en desarrollo de Software,
            actualmente me encuentro aprendiendo <strong> Springboot </strong>
            con el fin de aplicar mi conocimiento en patrones de diseño de
            software en diferentes ambientes al de Typescript soy
            Apasionado,Flexible y analista de mi propio trabajo y el de mis
            compañeros, siempre con el animo de mejorar,crecer y/o ayudar a mi
            grupo de trabajo a lograr las metas propuestas, siempre tendras en
            mi un profesional comprometido con los proyectos, perseverante y
            actualizado alguien quien comparte lo que aprende y con la idea de
            ayudar a las personas con lo poco que se y hacer su vida algo mas sencilla.
          </p>
        </div>

        <div className={styles.projects}>
          <div className={styles.experience}>
            <h1>Mi Experiencia</h1>
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
                Backend <br></br> Developer
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
              <h2>Interescuelas 2022</h2>
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

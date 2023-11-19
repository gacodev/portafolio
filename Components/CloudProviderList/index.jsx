import Image from "next/image";
import styles from "../../styles/Home.module.css";

export const CloudProviderList = ({ lang }) => {
  return (
    <div className={styles.cloud}>
      <h2 className={styles.titles}>
        {" "}
        {lang === "en" ? "Cloud Experience" : "Experiencia en nube"}{" "}
      </h2>
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
            <li>API Management</li>
            <li>Functions</li>
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
            <li>IAM</li>
            <li>SQL Aurora</li>
            <li>Route 53</li>
            <li>CloudFront</li>
            <li>AWS lambdas</li>
            <li>CloudWatch</li>
            <li>CloudFormation</li>
            <li>AWS Lightsail</li>
            <li>SNS</li>
            <li>SQS</li>
            <li>ECS</li>
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
      <hr />
      <div className={styles.techparagraph}>
        {lang === "es" ? (
          <p>
            Mi preferencia por las herramientas avanzadas en la gestión de
            servidores y el desarrollo de software refleja mi enfoque en la
            eficiencia y la productividad. Me he especializado en la adopción de
            tecnologías de vanguardia en la nube, como Docker, Vagrant, Ansible,
            Terraform y Github actions para optimizar procesos y reducir tareas
            repetitivas, lo que es crucial en situaciones desafiantes
          </p>
        ) : (
          <p>
            My preference for advanced tools in server management and software
            development reflects my focus on efficiency and productivity. I have
            specialized in adopting cutting-edge cloud technologies like Docker,
            Vagrant, Ansible, Terraform and Github actions to streamline
            processes and reduce repetitive tasks, which is crucial in
            challenging situations.
          </p>
        )}
      </div>
    </div>
  );
};

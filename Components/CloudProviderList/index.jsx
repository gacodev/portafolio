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
            <li>CloudFormation</li>
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
    </div>
  );
};

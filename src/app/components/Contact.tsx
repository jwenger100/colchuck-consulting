import styles from "../page.module.css";
import { Title } from "@mantine/core";

export function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <Title order={2}>Contact</Title>
    </div>
  );
}

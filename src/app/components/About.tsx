import styles from "../page.module.css";
import { Title, Text, Image, Grid } from "@mantine/core";

export function About() {
  return (
    <>
      <div className={styles.aboutContainer} id="about">
        <div className={styles.aboutLeftColumn}>
          <Image
            src="./images/founders.png"
            height="auto"
            width="100%"
            withPlaceholder={true}
            alt="Colchuck Consulting Founders"
          />
        </div>
        <div className={styles.aboutRightColumn}>
          <Title order={2} className={styles.aboutTitle}>
            About Us.
          </Title>
          <div style={{ width: "50%", display: "inline-block" }}>
            <Text fz="md">App development made simple.</Text>
            <Text fz="md">
              With clear timelines, and no hidden fees, we deliver user friendly
              and cost effective custom web and mobile applications, to suit
              your business and industry needs.
            </Text>
            <Text fz="md">
              Focused on excellence for our clients, we are well established,
              with a reputation for great service and a high-quality product.
            </Text>
          </div>
          <div style={{ width: "50%", display: "inline-block" }}>
            <Text fz="md">
              Our company was envisioned during a trip to Colchuck Lake, in the
              Enchantments of Washington State in 2018. We were inspired by the
              beauty of the lake, and the surrounding mountains. We wanted to
              bring that same beauty to our software. Founded by two industry
              expoerts, with a combined 40 years of experience, ready to make
              your dreams a reality.
            </Text>
            <Text fz="md">
              We are a team of experienced developers and designers, who are
              passionate about building beautiful, easy to use software.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

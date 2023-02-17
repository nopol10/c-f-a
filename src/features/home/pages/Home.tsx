import { LinkButton } from "../../common/components/LinkButton";
import { CLIENTS } from "../constants/clients";
import { Menu } from "../containers/menu/Menu";
import styles from "./Home.module.scss";

function ClientLogos() {
  return (
    <div className={styles.clientLogos}>
      {CLIENTS.map(({ name, logo }) => {
        return (
          <div>
            <img src={logo} alt={name} key={name} />
          </div>
        );
      })}
    </div>
  );
}

function Body() {
  return (
    <div className={styles.body}>
      <picture>
        <source media="(min-width:1440px)" srcSet="/image-hero-desktop.png" />
        <img
          src="/image-hero-mobile.png"
          alt="hero"
          className={styles.heroImage}
        />
      </picture>
      <section>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <LinkButton href={"#"} className={styles.learnMoreButton}>
          Learn more
        </LinkButton>
        <ClientLogos />
      </section>
    </div>
  );
}

export function Home() {
  return (
    <div className={styles.home}>
      <header>
        <Menu></Menu>
      </header>
      <main>
        <Body />
      </main>
    </div>
  );
}
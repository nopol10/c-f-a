import { LinkButton } from "../../common/components/LinkButton";
import { getImageUrl } from "../../common/utils/get-image-url";
import { CLIENTS } from "../constants/clients";
import { Menu } from "../containers/menu/Menu";
import { MenuItems } from "../containers/menu/MenuItems";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <div className={styles.home}>
      <Menu
        rightItems={
          <>
            <LinkButton href="#" variant="link">
              Login
            </LinkButton>
            <LinkButton
              href="#"
              variant="outline"
              className={styles.registerButton}
            >
              Register
            </LinkButton>
          </>
        }
      >
        <MenuItems />
      </Menu>
      <main>
        <Body />
      </main>
    </div>
  );
}

function Body() {
  return (
    <div className={styles.body}>
      <picture>
        <source
          media="(min-width:1440px)"
          srcSet={getImageUrl("/image-hero-desktop.png")}
        />
        <img
          src={getImageUrl("/image-hero-mobile.png")}
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

function ClientLogos() {
  return (
    <div aria-label="client logos" className={styles.clientLogos}>
      {CLIENTS.map(({ name, logo }) => {
        return (
          <div key={name}>
            <img src={logo} alt={name} />
          </div>
        );
      })}
    </div>
  );
}

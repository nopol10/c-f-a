import { useCallback, useState } from "react";
import { Drawer } from "../../../common/components/Drawer";
import { HamburgerMenuButton } from "../../components/HamburgerMenuButton";
import styles from "./Menu.module.scss";

export type MenuProps = React.PropsWithChildren<{}>;

export function Menu({ children }: MenuProps) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const handleOpenMobileMenu = useCallback(() => {
    setMobileMenuOpened(true);
  }, []);
  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpened(false);
  }, []);

  return (
    <div className={styles.menu}>
      <img src={"/logo.svg"} alt="snap logo" />

      <HamburgerMenuButton
        onClick={handleOpenMobileMenu}
        className={styles.mobileMenuIcon}
      ></HamburgerMenuButton>
      <Drawer open={mobileMenuOpened} onClose={handleCloseMobileMenu}>
        {children}
      </Drawer>
      <div className={styles.desktopMenu}>{children}</div>
    </div>
  );
}

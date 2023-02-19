import { ReactNode, useCallback, useState } from "react";
import { Drawer } from "../../../common/components/Drawer";
import { Navbar } from "../../../common/components/Navbar";
import { getImageUrl } from "../../../common/utils/get-image-url";
import { HamburgerMenuButton } from "../../components/HamburgerMenuButton";
import styles from "./Menu.module.scss";

export type MenuProps = React.PropsWithChildren<{
  rightItems?: ReactNode;
}>;

export function Menu({ rightItems, children }: MenuProps) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const handleOpenMobileMenu = useCallback(() => {
    setMobileMenuOpened(true);
  }, []);
  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpened(false);
  }, []);

  return (
    <header className={styles.menu}>
      <img
        src={getImageUrl("/logo.svg")}
        alt="snap logo"
        className={styles.snapLogo}
      />
      <HamburgerMenuButton
        onClick={handleOpenMobileMenu}
        className={styles.mobileMenuIcon}
      ></HamburgerMenuButton>
      <nav className={styles.navWrapper}>
        <Drawer
          open={mobileMenuOpened}
          onClose={handleCloseMobileMenu}
          className={styles.mobileMenu}
        >
          {children}
          {rightItems}
        </Drawer>
        <Navbar className={styles.desktopMenu}>
          {children}
          <div className={styles.rightItems}>{rightItems}</div>
        </Navbar>
      </nav>
    </header>
  );
}

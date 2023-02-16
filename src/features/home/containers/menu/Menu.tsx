import { useCallback } from 'react';
import { HamburgerMenuButton } from '../../components/HamburgerMenuButton';
import styles from './Menu.module.scss';

export function Menu() {
    const handleClickMobileMenu = useCallback(() => {

    }, [])

    return <div className={styles.menu}>
        <img src={"/logo.svg"} alt="snap logo" />
        <HamburgerMenuButton onClick={handleClickMobileMenu} className={styles.mobileMenuIcon}></HamburgerMenuButton>
    </div>
}
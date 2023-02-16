import styles from "./HamburgerMenuButton.module.scss";
import { classname } from "../../common/utils/classname";

export type HamburgerMenuButtonProps = {
  onClick: () => void;
  className?: string;
};

export function HamburgerMenuButton({
  onClick,
  className,
}: HamburgerMenuButtonProps) {
  return (
    <button
      className={classname(styles.hamburgerButton, className)}
      onClick={onClick}
    >
      <img src={"/icon-menu.svg"} alt="menu button" />
    </button>
  );
}

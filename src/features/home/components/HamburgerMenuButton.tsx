import styles from "./HamburgerMenuButton.module.scss";
import { classname } from "../../common/utils/classname";
import { getImageUrl } from "../../common/utils/get-image-url";

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
      <img src={getImageUrl("/icon-menu.svg")} alt="menu button" />
    </button>
  );
}

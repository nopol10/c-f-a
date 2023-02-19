import { useCallback, useState } from "react";
import { classname } from "../../common/utils/classname";
import { getImageUrl } from "../utils/get-image-url";
import styles from "./ExpandableMenu.module.scss";

export type ExpandableMenuProps = React.PropsWithChildren<{
  title: string;
  popupAlignment?: "left" | "right";
  className?: string;
}>;

export function ExpandableMenu({
  title,
  popupAlignment = "left",
  children,
}: ExpandableMenuProps) {
  const [expanded, setExpanded] = useState(false);
  const handleToggleExpandMenu = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);
  return (
    <li
      className={classname(
        styles.expandableMenu,
        expanded ? styles.expanded : undefined
      )}
    >
      <button className={styles.mainItem} onClick={handleToggleExpandMenu}>
        {title}{" "}
        <img
          className={styles.expandIcon}
          src={getImageUrl("/icon-arrow-down.svg")}
          alt={expanded ? "collapse submenu" : "expand submenu"}
        ></img>
      </button>
      <ul className={classname(styles.subMenu, styles[popupAlignment])}>
        {children}
      </ul>
    </li>
  );
}

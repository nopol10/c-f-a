import { useCallback, useState } from "react";
import { classname } from "../../common/utils/classname";
import styles from "./ExpandableMenu.module.scss";

export type ExpandableMenuProps = React.PropsWithChildren<{
  title: string;
  className?: string;
  onClick?: () => void;
}>;

export function ExpandableMenu({
  title,
  onClick,
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
      <div>
        <button onClick={handleToggleExpandMenu} className={styles.mainItem}>
          {title}
        </button>
        <img
          className={styles.expandIcon}
          src={"/icon-arrow-down.svg"}
          alt={expanded ? "collapse submenu" : "expand submenu"}
        ></img>
      </div>
      <ul className={styles.subMenu}>{children}</ul>
    </li>
  );
}

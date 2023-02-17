import { classname } from "../../common/utils/classname";
import styles from "./MenuItem.module.scss";

export type MenuItemProps = React.PropsWithChildren<{
  href: string;
  label: string;
  iconUrl?: string;
  className?: string;
}>;

export function MenuItem({
  href,
  label,
  iconUrl,
  className,
  children,
}: MenuItemProps) {
  return (
    <li className={classname(styles.menuItem)}>
      {iconUrl && <img className={styles.icon} src={iconUrl} alt={label}></img>}
      <a href={href} className={classname(styles.mainItem, className)}>
        {label}
        {children}
      </a>
    </li>
  );
}

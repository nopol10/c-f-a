import { classname } from "../utils/classname";
import styles from "./Navbar.module.scss";

export type NavbarProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Navbar({ className, children }: NavbarProps) {
  return <div className={classname(styles.navbar, className)}>{children}</div>;
}

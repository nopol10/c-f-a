import { useEffect } from "react";
import { classname } from "../../common/utils/classname";
import styles from "./Drawer.module.scss";

export type DrawerProps = React.PropsWithChildren<{
  open: boolean;
  className?: string;
  onClose: () => void;
}>;

export function Drawer({ open, onClose, className, children }: DrawerProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <div
      aria-hidden={!open}
      className={classname(open ? styles.drawerOpen : undefined, className)}
    >
      <div
        role="presentation"
        className={styles.backdrop}
        onClick={onClose}
      ></div>
      <div className={classname(styles.drawer)}>
        <button
          aria-label="close"
          className={styles.closeButton}
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}

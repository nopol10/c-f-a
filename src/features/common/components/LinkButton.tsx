import { classname } from "../utils/classname";
import styles from "./LinkButton.module.scss";

type LinkButtonVariant = "filled" | "outline" | "link";

export type LinkButtonProps = React.PropsWithChildren<{
  href: string;
  variant?: LinkButtonVariant;
  className?: string;
}>;

export function LinkButton({
  href,
  variant = "filled",
  className,
  children,
}: LinkButtonProps) {
  return (
    <a
      className={classname(styles.button, className, getOutlineClass(variant))}
      href={href}
    >
      {children}
    </a>
  );
}

function getOutlineClass(variant: LinkButtonVariant) {
  switch (variant) {
    case "outline":
      return styles.outlined;
    case "link":
      return styles.link;
    default:
      return undefined;
  }
}

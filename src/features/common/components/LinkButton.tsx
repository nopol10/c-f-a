import styles from "./LinkButton.module.scss"

export type LinkButtonProps = React.PropsWithChildren<{
    href: string,
    className?: string
}>

export function LinkButton({href, children, className}: LinkButtonProps) {
    return <a className={[styles.button, className].join(" ")} href={href} >{children}</a>
}
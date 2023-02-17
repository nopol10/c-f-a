type ClassName = string | undefined | boolean;

export function classname(...classNames: ClassName[]) {
  return classNames.filter(Boolean).join(" ");
}

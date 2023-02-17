import { ExpandableMenu } from "../../../common/components/ExpandableMenu";
import { MenuItem } from "../../../common/components/MenuItem";
import styles from "./MenuItems.module.scss";

export type MenuItemsProps = React.PropsWithChildren<{}>;

export function MenuItems() {
  return (
    <ul className={styles.list}>
      <ExpandableMenu title="Features">
        <MenuItem
          href="#"
          iconUrl="/icon-todo.svg"
          label="Todo List"
        ></MenuItem>
        <MenuItem
          href="#"
          iconUrl="/icon-calendar.svg"
          label="Calendar"
        ></MenuItem>
        <MenuItem
          href="#"
          iconUrl="/icon-reminders.svg"
          label="Reminders"
        ></MenuItem>
        <MenuItem
          href="#"
          iconUrl="/icon-planning.svg"
          label="Planning"
        ></MenuItem>
      </ExpandableMenu>
      <ExpandableMenu title="Company" popupAlignment="right">
        <MenuItem href="#" label="History"></MenuItem>
        <MenuItem href="#" label="Our Team"></MenuItem>
        <MenuItem href="#" label="Blog"></MenuItem>
      </ExpandableMenu>
      <MenuItem href="#" iconUrl="" label="Careers"></MenuItem>
      <MenuItem href="#" iconUrl="" label="About"></MenuItem>
    </ul>
  );
}

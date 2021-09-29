import {v4} from 'uuid'

import NavbarItem from "../NavbarItem";
import menuItems from "./menuItems";

import styles from "./NavbarList.module.scss";

const NavbarList =()=> {
     const navbarMenuElements = menuItems.map(item => <NavbarItem key={v4() }{...item} />)

    return (
        <ul className={styles.nav}>
            {navbarMenuElements}
        </ul>
    )
};

export default NavbarList;

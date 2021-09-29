import React from 'react';
import NavbarList from './components/NavbarList'
import Logout from './components/Logout'

import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <NavbarList />
            <Logout />
        </div>
    )
};

export default Navbar;

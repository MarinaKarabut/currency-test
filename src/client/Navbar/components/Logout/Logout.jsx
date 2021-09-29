import React from 'react';
import Button from '../../../../shared/components/Button'
import { ReactComponent as User } from '../../../../images/user.svg';
import { ReactComponent as LogoutBtn } from '../../../../images/logout.svg';

import styles from './Logout.module.scss'

const Logout = () => {
    return (
        <div className={styles.wrapper}>
            <User className={styles.user}/>
            <Button className={styles.btn}>Logout<LogoutBtn className={styles.logout}/></Button>
        </div>
    )
};

export default Logout;

import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
// import Logo from '../../UI/Logo/Logo';
import { Link } from 'react-router-dom';

const sideDrawer = ( props ) => {
    let attachedstyles = [styles.sideDrawer, styles.close];
    if (props.open) {
        attachedstyles = [styles.sideDrawer, styles.open];
    }
    return (
        <React.Fragment>
            {/* <Backdrop show={props.open} clicked={props.closed}/> */}
            <div className={attachedstyles.join(' ')}>
                {/* <div>
                    <Logo width={100} height={100} />
                </div> */}
                <nav className={styles.nav}>
                    <NavigationItems clicked={props.closed} />
                </nav>
                {/* <div className={styles.contacts}>
                    <Link onClick={props.closed} className={styles.link} to={{
                        pathname: '/contacts/callback',
                        state: {
                            name: true,
                            phone: true,
                            title: 'Заказать Звонок',
                            btnTitle: 'Заказать Звонок'
                          }
                    }}>Заказать Звонок</Link>
                </div> */}
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
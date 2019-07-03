import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ( props ) => {
    let attachedstyles = [styles.sideDrawer, styles.close];
    if (props.open) {
        attachedstyles = [styles.sideDrawer, styles.open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedstyles.join(' ')}>
                <nav className={styles.nav}>
                    <NavigationItems clicked={props.closed} />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;
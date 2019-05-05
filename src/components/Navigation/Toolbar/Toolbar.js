import React from 'react';

import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={styles.toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styles.wrapper}>
            <div className={styles.companyName}>
                <p>Easy Tours Yellowstone</p>
            </div>
            <nav className={styles.desktopOnly}>
                <NavigationItems />
            </nav> 
        </div>   
    </header>
);

export default toolbar;
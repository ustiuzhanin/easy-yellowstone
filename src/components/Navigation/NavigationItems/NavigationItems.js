import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

function navigationItems(props) {
  return (
    <ul className={styles.list}>
        <NavigationItem 
          link='/' 
          clicked={props.clicked} 
          exact>Home</NavigationItem>
        <NavigationItem 
          link='/about/' 
          clicked={props.clicked} 
          exact>About</NavigationItem>
        <NavigationItem 
          link='/faq' 
          clicked={props.clicked} 
          exact>F.A.Q.</NavigationItem>
        <NavigationItem 
          link='/contacts' 
          clicked={props.clicked} 
          exact>Contacts</NavigationItem>
        <NavigationItem 
          link='/friends/' 
          clicked={props.clicked} 
          exact>Friends</NavigationItem>
    </ul>
  )
}

export default navigationItems

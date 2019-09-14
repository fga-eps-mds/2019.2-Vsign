import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const toolbar = props =>(
    <header className="toolbar">
    <nav className="toolbar_nav">
            <div>
                <DrawerToggleButton click={props.drawerToggleClickHandler}/>
  
            </div>
            <div className="space1"/>
            <div className="toolbar_logo"><a href="/">Vsign</a></div>
            <div className="space2"/>
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href="\"><img src="https://www.flaticon.com/premium-icon/icons/svg/880/880590.svg" alt="" width="10" height="10" title="user"/></a></li>
                </ul>
            </div>
            
        </nav>
    </header>
);

export default toolbar;
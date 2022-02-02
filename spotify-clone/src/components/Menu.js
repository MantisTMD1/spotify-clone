import React from 'react';

//prop.title

const Menu = ({ title, menuObject }) => {
    return (<div className="menu-container">
        <p className="title">{title}</p>
        <ul>
            {
                menuObject && menuObject.map((menu) => (
                    <li> <a href="#"><i> {menu.icon}</i>
                    <span>{menu.name}</span>
                    </a> </li>
                    
                ))


            }

        </ul>


    </div>


    );
}

export default Menu;

import React, { useEffect } from 'react';


//prop.title this is all linked to objects built in menulist file

const Menu = ({ title, menuObject }) => {

    useEffect(() => {
        const allLi = document
            .querySelector('.menu-container ul')
            .querySelectorAll("li");

        //event listener for clicking menu items and having css actively changed
        function changeMenuActive() {
            allLi.forEach(n => n.classsList.remove('active'))
            this.classList.add('active');
        }

        allLi.forEach(n => n.addEventListener('click', changeMenuActive))
        // console.log(allLi);
    }, [])

    return (<div className="menu-container">
        <p className="title">{title}</p>
        <ul>
            {
                menuObject && menuObject.map((menu) => (
                    <li key = {menu.id}> <a href="#"><i> {menu.icon}</i>
                        <span>{menu.name}</span>
                    </a> </li>

                ))


            }

        </ul>


    </div>


    );
}

export default Menu;

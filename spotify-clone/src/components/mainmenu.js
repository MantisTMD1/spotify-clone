import React, {useEffect} from 'react';
import '../styles/mainMenu.css';
import { Banner } from './Banner.js';
import { FaUsers } from 'react-icons/fa';
import { AudioList } from './AudioList';

const MainMenu = () => {
    useEffect(() => {
        const allLi = document
            .querySelector('.menu-list')
            .querySelectorAll("li");

        //event listener for clicking menu items and having css actively changed
        function changeMenuActive() {
            allLi.forEach(n => n.classsList.remove('active'))
            this.classList.add('active');
        }

        allLi.forEach(n => n.addEventListener('click', changeMenuActive))
        // console.log(allLi);
    }, [])
    return (

        <div className="maincontainer">
            <Banner />
            <div className="menu-list">
                <ul>
                    <li> <a href="#">Popular</a> </li>
                    <li> <a href="#">Albums</a> </li>
                    <li> <a href="#">Songs</a> </li>
                    <li> <a href="#">About</a> </li>


                </ul>
                <p>

                    <i><FaUsers /> </i>
                    10 trillion <span>followers</span>
                </p>
            </div>

        <AudioList/>
        </div>

    );
}

export default MainMenu;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../utils/navbar/navbar';
import image1 from '/images/home/friends.jpg';
import { CustomFooter } from '../../utils/footer/footer';

export default function Home() {
    //#region Variables
    const navigate = useNavigate();
    //#endregion

    //#region Logic


    //#endregion


    return (
        <div className='home-container'>
            <div className='navbar-component'><CustomNavbar /></div>
            <div className='home-body'>
                    <h1>Contenido del home</h1>
            </div>
            <div className='footer-component'><CustomFooter/></div>
        </div>
    );
}

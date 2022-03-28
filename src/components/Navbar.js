import React, { useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { DriveEtaTwoTone } from '@mui/icons-material';





function Navbar() {

    // useEffect(() => {
    //     // CLOSE AND OPEN MENU JAVASCRIPT CODE
    //     const closeButton = document.querySelector('.closeIcon');
    //     const menuButton = document.querySelector('.menuIcon');

    //     closeButton.addEventListener('click', closeMenu);
    //     menuButton.addEventListener('click', openMenu);

    //     function closeMenu() {
    //         document.getElementById('mobileMenu').style.display = "none";
    //     }

    //     function openMenu() {
    //         document.getElementById('mobileMenu').style.display = "block";
    //     }
    // })

    return (
        <nav class="navbar navbar-dark fixed-top navbar-expand-lg">
            <div class="container">
                <div class="mobileMenu offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-body">
                        <div class="offcanvas-header d-flex">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" class="btn-close text-reset align-self-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">ROADMAP</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">ARTIST</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">ABOUT</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">MINT</a>
                            </li>

                        </ul>

                    </div>
                </div>

                <div className='logoContainer'>
                    <img src='images/logo.png' alt='Logo' className='logo' />
                </div>

                <div className='connectWalletContainer'>
                    <button className='button'>CONNECT WALLET</button>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
        // <div>
        //     <DriveEtaTwoTone className='leftMenu'>
        //         <a href='#'>ROADMAP</a>
        //         <a href='#'>ARTIST</a>
        //         <a href='#'>ABOUT</a>
        //         <a href='#'>MINT</a> 
        //     </DriveEtaTwoTone>


        //     <div className=''>
        //         <div>
        //             <a href='#'><img src='/images/discord.svg' alt='Discord Logo' className='brandLogo' /></a>
        //             <a href='#'><img src='/images/twitter.png' alt='Twitter Logo' className='brandLogo' /></a>

        //             <div>Connect Wallet</div>
        //         </div>

        //         <div>
        //             <MenuIcon fontSize='large' className='menuIcon' style={{fill:"#fff", cursor:"pointer"}} />
        //         </div>

        //         <div id='mobileMenu'>
        //             <div>
        //                 <CloseIcon fontSize='large' className='closeIcon' style={{fill:"#fff", cursor:"pointer"}} />
        //             </div>

        //             <div className='mobileMenuLinks'>
        //                 <a href='#'>ROADMAP</a>
        //                 <a href='#'>ARTIST</a>
        //                 <a href='#'>ABOUT</a>
        //                 <a href='#'>MINT</a> 
        //             </div>

        //             <div>
        //                 <a href='#'><img src='/images/discord.svg' alt='Discord Logo' className='brandLogo' /></a>
        //                 <a href='#'><img src='/images/twitter.png' alt='Twitter Logo' className='brandLogo' /></a>
        //             </div>

        //         </div>

        //     </div>

        // </div>


    )
}

// const Logo = styled.img`
//     width: 6%;
//     min-width: 6%;
//     max-width: 6%;

//     @media (max-width:1000px) {
//         min-width: 9%;
//         max-width: 9%;
//     }
// `

// const Nav = styled.div`
//     height: 10%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     padding: 3% 5%;
// `


// const LeftMenu = styled.div`
//     @media (max-width:1000px) {
//         display: none;
//     }   
// `

// const RightMenu = styled.div`
//     width: 25%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     @media (max-width:1000px) {
//         justify-content: flex-end;
//     }
// `

// const ConnectWalletButton  = styled.button`
//     padding: 4% 6%;
//     cursor: pointer;
//     text-transform: uppercase;
// `

// const Menu = styled.i`
//     display: none;
//     @media (max-width:1000px) {
//         display: inline;
//         justify-content: flex-end;
//     }
// `

// const BrandIconsAndConnectButton = styled.div`
//     // width: 25%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     @media (max-width:1000px) {
//         justify-content: flex-end;
//         display: none;
//     }
// `

// const MobileMenu = styled.div`
//     position: absolute;
//     right: 0;
//     top: 0;
//     height: 100vh;
//     background-color: black;
//     width: 40%;
//     padding: 9.5% 0;
//     display: none;
//     @media (min-width:1000px) {
//         display: none !important;
//     }

//     @media (max-width:700px) {
//         width: 100%;
//     }

// `

// const Links = styled.div`
// `

// const BrandLogos = styled.div`
//     // background-color: orange;
// `

// const CloseIconDiv = styled.div`
//     width: 100%;
//     position: absolute;
//     right: 0;
//     top: 0;
//     display: flex;
//     justify-content: flex-end;
//     padding: 2% 5%;
// `

export default Navbar
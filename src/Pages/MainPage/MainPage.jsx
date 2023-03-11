import React from 'react';
import logo from '../../assets/svg/lcsItLogo.svg';
import './mainPage.scss';
import cube from '../../assets/img/cube.png';
import mainBg from '../../assets/img/sectionBg.png';
import { AiOutlineArrowDown } from 'react-icons/ai';

function MainPage() {

    return (
        <React.Fragment>
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="" className='header__logo-img' />
                    <p className='header__logo-name'>LCS-IT</p>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">Contacts</li>
                        <li className="header__list-item">Company</li>
                        <li className="header__list-item">Outsourcing</li>
                        <li className="header__list-item">Services</li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <img src={mainBg} alt="" className='main__bg' />
                <section className='welcome'>
                    <div className="welcome__info">
                        <ul className="welcome__skills">
                            <li className="welcome__skills-item">Functional</li>
                            <li className="welcome__skills-item">Perfomance</li>
                            <li className="welcome__skills-item">Usability</li>
                        </ul>
                        <h1 className='welcome__title'>Software  Development</h1>
                        <p className="welcome__subtitle">LCS-IT is a prompt solution to issues, complex unique technological developments.</p>
                        <button className='welcome__btn btn-contact'>Contact Us</button>
                    </div>
                    <div className="welcome__cube">
                        <img src={cube} alt="" />
                    </div>
                </section>
                <p className='main__scroll-text'>scroll down <AiOutlineArrowDown className='main__scroll-icon' /></p>
            </main>
            <footer className='footer'>
                <div className="footer__content">
                    <div className="footer__logo">
                        <img src={logo} alt="" className='footer__logo-img' />
                        <p className='footer__logo-name'>LCS-IT</p>
                    </div>
                    <div className="footer__adress">
                        <p className='footer__adress-title'>Adress</p>
                        <ul className='footer__adress-list'>
                            <li className='footer__adress-item'>1 Knightsbridge Green London SW1X 7NE United Kingdom</li>
                            <li className='footer__adress-item'>info@lcs-it.com</li>
                            <li className='footer__adress-item'>+44(0)2070 528 406</li>
                        </ul>
                    </div>
                    <div className="footer__about">
                        <p className='footer__about-title'>About</p>
                        <ul className="footer__about-list">
                            <li className='footer__about-item'>Contacts</li>
                            <li className='footer__about-item'>Company</li>
                            <li className='footer__about-item'>Outsourcing</li>
                            <li className='footer__about-item'>Services</li>
                        </ul>
                    </div>
                    <div className="footer__folow">
                        <p className='footer__folow-title'>Follow Us</p>
                        <ul className='footer__folow-list'></ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default MainPage;
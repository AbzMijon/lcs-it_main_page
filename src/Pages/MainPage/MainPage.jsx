import React from 'react';
import logo from '../../assets/svg/lcsItLogo.svg';
import './mainPage.scss';
import mainBg from '../../assets/img/sectionBg.png';
import { AiOutlineArrowDown } from 'react-icons/ai';
import cssIcon from '../../assets/svg/css.svg';
import figmaIcon from '../../assets/svg/figma.svg';
import gitIcon from '../../assets/svg/git.svg';
import mssqlIcon from '../../assets/svg/mssql.svg';
import pgsqlIcon from '../../assets/svg/pgsql.svg';
import mongoIcon from '../../assets/svg/mongodb.svg';
import nestIcon from '../../assets/svg/nest-js.svg';
import experienceCard1 from '../../assets/img/experienceCard1.jpg';
import experienceCard2 from '../../assets/img/experienceCard2.jpg';
import experienceCard3 from '../../assets/img/experienceCard3.jpg';
import outsourcingBg1 from '../../assets/img/moleculaBg1.png';
import outsourcingBg2 from '../../assets/img/moleculaBg2.png';
import outsourcingBg3 from '../../assets/img/moleculaBg3.png';
import outsourcingCard1 from '../../assets/svg/git.svg';
import outsourcingCard2 from '../../assets/svg/reactjs.svg';
import outsourcingCard3 from '../../assets/svg/android.svg';
import outsourcingCard4 from '../../assets/svg/java.svg';
import outsourcingCard5 from '../../assets/svg/php.svg';
import seoIcon1 from '../../assets/svg/seoIcon1.svg';
import seoIcon2 from '../../assets/svg/seoIcon2.svg';
import seoIcon3 from '../../assets/svg/seoIcon3.svg';
import { FiArrowUpRight } from 'react-icons/fi';
import usaFlag from '../../assets/svg/usa.svg';
import ukFlag from '../../assets/svg/uk.svg';
import canadaFlag from '../../assets/svg/canada.svg';
import usaLine from '../../assets/img/usaLine.png';
import ukLine from '../../assets/img/ukLine.png';
import canadaLine from '../../assets/img/canadaLine.png';
import usaResult from '../../assets/svg/usaResult.svg';
import ukResult from '../../assets/svg/ukResult.svg';
import canadaResult from '../../assets/svg/canadaResult.svg';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/inst.svg';
import linkedIn from '../../assets/svg/linkedIn.svg';
import telegram from '../../assets/svg/telegram.svg';
import gitHub from '../../assets/svg/github.svg';
import designBg from '../../assets/img/designBg.png';
import designCard1 from '../../assets/img/designCard1.png';
import designCard2 from '../../assets/img/designCard2.png';
import designCard3 from '../../assets/img/designCard3.png';
import designCard4 from '../../assets/img/designCard4.png';
import designCard5 from '../../assets/img/designCard5.png';

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
                        <div class="cube">
                            <canvas id="canvas3d"></canvas>
                        </div>
                    </div>
                </section>
                <p className='main__scroll-text'>scroll down <AiOutlineArrowDown className='main__scroll-icon' /></p>
                <section className='experience'>
                    <div className="experience__block">
                        <h2 className='experience__title'>Tremendous experience</h2>
                        <ul className='experience__list'>
                            <li className='experience__card'>
                                <img src={experienceCard1} alt="" />
                                <p className='experience__card-title'>Software development</p>
                            </li>
                            <li className='experience__card'>
                                <img src={experienceCard2} alt="" />
                                <p className='experience__card-title'>Outsourcing</p>
                            </li>
                            <li className='experience__card'>
                                <img src={experienceCard3} alt="" />
                                <p className='experience__card-title'>Design</p>
                            </li>
                        </ul>
                        <p className='experience__text'>LCS-IT is a modern and creative IT company, where products of any complexityand scale are created! Our team consists of only experienced developers,designers, and friendly managers who implement all your bold ideas using thelatest technology. We implement, maintain, and service. We provide an On-Demand Developers service. On call 24/7.</p>
                    </div>
                    <div className="experience__swiper">
                        <ul className='experience__skills'>
                            <li className='experience__skills-card'>
                                <img src={cssIcon} alt="" className='experience__skills-img' />
                                <h5 className='experience__skills-name'>CSS 3</h5>
                            </li>
                            <li className='experience__skills-card'>
                                <img src={figmaIcon} alt="" className='experience__skills-img' />
                                <h5 className='experience__skills-name'>Figma</h5>
                            </li>
                            <li className='experience__skills-card'>
                                <img src={gitIcon} alt="" className='experience__skills-img' />
                                <h5 className='experience__skills-name'>Git</h5>
                            </li>
                            <li className='experience__skills-card'>
                                <img src={mssqlIcon} alt="" className='experience__skills-img' />
                                <h5 className='experience__skills-name'>MSSQL</h5>
                            </li>
                            <li className='experience__skills-card'>
                                <img src={pgsqlIcon} alt="" className='experience__skills-img' />
                                <h5 className='experience__skills-name'>PostgreSQL</h5>
                            </li>
                            <li className='experience__skills-card'>
                                <img src={mongoIcon} alt="" className='experience__skills-img' />
                                <h5 className='experience__skills-name'>MongoDB</h5>
                            </li>
                            <li className='experience__skills-card'>
                                <img src={nestIcon} alt="" className='experience__skills-img' />
                                <h5 className='experience__skills-name'>Nest.Js</h5>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='outsourcing'>
                    <div className="outsourcing__wrap">
                        <h2 className='outsourcing__title'>Outsourcing</h2>
                        <ul className="outsourcing__table">
                            <li className="outsourcing__table-wrapper outsourcing__card-sharp">
                                <span style={{zIndex: '100000'}}></span>
                                <span style={{zIndex: '100000'}}></span>
                                <span style={{zIndex: '100000'}}></span>
                                <span style={{zIndex: '100000'}}></span>
                                <div className="outsourcing__card">
                                    <img src={outsourcingCard1} alt="" className="outsourcing__img" />
                                    <h4 className='outsourcing__card-name'>C# .NET</h4>
                                    <p className='outsourcing__text'>The power of C# stems from its universality. Because it’s used by various frameworks, the number of things this language can create is indefinite. </p>
                                </div>
                            </li>
                            <li className="outsourcing__table-wrapper outsourcing__card-react">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className='outsourcing__card'>
                                    <img src={outsourcingCard2} alt="" className="outsourcing__img" />
                                    <h4 className='outsourcing__card-name'>React/ Angular </h4>
                                    <p className='outsourcing__text'>React.js/AngularJS is one of the most popular toolkits for web application development. Based on great technical strength and open source code</p>
                                </div>
                            </li>
                            <li className="outsourcing__table-wrapper outsourcing__card-mob">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className='outsourcing__card'>
                                    <img src={outsourcingCard3} alt="" className="outsourcing__img" />
                                    <h4 className='outsourcing__card-name'>Android/ IOS</h4>
                                    <p className='outsourcing__text'>The unique expertise of our mobile app outsourcing in various technologies and industries allows us to be a reliable partner in the launch and development of your mobile application.</p>
                                </div>
                            </li>
                            <li className="outsourcing__table-wrapper outsourcing__card-java">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className='outsourcing__card'>
                                    <img src={outsourcingCard4} alt="" className="outsourcing__img" />
                                    <h4 className='outsourcing__card-name'>Java</h4>
                                    <p className='outsourcing__text'>Java is the world’s most commonly used language for developing corporate solutions. We can help your business hire Java developers with vast experience and competence.</p>
                                </div>
                            </li>
                            <li className="outsourcing__table-wrapper outsourcing__card-php">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className='outsourcing__card'>
                                    <img src={outsourcingCard5} alt="" className="outsourcing__img" />
                                    <h4 className='outsourcing__card-name'>PHP</h4>
                                    <p className='outsourcing__text'>PHP is one of the main backend languages. It is applied in projects of all scales.  In fact, it’s hard to find a site that doesn’t use this language.</p>
                                </div>
                            </li>
                            <li className="outsourcing__card outsourcing__card-btn">
                                <button className='btn-contact'>Contact Us</button>
                            </li>
                        </ul>
                    </div>
                    <img src={outsourcingBg1} alt="" className='outsourcing__bg1' />
                    <img src={outsourcingBg2} alt="" className='outsourcing__bg2' />
                    <img src={outsourcingBg3} alt="" className='outsourcing__bg3' />
                </section>
                <section className='seo'>
                    <h2 className='seo__title'>SEO</h2>
                    <div className="seo__navigate">
                        <div className="seo__titles">
                            <button className='seo__navigate-btn seo__navigate-btn--active'>Keyword Research</button>
                            <button className='seo__navigate-btn'>Proactive Strategy</button>
                            <button className='seo__navigate-btn'>Content Optimization</button>
                            <button className='seo__navigate-btn'>Site Performance</button>
                            <button className='seo__navigate-btn'>Monitoring And Reporting</button>
                        </div>
                        <div className="seo__icons">
                            <button>
                                <img src={seoIcon1} alt="" className='seo__icons-img' />
                            </button>
                            <button>
                                <img src={seoIcon2} alt="" className='seo__icons-img' />
                            </button>
                            <button>
                                <img src={seoIcon3} alt="" className='seo__icons-img' />
                            </button>
                        </div>
                    </div>
                    <ul className="seo__row">
                        <li className='seo__card'>
                            <div className="seo__card-header">
                                <div className="seo__card-header-left">
                                    <img src={usaFlag} alt="" className='seo__card-flag' />
                                    <p className='seo__card-country'>USA</p>
                                    <FiArrowUpRight className='seo__card-arrow' />
                                </div>
                                <button className='seo__card-volume-btn usa-volume'>Volume</button>
                            </div>
                            <div className="seo__card-statistic">
                                <img src={usaLine} alt="" className='seo__graphic-bg' />
                                <div className="seo__card-result">
                                    <div className="seo__card-result-img">
                                        <img src={usaResult} alt="" />
                                    </div>
                                    <p className='seo__card-result-title'>Result</p>    
                                </div>
                                <div className="seo__card-kd">
                                    <p className='seo__card-kd-proccent'>55%</p>
                                    <p className='seo__card-kd-title'>KD</p>
                                </div>
                                <div className="seo__card-volume">
                                    <p className='seo__card-volume-count'>1,2K</p>
                                    <p className='seo__card-volume-title'>Volume</p>
                                </div>
                            </div>
                            <p className='seo__card-text'>You have a decent chance of ranking for</p>
                            <button className='btn-contact seo-btn'>Contact Us</button>
                        </li>
                        <li className='seo__card'>
                            <div className="seo__card-header">
                                <div className="seo__card-header-left">
                                    <img src={ukFlag} alt="" className='seo__card-flag' />
                                    <p className='seo__card-country'>UK</p>
                                    <FiArrowUpRight className='seo__card-arrow' />
                                </div>
                                <button className='seo__card-volume-btn uk-volume'>Volume</button>
                            </div>
                            <div className="seo__card-statistic">
                                <img src={ukLine} alt="" className='seo__graphic-bg' />
                                <div className="seo__card-result">
                                    <div className="seo__card-result-img">
                                        <img src={ukResult} alt="" />
                                    </div>
                                    <p className='seo__card-result-title'>Result</p>
                                </div>
                                <div className="seo__card-kd">
                                    <p className='seo__card-kd-proccent'>55%</p>
                                    <p className='seo__card-kd-title'>KD</p>
                                </div>
                                <div className="seo__card-volume">
                                    <p className='seo__card-volume-count'>1,2K</p>
                                    <p className='seo__card-volume-title'>Volume</p>
                                </div>
                            </div>
                            <p className='seo__card-text'>You have a decent chance of ranking for</p>
                            <button className='btn-contact seo-btn'>Contact Us</button>
                        </li>
                        <li className='seo__card'>
                            <div className="seo__card-header">
                                <div className="seo__card-header-left">
                                    <img src={canadaFlag} alt="" className='seo__card-flag' />
                                    <p className='seo__card-country'>CAN</p>
                                    <FiArrowUpRight className='seo__card-arrow' />
                                </div>
                                <button className='seo__card-volume-btn canada-volume'>Volume</button>
                            </div>
                            <div className="seo__card-statistic">
                                <img src={canadaLine} alt="" className='seo__graphic-bg' />
                                <div className="seo__card-result">
                                    <div className="seo__card-result-img">
                                        <img src={canadaResult} alt="" />
                                    </div>
                                    <p className='seo__card-result-title'>Result</p>
                                </div>
                                <div className="seo__card-kd">
                                    <p className='seo__card-kd-proccent'>55%</p>
                                    <p className='seo__card-kd-title'>KD</p>
                                </div>
                                <div className="seo__card-volume">
                                    <p className='seo__card-volume-count'>1,2K</p>
                                    <p className='seo__card-volume-title'>Volume</p>
                                </div>
                            </div>
                            <p className='seo__card-text'>You have a decent chance of ranking for</p>
                            <button className='btn-contact seo-btn'>Contact Us</button>
                        </li>
                    </ul>
                    <div className="seo__pagination">
                        <div className="seo__pagination-wrap">
                            <HiArrowLeft className='seo__pagination-icon'/>
                        </div>
                        <div className="seo__pagination-wrap">
                            <HiArrowRight className='seo__pagination-icon' />
                        </div>
                    </div>
                </section>
                <section className='design'>
                    <img src={designBg} alt="" className='design__bg' />
                    <h2 className='design__title'>Design</h2>
                    <p className='design__text'>As a full-service UX design agency, we work closely with our clients to define, design and develop transformative user experiences across all platforms and brand’s touchpoints.</p>
                    <ul className='design__types'>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Graphic Design</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Branding</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Competitor Analysis</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Packaging Design</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Social Media</p>
                        </li>
                        <li className='design__types-item'>
                            <FiArrowUpRight className='design__types-arrow'/>
                            <p>Digital Advertising</p>
                        </li>
                    </ul>
                    <ul className='design__list'>
                        <li className="design__card">
                            <img src={designCard1} alt="" className='design__card-img' />
                            <p className='design__card-title'>Product Strategy</p>
                            <p className='design__card-text'>We help to build your brand’s mission, vision and values while creating your unique identity and position in the market. We love to make people feel something by crafting stories that connect to people’s hearts.</p>
                        </li>
                        <li className="design__card">
                            <img src={designCard2} alt="" className='design__card-img' />
                            <p className='design__card-title'>Brand Identity</p>
                            <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                        </li>
                        <li className="design__card">
                            <img src={designCard3} alt="" className='design__card-img' />
                            <p className='design__card-title'>UI/UX Design</p>
                            <p className='design__card-text'>Boost your brand awareness and customer loyalties, increase product revenues and conversion rates with the implementation of user experience and user interface design.</p>
                        </li>
                        <li className="design__card">
                            <img src={designCard4} alt="" className='design__card-img' />
                            <p className='design__card-title'>Prototype</p>
                            <p className='design__card-text'>We help your brand find its voice and communicate your values to inspire customers to choose you, by creating a unique identity for you which helps you stand out from the crowd. </p>
                        </li>
{/*                         <li className="design__card">
                            <img src={designCard5} alt="" className='design__card-img' />
                            <p className='design__card-title'>Web Design</p>
                            <p className='design__card-text'>The process of planning and building the elements of the website. Creation of the overall visual appearance of the website.</p>
                        </li> */}
                    </ul>
                </section>
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
                        <ul className='footer__folow-list'>
                            <li className='footer__folow-item'>
                                <img src={facebook} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={instagram} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={linkedIn} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={telegram} alt="" className='footer__folow-img' />
                            </li>
                            <li className='footer__folow-item'>
                                <img src={gitHub} alt="" className='footer__folow-img' />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__container-down">
                    <ul className="footer__terms-list">
                        <li className="footer__terms-item">All right reserved 2022 Ⓒ LCS-IT</li>
                        <li className="footer__terms-item">Privacy policy</li>
                        <li className="footer__terms-item">Therm of use</li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default MainPage;
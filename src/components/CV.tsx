import './CV.css';

function CV() {
    return (
        <div className="cv">
            <div className='sheet'>
                <section>
                    <div className='main-part'>
                        <div>
                            <img src='256x256_face_full.png' alt='' className='picture' />
                        </div>
                        <div>
                            <h1 className='full-name'>JAKUB CISŁO</h1>
                            <div className='heading-subtitle'>Web Developer</div>
                            <div className='short-description'>Ambitious and communicative web developer. Love to find the best solutions for great apps.</div>
                        </div>
                        <div className='contact'>
                            <div>
                                <b>TEL. NUMBER</b>
                            </div>
                            {/* +48 881 733 641<br />
                            +44 792 273 1812 */}
                            +44 759 383 1695
                            <div>
                                <b>PORTFOLIO</b>
                            </div>
                            <a className='cv-contact-link' href='https://jcislo.web.app'>jcislo.web.app</a>
                            <div>
                                <b>E-MAIL</b>
                            </div>
                            jcislo111@gmail.com
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className='heading-3 indentation'>Skills</h3>
                    <div className='journey-part'>
                        <div className='more'>
                        </div>
                        <div className='text'>
                            <ul className='cv-list'>
                                <li>
                                    Front-end: JavaScript, TypeScript, React, Redux, Vue.js, Bootstrap, Material Design, Jest, Styled Components, jQuery, Sass, .NET
                                </li>
                                <li>
                                    Back-end: Node, Express, Firebase, MySQL, ASP.NET. Designed and maintained several web app backends and multiplayer game servers.
                                </li>
                                <li>
                                    Worked with version control and continous integration on GitHub.
                                </li>
                                <li>
                                    Experience in graphic design and graphic applications (GIMP 2).
                                </li>
                                <li>
                                    Fast and creative problem solving.
                                </li>
                                <li>
                                    Test Driven Development with Jest.
                                </li>
                                <li>
                                    I follow programming principles (like DRY, KISS, SOLID).
                                </li>
                                <li>
                                    Used to participate in cyber-security programming competitions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className='heading-3 indentation'>Experience</h3>
                    <div className='journey-part'>
                        <div className='more'>
                            <div className='place'>
                                T.O.P. Games
                            </div>
                            <div className='time'>
                                May 2021 - Aug 2021
                            </div>
                        </div>
                        <div className='text'>
                            <div className='job-title'>
                                Lead Software Enginner
                            </div>
                            Developed Tic Tac Toe Battle Royale - a mobile game - which gave me insights on working with a team and developing a full working product.
                            <ul className='cv-list'>
                                <li>
                                    Learned to use the best practices and principles in coding.
                                </li>
                                <li>
                                    Run a server for the multiplayer mode of the game.
                                </li>
                                <li>
                                    Managed the game's distribution on Play Store.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='journey-part'>
                        <div className='more'>
                            <div className='place'>
                                Freelancing
                            </div>
                            <div className='time'>
                                Sep 2021 - Feb 2022
                            </div>
                        </div>
                        <div className='text'>
                            <div className='job-title'>
                                React/Firebase Full Stack Developer
                            </div>
                            Developed Front-end (React) and Back-end (Firebase) of RazClass - a mobile/desktop web app for teachers and students to make lessons more alive and interesting.
                            <ul className='cv-list'>
                                <li>
                                    Conducted UI/UX testing in my school on a group of students.
                                </li>
                                <li>
                                    Built many interfaces for both teachers and students.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='journey-part'>
                        <div className='more'>
                            <div className='place'>
                                Freelancing
                            </div>
                            <div className='time'>
                                Mar 2022 - May 2022
                            </div>
                        </div>
                        <div className='text'>
                            <div className='job-title'>
                                React/Firebase Full Stack Developer
                            </div>
                            Developed a match-scheduling app for a local gym badminton league in Manchester. It involved in-app chat and player boarding solution.
                            <ul className='cv-list'>
                                <li>
                                    Built match database and tools for users to communicate inside app.
                                </li>
                                <li>
                                    Designed full UI/UX experience for league scheduling between players.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className='heading-3 indentation'>Education</h3>
                    <div className='journey-part'>
                        <div className='more'>
                            <div className='place'>
                                High School Nicolaus Copernicus in Grajewo
                            </div>
                            <div className='time'>
                                2019-2022
                            </div>
                        </div>
                        <div className='text'>
                            <ul className='cv-list'>
                                <li>
                                    High School Nicolaus Copernicus in Grajewo.
                                    (Major in Maths-Physics-English).
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className='heading-3 indentation'>Other Perks</h3>
                    <div className='journey-part'>
                        <div className='more'>
                        </div>
                        <div className='text'>
                            <ul className='cv-list'>
                                <li>
                                    Music school degree on trumpet and piano.
                                </li>
                                <li>
                                    In my spare time I like to create and edit videos.
                                </li>
                                <li>
                                    I used to release, promote and distribute music albums digitally.
                                </li>
                                <li>
                                    I like to play football and chess.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CV;

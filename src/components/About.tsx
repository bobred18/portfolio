import './About.css';

function About(props: any) {

    const { step } = props;

    const journeyElements = [
        {
            date: '2016',
            text: 'My first little coding projects in C++',
        },
        {
            date: '2019',
            text: 'Presented my learning app idea in OPPM Warsaw (National Youth Projects Presentation)',
        },
        {
            date: '2021',
            text: 'Released a multiplayer mobile game (which I coded and maintained its servers)',
        },
        {
            date: '2022',
            text: 'Developed RazClass - a school Progressive Web App for teachers and students to interact with each other through different interfaces.',
        },
    ];

    return (<div id='about'>
        <div className='container text-dark p-0'>
            <h1 className='about-title title-1 fw-bold py-4 mb-0' style={{ color: '#000', transition: '0.5s' }} >
                <span className={`${step >= 1 ? 'slide-in-margin' : 'slide-out-margin'} fade-05`}>ABOUT ME</span>
            </h1>
            <div className='about-grid'>
                <div className='img-holder'>
                    <div className='img-courtesy'>
                        Courtesy: Portal e-Grajewo.pl
                    </div>
                    <img src='oppm_pic_rtouch.jpg' />
                    <div className='img-caption'>
                        My team's stand on OPPM (National Youth Projects Presentation) in Warsaw 2019
                    </div>
                </div>
                <div className='text-holder px-4'>
                    <p>
                        I've always enjoyed creating things and bringing novel ideas to life. Before I dedicated myself to coding more in 2021 I used to release rap albums, perform piano concerts for local community and also make voivodship award-winning movies. What really got my mind though was <i><b> bringing ideas to the digital life, where I find no limits and try to make the world a better place</b></i>.
                    </p>
                    <h4>
                        MY CODING JOURNEY:
                    </h4>
                    {journeyElements && journeyElements.map((elem, i) => <JourneyElement data={elem} key={`journey-element-${i}`} delay={String(i * 0.25) + 's'} step={step} />)}
                </div>
            </div>
        </div>
    </div >);
}

function JourneyElement(props: any) {
    const { delay, step } = props;
    const { date, text } = props.data;
    return <div className={`journey-step ${step >= 2 ? 'slide-in' : 'slide-out'}`} style={{ transition: delay }}>
        <b className='date'>{date}</b>
        <p>
            {text}
        </p>
    </div>
}

export default About;
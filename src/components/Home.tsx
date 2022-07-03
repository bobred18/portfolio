import './Home.css';

function Home(props: any) {
    const { step } = props;

    function showMore() {
        if (document.getElementById('about')) {
            const element = document.getElementById('about');
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const features = ['React', 'Firebase', 'Redux', 'Bootstrap', 'Flutter'];

    return <div id='home' className='w-100 container-fluid m-0 p-0 text-light' style={{ height: '100vh' }}>
        <div className='d-flex'>
            <div className='home-image bg-image d-flex justify-content-center' style={{ opacity: '0.5', position: 'absolute', height: '100vh', width: '100%' }} />
            <div className='home-holder d-flex bg-infox position-absolute' style={{ height: '100vh' }}>
                <div className='text-center w-100 h-100 fw-boldx'>
                    <div className='title d-flex text-start p-5' style={{ flexDirection: 'column', lineHeight: '1' }}>
                        <span className='firstname d-flex name-accent' style={{ fontWeight: '300', fontSize: '3.5vw' }}>
                            <div className='j name-letter'>J</div>
                            <div className='a name-letter'>a</div>
                            <div className='k name-letter'>k</div>
                            <div className='u name-letter'>u</div>
                            <div className='b name-letter'>b</div>
                        </span>
                        <span className='lastname ps-2' style={{ fontWeight: '600', fontSize: '10vw' }}>
                            CISŁO
                        </span>
                        <h3 className='my-description text-1 bg-infox'>
                            Hi! I'm Jakub Cisło and I am passionate about software engineering and web technologies from childhood. I love making stuff that is both cool and useful.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div className={`home-text-holder container-fluid w-75 py-0 ${step >= 0 && step <= 0 ? 'fade-in' : 'fade-out'} fade-05`} >
            <div className='bg-dangerx d-flex justify-content-center align-items-end pb-5' style={{ height: 'calc(100vh - 0px)', backgroundColor: '' }}>
                <div>
                    {features && features.map((x, i) =>
                        <div key={x} className=' anim-appear-absolute-text ' style={{ animationDelay: `${1.5 + 10 / features.length * i}s` }}>
                            <FollowingFeature text={x} index={i} size={features.length} />
                        </div>)}
                </div>
                <div onClick={showMore} className='not-selectable cursor-pointer text-light bg-dangerx d-flex text-center justify-content-center align-items-center fs-1 font-2 py-5' style={{ fontWeight: '300' }}>
                    Click to see more <span className="ps-2"></span><IconChevron />
                </div>
            </div>
        </div>
    </div >;
}

function FollowingFeature(props: any) {
    const { text, size, index } = props;
    return <div className='anim-following' style={{ animationDelay: `${10 / size * index}s` }}>
        {text}
    </div>
}

function IconChevron() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    </svg>;
}

export default Home;
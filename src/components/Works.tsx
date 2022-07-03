import './Works.css';

const worksList: Array<WorkData> = [
    {
        twist: false,
        title: 'Badminton League App',
        colors: { subtitle: '#542E71', tech: '#9F6FFF' },
        link: 'https://man-badminton-league.web.app/',
        img: 'bla_pic.png',
        subtitle: 'League Scheduling/Stats',
        description: 'App for a local gym badminton league in Manchester. Match database and tools for users to communicate inside app.',
        tech: 'React, Redux, Firebase, Plain CSS, Vite',
    },
    {
        twist: true,
        title: 'RazClass',
        colors: { subtitle: '#2929ff', tech: '#7777ff' },
        link: 'https://razclass-28d11.web.app',
        img: 'razclass_pic.png',
        subtitle: 'Educational app',
        description: 'An original idea for modern education. RazClass app makes it trivial for students to share messages and photos to teacher\'s board.',
        tech: 'React, Redux, Firebase (Firestore, Storage, Hosting), Bootstrap (Material Design)',
    },
    {
        twist: false,
        title: 'RottenTOP',
        colors: { subtitle: '#44aa44', tech: '#77ff77' },
        link: 'https://rotten-top.web.app/',
        img: 'rottentop_pic.png',
        subtitle: 'API/Film Database',
        description: 'An API Project Showcase - made for a local movie group. Data has been modelled in a NoSQL Document model. Person Profiles and Relations.',
        tech: 'React, Redux, Node.js (for API Back-End), Plain CSS',
    },
    {
        twist: true,
        title: 'Tic Tac Toe Battle Royale',
        colors: { subtitle: '#ef7c24', tech: '#ef8f8f' },
        link: 'https://play.google.com/store/apps/details?id=t3br_rel1.fourtactoev1',
        img: 't3br_pic.png',
        subtitle: 'Mobile Game (Android)',
        description: 'Tic Tac Toe Battle Royale - a mobile game - which gave me insights on working with a team and developing a full working product.',
        tech: 'Godot, GDScript (Python), Android Studio, Google Play Store',
    },

];

interface WorkData {
    title: string,
    colors: object,
    link: string,
    img: string,
    subtitle: string,
    description: string,
    tech: string,
    twist?: boolean,
}

function Works(props: any) {
    const { step } = props;

    return <div id='works' className='w-100 d-flex font-2 fw-bold' style={{ height: '100%', flexDirection: 'column' }}>
        <div className={`works-container container text-center bg-lightx shadow-5 rounded-5x p-3 py-5 ${step >= 3 ? 'opacity-high' : 'opacity-0'} fade-05`} style={{ borderRadius: '10px 10px 0 0', zIndex: '1', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <h1 className='fw-bold' style={{ color: '#fff' }}>
                PROJECTS
            </h1>
            <hr />
            <div>

                {worksList && worksList.map((work: WorkData) => <Card data={work} />)}
                {/* <Card data={ } /> */}
                {/* <Card data={ } /> */}
                {/* <Card data={} /> */}
                {/* <Card data={} /> */}

            </div>
        </div>
    </div>
}

function Card(props: any) {

    const { title, twist, subtitle, description, tech, link, colors, img } = props.data;

    return <div className='text-light text-start shadow-3 rounded-5 mb-3' style={{ backgroundColor: 'black' }}>
        <div className='card-content h-100 d-flex align-items-center' >
            <div className='card-line-holder'>
                <div className='card-line' />
            </div>
            <div className={`text px-3 ${twist ? 'twisted-order' : ''}`} style={{ width: '100%', minHeight: '350px', height: 'auto' }}>
                <h1 className='card-title fw-bold' style={{ fontSize: '4vw' }}>
                    {title}
                </h1>
                <div className='d-flex'>
                    <h3 className='d-flex fs-5 py-1 px-4 rounded-5 ' style={{ backgroundColor: colors.subtitle }}>
                        {subtitle}
                    </h3>
                </div>
                <p className='mt-3 ' style={{ fontWeight: '200' }}>
                    {description}
                </p>
                <div className='d-flex font-1'>
                    <div className='pe-1' style={{ color: colors.tech }}>
                        TECH STACK:
                    </div>
                    {tech}
                </div>
                <a href={link} target='_blank' rel="noreferrer" className='btn btn-light d-flex fw-bold mt-2 mb-3 text-dark' style={{ maxWidth: '115px' }}>
                    see online
                </a>
            </div>
            <div className='image d-flex justify-content-end h-100 p-4' style={{ width: '60%' }}>
                <div className='m-4x'>
                    <img src={img} className='rounded-5' alt='' style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </div >
    </div >
}

export default Works;
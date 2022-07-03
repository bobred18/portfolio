import { useState } from 'react';

import './Bar.css';

const links = [
    { title: 'HOME', link: '#home' },
    { title: 'ABOUT', link: '#about' },
    { title: 'PROJECTS', link: '#works' },
    { title: 'CONTACT', link: '#contact' },
]

interface LinkType {
    title: string,
    link: string,
}

function Bar() {

    const [expand, setExpand] = useState(false);

    function responsiveClickCheck() {
        if (window.innerWidth < 800) {
            setExpand(false);
        }
    }

    return (<div className="bar" style={{ zIndex: '1000' }}>
        <div className={`bar-links-box ${expand ? 'bar-show' : 'bar-hidden'}`}>
            {links && links.map((element: LinkType) => <LinkBtn data={element} responsiveClickCheck={responsiveClickCheck} />)}
        </div>
        <div onClick={() => setExpand(!expand)} className='hamburger'>
            <IconList />
        </div>
    </div>);
}

function LinkBtn(props: any) {

    const { responsiveClickCheck } = props;
    const { title, link } = props.data;

    return (<a onClick={responsiveClickCheck} className="bar-link px-3 py-2 outline-light" href={link}>
        {title}
    </a>);
}


function IconList() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="list-icon" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>;
}

export default Bar;
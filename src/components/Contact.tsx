import './Contact.css';

function Contact(props: any) {
    return <div id='contact'>
        <div className={`container text-center bg-light shadow-5 p-3 py-5`} style={{ borderRadius: '10px', zIndex: '1', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <h1 className='fw-bold' style={{ color: '#222' }}>
                CONTACT
            </h1>
            <h2 className='py-3' style={{ fontFamily: 'Cabin' }}>
                I'm looking forward to working with you.<br />
                Drop me a line, if you think that we can create something amazing.
            </h2>
            <div className='contact-buttons-box' style={{ maxWidth: '600px' }}>
                <EmailButton />
                <TelButton />
                <CVButton />
            </div>
        </div>
    </div>
}

function EmailButton() {

    function handleCopy() {
        navigator.clipboard.writeText('jcislo111@gmail.com');
    }

    return (<button onClick={handleCopy} className='contact-btn' style={{ fontFamily: 'monospace' }}>
        <div className='contact-btn-inside'>
            Copy email address
            <div className="tooltip-text">Copied!</div>
        </div>
        <b>jcislo111@gmail.com</b>
    </button>);
}

function TelButton() {
    function handleCopy() {
        navigator.clipboard.writeText('+48 881 733 641');
    }

    return (<button onClick={handleCopy} className='contact-btn tel-btn' style={{ fontFamily: 'monospace' }}>
        <div className='contact-btn-inside'>
            Copy tel. number
            <div className="tooltip-text">Copied!</div>
        </div>
        <b>+48 881 733 641</b>
    </button>);
}

function CVButton() {
    return <a href='https://jcislocv.web.app' className='contact-btn tel-btn' style={{ fontWeight: '700' }}>CV</a>
}

export default Contact;
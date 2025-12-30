import Image from 'next/image';

interface FooterProps {
    logo: string;
    followTitle?: string;
    footerTitle?: string;
    unsubscribeTitle?: string;
}

export default function Footer({ logo, followTitle, footerTitle, unsubscribeTitle }: FooterProps) {
    return (
        <div className="footer">
            {logo ? (
                <div className="mb-5 inline-block">
                    <Image
                        src={logo}
                        width={140}
                        height={35}
                        alt="Agency Logo"
                        className="footer-logo-placeholder object-contain"
                    />
                </div>
            ) : (
                <div
                    className="footer-logo-placeholder"
                    style={{ background: '#f0f0f0', border: '1px solid #ccc' }}
                ></div>
            )}

            <div className="footer-contact">
                <p><strong>Optima-CRM Head Office</strong></p>
                <p>Keizersgracht 123, 1015 CJ Amsterdam, Netherlands</p>
                <p>(+31) 20 123 4567</p>
                <p>info@optima-crm.com</p>
            </div>

            <div className="social-links">
                <a href="https://www.facebook.com/optimasys" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="social-icon" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/company/optimasys" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" className="social-icon" alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/optima_crm" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" className="social-icon" alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/@OptimaCRM" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="social-icon" alt="YouTube" />
                </a>
                <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="social-icon" alt="Twitter" />
                </a>
            </div>

            <p style={{ fontSize: '12px', marginTop: '20px' }}>{followTitle || 'Follow us'}</p>
            <p style={{ fontSize: '11px', marginTop: '15px', lineHeight: 1.4 }}>
                {footerTitle || 'In compliance with the Dutch Telecommunications Act and GDPR, we inform you that your data is included in our records of processing activities, for which OPTIMA-CRM B.V. is responsible.'}
            </p>
            <p style={{ fontSize: '12px', marginTop: '10px' }}>
                <a href="#" className="unsubscribe-link">{unsubscribeTitle || 'Unsubscribe'}</a>
            </p>
        </div>
    );
}

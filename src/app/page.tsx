// CI/CD Test Change
import Header from '@/components/layout/Header';

import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="legacy-container">
            <Header />

            <div className="properties-section text-center">
                <h1 className="title" style={{ marginTop: '20px' }}>Welcome to Optima Deals</h1>
                <p className="section-description">
                    Discover your next dream home in the beautiful regions of Valencia and Costa Blanca.
                    We specialize in exclusive properties, luxury villas, and prime real estate investments tailored to your lifestyle.
                </p>

                <div style={{ margin: '40px 0' }}>
                    <div style={{
                        background: '#f8f9fa',
                        padding: '30px',
                        border: '1px solid #eee',
                        borderRadius: '4px'
                    }}>
                        <h3 className="blog-item-title">Start Your Journey</h3>
                        <p className="blog-item-description">
                            Explore our curated collection of featured exclusives and trending properties.
                            Our team is dedicated to finding the perfect match for your requirements.
                        </p>
                    </div>
                </div>

                <div className="btn-container">
                    <Link href="/optima-deals" className="view-all-btn">
                        Explore Featured Deals
                    </Link>
                </div>
            </div>

            <Footer
                logo="" /* Fallback will show the grey box with border */
                followTitle="Get in Touch"
                footerTitle="Your trusted partner in Spanish Real Estate. Connecting people with their perfect homes since 2010."
            />
        </div>
    );
}

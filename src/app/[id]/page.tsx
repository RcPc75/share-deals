import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Environment from '../../../environments/environment';
import ClickableImage from '@/components/common/ClickableImage';
import { notFound } from 'next/navigation';

export default async function PropertyDetails({
    params,
    searchParams
}: {
    params: { id: string },
    searchParams?: { [key: string]: string | string[] | undefined }
}) {
    const { id } = params;
    const userId = searchParams?.user;

    if (!id) {
        notFound();
    }
    const env = Environment();
    let data = null;
    let shouldNotFound = false;

    // Construct API URL, including user parameter if it exists
    const fetchUrl = `${env.apiUrl}optima-deals/${id}?user=${userId}`;

    console.log(`FETCHING FROM API: ${fetchUrl}`);

    try {
        const response = await fetch(fetchUrl, {
            method: 'POST',
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            data = await response.json();
            if (!data || !data.properties || data.properties.length === 0) {
                console.warn('API returned OK but no properties found in payload.');
                shouldNotFound = true;
            }
        } else {
            const errorText = await response.text();
            console.error(`API Error ${response.status}:`, errorText);
            shouldNotFound = true;
        }
    } catch (error) {
        // Only log if it's NOT a Next.js internal redirect/notFound error
        if ((error as any)?.digest === 'NEXT_NOT_FOUND') {
            throw error;
        }
        console.error('Error fetching property data:', error);
        shouldNotFound = true;
    }

    if (shouldNotFound) {
        notFound();
    }

    // Parse short_code configuration
    const shortCodeConfig: Record<string, string | null> = {};
    if (data?.short_code) {
        const regex = /(\w+)="([^"]*)"/g;
        let match;
        while ((match = regex.exec(data.short_code)) !== null) {
            shortCodeConfig[match[1]] = match[2];
        }
    }

    const agencyLogo = data?.agency_logo || data?.default_logo;
    const lang = shortCodeConfig.lang || data?.user_lang || 'EN';
    const tolowerCaseLang = lang.toLowerCase();
    const page_title = shortCodeConfig.page_title || 'Unique luxury';

    const remainingProperties = data?.properties ? [...data.properties] : [];
    const featuredProperty = remainingProperties.shift();

    const imageUrl = featuredProperty?.first_image
        ? `${env.remoteCdnUrl}resize/${featuredProperty.first_image.model_name}/${featuredProperty.first_image.model_id}/800/${featuredProperty.first_image.file_md5_name}`
        : '';

    const propertyName = featuredProperty?.property_name || '';
    const ptitle = featuredProperty?.title?.[lang] || featuredProperty?.title?.['EN'] || '';
    const description = (featuredProperty?.description?.[lang] || featuredProperty?.description?.['EN'] || '').replace(/<[^>]*>?/gm, '');

    let typeLabel = '';
    if (featuredProperty?.rent) typeLabel = 'for Rent';
    if (featuredProperty?.sale) typeLabel = 'for Sale';

    return (
        <>
            <div className="view-in-browser-container">
                <a href="#" className="view-in-browser">View in browser</a>
            </div>
            <div className="legacy-container">
                <Header logo={agencyLogo} />
                {/* featuredProperty detail */}
                {featuredProperty ? (
                    <>
                        <div className="properties-section" style={{ paddingBottom: 0 }}>
                            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#172f28', marginBottom: '20px', textAlign: 'center' }}>{propertyName}</h1>
                            <h2 style={{ fontSize: '16px', color: '#000', marginBottom: '30px', textAlign: 'center' }}>{ptitle}</h2>
                        </div>

                        <div className="featured-property">
                            <div className="property-image">
                                {imageUrl && (
                                    <ClickableImage
                                        src={imageUrl}
                                        width="100%"
                                        style={{ display: 'block' }}
                                        propertyId={id}
                                    />
                                )}
                            </div>
                            <div className="property-content">
                                <p className="property-title">
                                    {page_title} {typeLabel} {featuredProperty.city_obj?.[tolowerCaseLang] || featuredProperty.city_obj?.['en'] ? `in ${featuredProperty.city_obj[tolowerCaseLang] || featuredProperty.city_obj['en']}` : ''} • {featuredProperty.currency_symbol || '€'}{featuredProperty.current_price ? Number(featuredProperty.current_price).toLocaleString() : '0'}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <p>No property data found.</p>
                    </div>
                )}

                {/* Featured Exclusives Section */}
                {remainingProperties.length > 0 && (
                    <div className="properties-section">
                        <h2 className="section-title">{shortCodeConfig.featured_title || 'Featured Exclusives'}</h2>
                        <p style={{ textAlign: 'center', color: '#000', fontSize: '16px', marginBottom: '25px' }}>
                            {shortCodeConfig.featured_sub_title || 'Properties available through Optima-CRM'}
                        </p>

                        {remainingProperties.map((prop: any, index: number) => {
                            const pCity = prop.city_obj?.[tolowerCaseLang] || prop.city_obj?.['en'] || '';
                            const pLocation = prop.location_obj?.[tolowerCaseLang] || prop.location_obj?.['en'] || '';
                            const pBedrooms = prop.bedrooms || '';
                            const pFloor = prop.floors?.floor || '';
                            const pPrice = prop.current_price || '';
                            const pCurrency = prop.currency_symbol || '€';
                            const pImageUrl = prop.first_image ? `${env.remoteCdnUrl}resize/${prop.first_image.model_name}/${prop.first_image.model_id}/800/${prop.first_image.file_md5_name}` : '';

                            return (
                                <div key={prop.id || index} className="property-card">
                                    <div>
                                        {pImageUrl && (
                                            <ClickableImage
                                                src={pImageUrl}
                                                className="property-card-image"
                                                propertyId={prop._id}
                                            />
                                        )}
                                    </div>
                                    <div className="property-card-content">
                                        <p className="property-location">{pCity}</p>
                                        <p className="property-details">
                                            {pBedrooms} bedrooms • {pFloor}m² floor plan<br />
                                            {pLocation}
                                        </p>
                                        <p className="property-price-small">{pCurrency}{pPrice ? Number(pPrice).toLocaleString() : '0'}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <Footer
                    logo={agencyLogo}
                    followTitle={shortCodeConfig.follow_title ?? undefined}
                    footerTitle={shortCodeConfig.footer_title ?? undefined}
                    unsubscribeTitle={shortCodeConfig.unsubscribe_title ?? undefined}
                />
            </div>
        </>
    );
}

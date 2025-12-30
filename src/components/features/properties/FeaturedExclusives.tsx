import PropertyCard from './PropertyCard';

export default function FeaturedExclusives() {
    return (
        <div className="p-[30px]">
            <h2 className="text-[18px] font-bold text-black text-center mb-[25px]">Featured Exclusives</h2>
            <p className="text-center text-black text-base mb-[25px]">
                Properties exclusively available through Optima-CRM
            </p>

            <div className="grid gap-5">
                <PropertyCard
                    location="Alicante"
                    details="3 bedrooms • 114m² floor plan"
                    subDetails="Playa de San Juan"
                    price="€595,000"
                />
                <PropertyCard
                    location="Jávea"
                    details="4 bedrooms • 302m² floor plan"
                    subDetails="Jávea"
                    price="€679,000"
                />
                <PropertyCard
                    location="Valencia"
                    details="5 bedrooms • 429m² floor plan"
                    subDetails="Benicasim"
                    price="€1,100,000"
                />
            </div>

            <div className="text-center">
                <a href="#" className="inline-block bg-primary text-white py-3 px-[18px] font-bold no-underline my-[25px]">View all properties</a>
            </div>
        </div>
    );
}

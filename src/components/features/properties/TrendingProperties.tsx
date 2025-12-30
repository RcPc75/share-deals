import PropertyCard from './PropertyCard';

export default function TrendingProperties() {
    return (
        <div className="p-[30px]">
            <h2 className="text-[18px] font-bold text-black text-center mb-[25px]">Featured Properties</h2>
            <p className="text-center text-black text-base mb-[25px]">
                Trending properties our clients are looking at right now
            </p>

            <div className="grid gap-5">
                <PropertyCard
                    location="Valencia"
                    details="2 bedrooms • 109m² floor plan"
                    subDetails="Valencia City"
                    price="€825,000"
                />
                <PropertyCard
                    location="Valencia"
                    details="2 bedrooms • 134m² floor plan"
                    subDetails="Valencia City"
                    price="€895,000"
                />
                <PropertyCard
                    location="Jávea"
                    details="5 bedrooms • 577m² floor plan"
                    subDetails="Jávea"
                    price="€1,399,000"
                />
                <PropertyCard
                    location="Jávea"
                    details="4 bedrooms • 361m² floor plan"
                    subDetails="Jávea"
                    price="€1,595,000"
                />
            </div>

            <div className="text-center mt-5">
                <a href="#" className="inline-block bg-primary text-white py-3 px-[18px] font-bold no-underline my-[25px] mr-[10px]">View properties Valencia</a>
                <a href="#" className="inline-block bg-primary text-white py-3 px-[18px] font-bold no-underline my-[25px]">View properties Costa Blanca</a>
            </div>
        </div>
    );
}

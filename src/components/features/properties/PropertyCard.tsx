interface PropertyCardProps {
    location: string;
    details: string;
    subDetails: string;
    price: string;
}

export default function PropertyCard({ location, details, subDetails, price }: PropertyCardProps) {
    return (
        <div className="overflow-hidden shadow-card hover:-translate-y-0.5 transition-transform duration-200">
            <div className="w-full h-[337px] bg-[#f0f0f0] border border-[#ccc]"></div>
            <div className="pt-[15px] px-[30px] pb-[10px]">
                <p className="text-base font-bold text-black text-center mb-[5px]">{location}</p>
                <p className="text-[15px] font-normal text-black text-center mb-[10px]">
                    {details}
                    <br />
                    {subDetails}
                </p>
                <p className="text-[15px] font-normal text-black text-center">{price}</p>
            </div>
        </div>
    );
}

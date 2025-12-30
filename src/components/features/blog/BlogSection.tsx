export default function BlogSection() {
    return (
        <div className="p-[30px] bg-[#f8f9fa]">
            <h2 className="text-[18px] font-bold text-primary text-center mb-[25px]">Trending in the Blog</h2>
            <p className="text-center text-black text-base mb-[30px]">
                Visit our blog for more insights on market trends and the latest real estate news to make informed decisions.
            </p>

            <div className="mb-[30px] last:mb-0">
                <div className="w-full h-[337px] bg-[#f0f0f0] border border-[#ccc] mb-[15px]"></div>
                <h3 className="text-[16px] font-bold text-black text-center mb-[10px]">2026 Spanish Market Report by Optima-CRM</h3>
                <p className="text-[15px] text-black text-center leading-[1.5]">
                    Optima-CRM&apos;s 2026 market report reveals Spain&apos;s prime property market as Europe&apos;s standout performer, driven by global demand, scarce supply and continued price growth.
                </p>
            </div>

            <div className="mb-[30px] last:mb-0">
                <div className="w-full h-[337px] bg-[#f0f0f0] border border-[#ccc] mb-[15px]"></div>
                <h3 className="text-[16px] font-bold text-black text-center mb-[10px]">
                    Optima-CRM redefines the real estate Personal Shopper concept with its new Premium Advisory Service
                </h3>
                <p className="text-[15px] text-black text-center leading-[1.5]">
                    Optima-CRM&apos;s Premium Advisory Service offers a 360° real estate service, strategic, confidential, and tailored exclusively for the buyer.
                </p>
            </div>

            <div className="text-center mt-5">
                <a href="#" className="inline-block bg-primary text-white py-3 px-[18px] font-bold no-underline my-[25px]">See more articles</a>
            </div>
        </div>
    );
}

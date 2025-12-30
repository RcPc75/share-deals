import Image from 'next/image';

interface HeaderProps {
    logo?: string;
    title?: string;
}

export default function Header({
    logo,
    title = "Your Dream Home Awaits!",
}: HeaderProps) {
    return (
        <div className="header">
            {logo ? (
                <div className="mb-5 inline-block">
                    <Image
                        src={logo}
                        alt="Agency Logo"
                        width={175}
                        height={43}
                        className="object-contain"
                    />
                </div>
            ) : (
                <div className="logo-placeholder"></div>
            )}
            <h1 className="title">{title}</h1>
        </div>
    );
}

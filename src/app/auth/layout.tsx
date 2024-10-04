import HeroSection from "@/components/HeroSection/HeroSection";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeroSection text="Welcome" />
            {children}
        </>
    );
}

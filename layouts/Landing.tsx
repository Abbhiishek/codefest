import Image from "next/image";
import { useEffect } from "react";



function Landing() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return (
        <>
            <div className=" min-w-screen lg:container mx-auto lg:p-10 pt-10">
                <div className="flex flex-row lg:gap-2 items-center justify-center">
                    <div className="container mx-auto">
                        <div className="flex flex-row justify-center items-center h-full">
                            <div className="flex flex-col gap-1 px-5 basis-1/2">
                                <h1 className="lg:text-6xl text-3xl font-mono font-bold text-center lg:text-left pb-4">CodeFest 2023</h1>
                                <p className="font-semibold text-lg text-left py-2">
                                    Unleash your inner coder/Techie and join the revolution
                                </p>
                                <p>
                                    <span className="font-bold">Theme:</span> <span className="font-thin">To be announced soon</span>
                                    <ul className="ml-5 text-gray-400">
                                        <li className="font-thin list-disc">Prizes worth <span className="font-bold">7.5 Lakhs</span></li>
                                        <li className="font-thin list-disc">Certificate of Participation</li>
                                        <li className="font-thin list-disc">Internship Opportunities</li>
                                        <li className="font-thin list-disc">Job Opportunities</li>

                                    </ul>
                                </p>
                                <div className="flex flex-row gap-2 pt-10">
                                    <div
                                        className="apply-button rounded-3xl"
                                        data-hackathon-slug="hacknitr4"
                                        data-button-theme="dark-inverted"
                                    />
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-center items-center w-1/2">
                                <Image
                                    src="/landing-image.jpg"
                                    alt="landing"
                                    width={500}
                                    height={500}
                                    className="rounded-full"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing
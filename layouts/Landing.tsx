import Image from "next/image";
import Devfolio from "../components/Devfolio";


function Landing() {



    return (
        <>
            <div id="Home" className="min-w-screen container mx-auto lg:p-10 pt-10">
                <div className="flex flex-row lg:gap-2 items-center justify-center">
                    <div className="container mx-auto">
                        <div className="flex flex-row justify-center  items-center h-full">
                            <div className="flex flex-col gap-1 lg:px-5 px-2 lg:basis-1/2">
                                <h1 className="lg:text-6xl text-3xl font-mono font-bold text-center lg:text-left pb-4">CodeFest 2023</h1>
                                <p className="font-semibold text-lg text-left py-2 px-2">
                                    Unleash your inner coder/Techie and join the revolution
                                </p>
                                <p className="font-semibold text-lg text-left py-2 px-2">
                                    <span className="font-bold">Date:</span> <span className="font-thin">To be announced soon</span>
                                </p>
                                <span className="px-2">
                                    <span className="font-bold">Theme:</span> <span className="font-thin">To be announced soon</span>
                                    <ul className="ml-5 text-gray-400 pt-5">
                                        <li className="font-thin list-disc">Prizes worth : <span className="font-bold">9+ Lakhs</span></li>
                                        <li className="font-thin list-disc">Hackathon : <span className="font-bold">3+ Theme</span></li>
                                        <li className="font-thin list-disc">Workshop : <span className="font-bold">5+ Tools</span></li>
                                        <li className="font-thin list-disc">Tech Talks </li>
                                        <li className="font-thin list-disc">Networking </li>
                                    </ul>
                                </span>
                                <div className="flex flex-row gap-2 pt-10">
                                    <Devfolio />
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
                <div>
                    <div className="1"></div>
                    <div className="1"></div>
                    <div className="1"></div>
                    <div className="1"></div>
                    <div className="1"></div>
                </div>
            </div>
        </>
    )
}

export default Landing
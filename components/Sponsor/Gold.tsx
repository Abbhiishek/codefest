
import Image from 'next/image'
import Link from 'next/link'
import GoldSponsor from '../../content/Sponsors/Gold.json'

function Gold() {
    return (
        <div className="lg:mx-10 flex justify-center flex-col gap-10 py-5  rounded-2xl shadow shadow-yellow-500  Gold_sponsor ">
            <h1
                className='lg:text-3xl text-2xl text-center font-bold text-yellow-500'
            >
                GOLD SPONSORS
            </h1>
            <div className="grid lg:grid-cols-4 px-10 gap-2 place-content-center justify-items-center">
                {
                    GoldSponsor.map((item, index) => {
                        return (
                            <div className="flex justify-center items-center  col-span-1" key={index}>
                                <Link href={item.link} passHref>
                                    <Image className="rounded-lg bg-cover"
                                        src={item.image}
                                        alt={item.name}
                                        width={150} height={100} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Gold
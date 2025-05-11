import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import royal from '../../../public/royal.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { WhatsappLogo, InstagramLogo, FacebookLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'



const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primeier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className='bg-[#E84C3D] py-16 text-white'>

            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>

                    <h4 className='text-3xl font-semibold mb-8 text-center'>Nossos Parceiros</h4>

                    <div data-aos="zoom-in-up" className='grid grid-col-2 lg:grid-cols-6 gap-8'>

                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}

                                />
                            </div>

                        ))}

                    </div>

                </div>

                <footer className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 mt-5'>
                    <div data-aos="fade-right">
                        <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação</p>
                        <a target='_blank' href="https://wa.me/55679999999?text=Olá gostaria de mais informações." className="bg-green-500 gap-2 px-5 py-2 rounded-md font-semibold flex items-center w-fit transition-transform duration-300 ease-in-out hover:scale-105">
                            <WhatsappLogo className="w-5 h-5" />
                            Contato via Whatsapp

                        </a>
                    </div>

                    <div data-aos="fade-up">
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: teste@email.com</p>
                        <p>Telefone: (12) 12345-6789</p>
                        <p>Rua X, Centro, São Paulo - SP</p>

                    </div>

                    <div data-aos="fade-left">
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href='#'><FacebookLogo className='w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-105' /></a>
                            <a href='#'><InstagramLogo className='w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-105'/></a>
                            <a href='#'><YoutubeLogo className='w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-105'/></a>

                        </div>

                    </div>
                </footer>


            </div>

        </section>
    )
}
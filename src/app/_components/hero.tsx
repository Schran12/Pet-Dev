import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import dogimg from '../../../public/hero-dog.webp'
import catimg from '../../../public/cat-hero.png'
import Image from 'next/image'


export function Hero() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">

            <div>
                <Image
                    src={dogimg}
                    alt='foto doguinho'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 data-aos="fade-down" className="text-3xl font-bold md: text-4xl lg: 5xl leading-10">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                        <p data-aos="fade-right" className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas
                        </p>

                        <a data-aos="fade-up" href="https://wa.me/55679999999?text=Olá gostaria de mais informações." className="bg-green-500 gap-2 px-5 py-2 rounded-md font-semibold flex items-center w-fit transition-transform duration-300 ease-in-out hover:scale-105">
                            <WhatsappLogo className="w-5 h-5" />
                            Contato via Whatsapp

                        </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>
                            <div className='flex mt-4'>
                                <div className='w-32 hidden lg:block'>
                                    <Image
                                        src={catimg}
                                        alt='cat image'
                                        quality={100}
                                        className='object-fill'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image
                            src={dogimg}
                            alt='Foto Dog'
                            className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0px, 50vw'
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>

        </section>
    )
}
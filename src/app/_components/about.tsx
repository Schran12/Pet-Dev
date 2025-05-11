import Image from 'next/image'
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function About() {
    return (
        <section className="bg-[#FDF6dc] py-16">
            <div className="container mx-auto">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4'>
                    <div className='relative'>
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image
                                data-aos="fade-up-right"
                                data-aos-delay="300"
                                src={about1Img}
                                alt='IMG 1 Sobre'
                                fill
                                quality={100}
                                className='object-cover hover:scale-110 duration-300'
                                priority
                            />
                        </div>

                        <div data-aos="fade-down-right"
                            data-aos-delay="300" className='absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-withe'>
                            <Image
                                src={about2Img}
                                alt='IMG 2 Sobre'
                                fill
                                quality={100}
                                priority
                            />
                        </div>

                    </div>

                    <div data-aos="flip-left" className='space-y-6 mt-10'>
                        <h2 className='text-4xl font-bold'>Sobre</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid adipisci maxime nesciunt minus ea magnam sint quod possimus at! Nemo consectetur ducimus temporibus fuga impedit harum veniam ullam ut pariatur!
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                        <div className='flex gap-3'>
                            <a target='_blank' href='https://wa.me/55679999999?text=Olá gostaria de mais informações.' className="bg-[#E84C3D] flex text-white items-center justify-center w-fit gap-2 px-4 py-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-105">
                                <WhatsappLogo className='w-5 h-5 text-white' />
                                Contato via Whatsapp
                            </a>

                            <a href='#' className=" text-black items-center flex justify-center w-fit gap-2 px-4 py-2 rounded-md border border-[#E84C3D] transition-transform duration-300 ease-in-out hover:scale-105">
                                <MapPin className='w-5 h-5 text-black' />
                                Endereço da loja
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
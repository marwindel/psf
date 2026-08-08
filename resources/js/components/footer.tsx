export default function Footer() {
    return (
        <>
            <footer className="w-full bg-gradient-to-b from-[#a35b09] to-[#c09f80] py-12 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-wrap justify-between gap-y-12 font-bold text-black lg:gap-x-8">
                        <div className="flex w-full flex-col items-center text-center md:w-[45%] md:items-start md:text-left lg:w-[35%]">
                            <a
                                className="font-['Germania_One'] text-3xl font-bold text-black"
                                href="#"
                            >
                                Parroquia Sagrada Familia
                            </a>
                            <div className="mt-8 h-px w-full max-w-52 bg-linear-to-r from-black via-white/25 to-black"></div>
                        </div>

                        <div className="flex w-full flex-col items-center text-center md:w-[45%] md:items-start md:text-left lg:w-[15%]">
                            <h3 className="text-medium font-bold text-black">
                                Accesos importantes
                            </h3>
                            <div className="mt-6 flex flex-col gap-2">
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Contact
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    FAQ
                                </a>
                            </div>
                        </div>

                        <div className="flex w-full flex-col items-center text-center md:w-[45%] md:items-start md:text-left lg:w-[15%]">
                            <h3 className="text-medium font-bold text-black">
                                Redes Sociales
                            </h3>
                            <div className="mt-6 flex flex-col gap-2">
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Youtube
                                </a>
                                <a
                                    href="#"
                                    className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                    Linkedin
                                </a>
                            </div>
                        </div>

                        <div className="flex w-full flex-col items-center text-center md:w-[45%] md:items-start md:text-left lg:w-[25%]">
                            <h3 className="text-medium font-bold text-black">
                                Envianos tu correo y te mantendremos informado
                                de nuestras actividades y eventos.
                            </h3>
                            <div className="mt-4 flex h-13 w-full max-w-80 items-center gap-2 overflow-hidden rounded-full border border-white/20">
                                <input
                                    type="email"
                                    placeholder="Ingresa tu correo.."
                                    className="h-full w-full bg-transparent pl-6 text-sm text-white placeholder-white/60 outline-none placeholder:text-xs"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="mr-1.5 h-10 w-56 cursor-pointer rounded-full bg-linear-to-b from-black to-[#4a4a4b] text-sm text-white transition active:scale-95"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 mb-4 h-px w-full bg-linear-to-r from-[#c09f80] via-white/25 to-[#c09f80]"></div>

                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-xs font-bold text-black">
                            © 2026 Parroquia Sagrada Familia. All rights
                            reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="h-4 w-px bg-white/20"></div>
                            <a
                                href="#"
                                className="text-xs font-bold text-black transition-colors hover:text-white"
                            >
                                Paz y Bien
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { Carousel } from '@/components/carousel';
/* @chisel-registration */
import { register } from '@/routes';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import ImageScrolling from '@/components/imagescrolling';
import Footer from '@/components/footer';
/* @end-chisel-registration */

const slidesData = [
    {
        image: '/image/activadades/activi.jpg',
        title: 'Compartiendo la Fe',
        description:
            'Visita a la comunidad de San Francisco de Asis, donde los fieles se encuentran con la espiritualidad. actividades y eventos que fortalecen la fe y la comunidad.',
    },
    {
        image: '/image/activadades/acti5.jpg',
        title: 'Compartiendo la Fe',
        description:
            'Visita a la comunidad de San Francisco de Asis, donde los fieles se encuentran con la espiritualidad. actividades y eventos que fortalecen la fe y la comunidad.',
    },
    {
        image: '/image/activadades/comunion1.jpg',
        title: 'Primera Comunión',
        description:
            'Celebra la gran ocasión de la primera comunión con tu hijo o hija en nuestra comunidad. Un momento especial para fortalecer la fe y la conexión con Dios. ¡Únete a nosotros en esta celebración espiritual!',
    },
    {
        image: '/image/activadades/comunion3.jpg',
        title: 'Primera Comunión',
        description:
            'Celebra la gran ocasión de la primera comunión con tu hijo o hija en nuestra comunidad. Un momento especial para fortalecer la fe y la conexión con Dios. ¡Únete a nosotros en esta celebración espiritual!',
    },
    {
        image: '/image/activadades/confir.jpg',
        title: 'Confirmacion',
        description:
            'Celebra el gran sacramento de la confirmación con tu hijo o hija en nuestra comunidad. Un momento especial para fortalecer la fe y la conexión con Dios. ¡Únete a nosotros en esta celebración espiritual!',
    },
    {
        image: '/image/activadades/confir1.jpg',
        title: 'Confirmacion',
        description:
            'Celebra el gran sacramento de la confirmación con tu hijo o hija en nuestra comunidad. Un momento especial para fortalecer la fe y la conexión con Dios. ¡Únete a nosotros en esta celebración espiritual!',
    },
];

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Inicio" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#c09f80]">
                <header className="mb-0 w-full text-sm">
                    <nav className="flex items-center justify-around gap-4">
                        <div className="h-36 w-36 rounded-full bg-[url('/resources/image/iconopsf.png')] bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"></div>
                        <div className="flex gap-4 text-2xl font-bold">
                            <Link
                                href="\"
                                className="cursor:pointer text-black decoration-2 underline-offset-4 transition-all hover:text-amber-700 hover:underline"
                            >
                                Quienes somos
                            </Link>
                            <Link
                                href="\"
                                className="cursor:pointer text-black decoration-2 underline-offset-4 transition-all hover:text-amber-700 hover:underline"
                            >
                                Horarios de Misas
                            </Link>

                            <Link
                                href="\"
                                className="cursor:pointer text-black decoration-2 underline-offset-4 transition-all hover:text-amber-700 hover:underline"
                            >
                                Contactos
                            </Link>

                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="cursor:pointer inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal font-bold text-black hover:border-black hover:text-amber-700"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <DropdownMenu>
                                        {/* 1. EL BOTÓN QUE DISPARA EL MENÚ */}
                                        <DropdownMenuTrigger className="cursor:pointer text-black decoration-2 underline-offset-4 transition-all hover:text-amber-700 hover:underline">
                                            Catequesis
                                        </DropdownMenuTrigger>

                                        {/* 2. EL CONTENIDO FLOTANTE DEL MENÚ */}
                                        <DropdownMenuContent
                                            align="end"
                                            className="cursor:pointer w-56"
                                        >
                                            {/* <DropdownMenuSeparator />  */}

                                            <DropdownMenuItem>
                                                <Link
                                                    href={login()}
                                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal font-bold text-white hover:text-amber-700"
                                                >
                                                    Iniciar Sesion
                                                </Link>
                                            </DropdownMenuItem>

                                            <DropdownMenuItem>
                                                <Link
                                                    href={register()}
                                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal font-bold text-white hover:text-amber-700"
                                                >
                                                    Registro
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>
                            )}
                        </div>
                        <div className="h-36 w-36 rounded-full bg-[url('/resources/image/san-francisco.jpg')] bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"></div>
                    </nav>
                </header>
                <div className="w-fuldl mb-10 flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center text-9xl lg:gap-8">
                    <p className="font-['Germania_One'] duration-500 hover:translate-x-12 hover:transition-transform">
                        Parroquia
                    </p>
                    <p className="font-['Germania_One'] duration-500 hover:translate-x-12 hover:transition-transform">
                        Sagrada Familia
                    </p>
                </div>
                <div className="my-6 w-full overflow-hidden leading-none">
                    <svg
                        className="relative block h-12 w-full text-gray-100"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <p className="text-center text-5xl font-semibold text-black dark:text-[#1b1b18]">
                        Templos
                    </p>
                </div>
                <div className="flex hidden w-full items-center justify-center gap-6 opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    {/*    */}

                    <Card className="group relative m-2 h-105 w-78 flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#19140035] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        {/* 1. CAPA VISIBLE POR DEFECTO: Imagen de fondo + Título original */}
                        <div className="absolute inset-0 rounded-lg bg-[url('/public/image/iglesia1.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
                            {/* Overlay oscuro sutil para que el texto 'El Llano' resalte sobre la foto */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
                                <h3 className="text-center text-2xl font-bold text-white drop-shadow-md">
                                    San Francisco de Asis
                                </h3>
                            </div>
                        </div>

                        {/* 2. CAPA HOVER: Fondo blanco con la información detallada */}
                        <div className="absolute inset-0 z-10 flex flex-col justify-between bg-white p-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:bg-[#f3f5f3]">
                            <CardHeader className="p-0">
                                <h3 className="text-2xl font-bold text-black dark:text-[#1b1b18]">
                                    San Francisco de Asis
                                </h3>
                            </CardHeader>

                            <CardContent className="p-0 text-sm leading-relaxed font-medium text-slate-700 dark:text-[#1b1b18]">
                                <p>
                                    Aquí puedes colocar la descripción o
                                    información importante sobre la iglesia o
                                    sector El Llano.
                                </p>
                            </CardContent>

                            {/* Opcional: Un botón de acción al final de la tarjeta */}
                            <button className="w-full rounded-md bg-slate-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-[#1b1b18]">
                                Ver más información
                            </button>
                        </div>
                    </Card>
                    <Card className="group relative m-2 h-105 w-78 flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#19140035] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        {/* 1. CAPA VISIBLE POR DEFECTO: Imagen de fondo + Título original */}
                        <div className="absolute inset-0 rounded-lg bg-[url('/public/image/iglesia3.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
                            {/* Overlay oscuro sutil para que el texto 'El Llano' resalte sobre la foto */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
                                <h3 className="text-center text-2xl font-bold text-white drop-shadow-md">
                                    Sagrada Familia
                                </h3>
                            </div>
                        </div>

                        {/* 2. CAPA HOVER: Fondo blanco con la información detallada */}
                        <div className="absolute inset-0 z-10 flex flex-col justify-between bg-white p-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:bg-[#f3f5f3]">
                            <CardHeader className="p-0">
                                <h3 className="text-2xl font-bold text-black dark:text-[#1b1b18]">
                                    Sagrada Familia
                                </h3>
                            </CardHeader>

                            <CardContent className="p-0 text-sm leading-relaxed font-medium text-slate-700 dark:text-[#1b1b18]">
                                <p>
                                    Aquí puedes colocar la descripción o
                                    información importante sobre la iglesia o
                                    sector El Llano.
                                </p>
                            </CardContent>

                            {/* Opcional: Un botón de acción al final de la tarjeta */}
                            <button className="w-full rounded-md bg-slate-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-[#1b1b18]">
                                Ver más información
                            </button>
                        </div>
                    </Card>
                    <Card className="group relative m-2 h-105 w-78 flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#19140035] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        {/* 1. CAPA VISIBLE POR DEFECTO: Imagen de fondo + Título original */}
                        <div className="absolute inset-0 rounded-lg bg-[url('/public/image/iglesia2.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
                            {/* Overlay oscuro sutil para que el texto 'El Llano' resalte sobre la foto */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
                                <h3 className="text-center text-2xl font-bold text-white drop-shadow-md">
                                    El Llano
                                </h3>
                            </div>
                        </div>

                        {/* 2. CAPA HOVER: Fondo blanco con la información detallada */}
                        <div className="absolute inset-0 z-10 flex flex-col justify-between bg-white p-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:bg-[#f3f5f3]">
                            <CardHeader className="p-0">
                                <h3 className="text-2xl font-bold text-black dark:text-[#1b1b18]">
                                    El Llano
                                </h3>
                            </CardHeader>

                            <CardContent className="p-0 text-sm leading-relaxed font-medium text-slate-700 dark:text-[#1b1b18]">
                                <p>
                                    Aquí puedes colocar la descripción o
                                    información importante sobre la iglesia o
                                    sector El Llano.
                                </p>
                            </CardContent>

                            {/* Opcional: Un botón de acción al final de la tarjeta */}
                            <button className="w-full rounded-md bg-slate-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-[#1b1b18]">
                                Ver más información
                            </button>
                        </div>
                    </Card>
                    <Card className="group relative m-2 h-105 w-78 flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#19140035] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        {/* 1. CAPA VISIBLE POR DEFECTO: Imagen de fondo + Título original */}
                        <div className="absolute inset-0 rounded-lg bg-[url('/public/image/iglesia4.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
                            {/* Overlay oscuro sutil para que el texto 'El Llano' resalte sobre la foto */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
                                <h3 className="text-center text-2xl font-bold text-white drop-shadow-md">
                                    La Pastora
                                </h3>
                            </div>
                        </div>

                        {/* 2. CAPA HOVER: Fondo blanco con la información detallada */}
                        <div className="absolute inset-0 z-10 flex flex-col justify-between bg-white p-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 dark:bg-[#f3f5f3]">
                            <CardHeader className="p-0">
                                <h3 className="text-2xl font-bold text-black dark:text-[#1b1b18]">
                                    La Pastora
                                </h3>
                            </CardHeader>

                            <CardContent className="p-0 text-sm leading-relaxed font-medium text-slate-700 dark:text-[#1b1b18]">
                                <p>
                                    Aquí puedes colocar la descripción o
                                    información importante sobre la iglesia o
                                    sector La Pastora.
                                </p>
                            </CardContent>

                            {/* Opcional: Un botón de acción al final de la tarjeta */}
                            <button className="w-full rounded-md bg-slate-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-[#1b1b18]">
                                Ver más información
                            </button>
                        </div>
                    </Card>
                </div>
                <div className="flex w-full items-center justify-center gap-6 opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    {/*    */}

                    <Card className="m-2 flex-1 rounded-lg border border-[#19140035] bg-[#ffffff] p-6 text-left text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#f3f5f3] dark:text-[#1b1b18]">
                        <CardHeader className="text-center text-2xl font-bold text-black dark:text-[#1b1b18]">
                            San Francisco de Asis
                        </CardHeader>
                        <CardContent className="text-center text-lg font-semibold text-black dark:text-[#1b1b18]">
                            <center>
                                <div className="h-78 w-78 rounded-lg bg-[url('/resources/image/iglesia1.jpg')] bg-cover bg-center"></div>
                            </center>
                        </CardContent>
                        <CardFooter className="text-left text-sm font-semibold text-black dark:text-[#1b1b18]">
                            <p>
                                {' '}
                                <b>Direccion:</b> Sector Tinaquillo I <br />
                                <b>Horario de Misa:</b> Domingo - 8:00 am
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className="m-2 flex-1 rounded-lg border border-[#19140035] bg-[#ffffff] p-6 text-left text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#f3f5f3] dark:text-[#1b1b18]">
                        <CardHeader className="text-center text-2xl font-bold text-black dark:text-[#1b1b18]">
                            Sagrada Familia
                        </CardHeader>
                        <CardContent className="text-center text-lg font-semibold text-black dark:text-[#1b1b18]">
                            <center>
                                <div className="h-78 w-78 rounded-lg bg-[url('/resources/image/iglesia2.jpg')] bg-cover bg-center"></div>
                            </center>
                        </CardContent>
                        <CardFooter className="text-left text-sm font-semibold text-black dark:text-[#1b1b18]">
                            <p>
                                {' '}
                                <b>Direccion:</b> Funda Perija <br />
                                <b>Horario de Misa:</b> Lunes a Sabado - 5:30 pm
                                Domingo - 11:00 am, 6:00 pm{' '}
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className="m-2 flex-1 rounded-lg border border-[#19140035] bg-[#ffffff] p-6 text-left text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#f3f5f3] dark:text-[#1b1b18]">
                        <CardHeader className="text-center text-2xl font-bold text-black dark:text-[#1b1b18]">
                            El Llano
                        </CardHeader>
                        <CardContent className="text-center text-lg font-semibold text-black dark:text-[#1b1b18]">
                            <center>
                                <div className="h-78 w-78 rounded-lg bg-[url('/resources/image/iglesia3.jpg')] bg-cover bg-center"></div>
                            </center>
                        </CardContent>
                        <CardFooter className="text-left text-sm font-semibold text-black dark:text-[#1b1b18]">
                            <p>
                                {' '}
                                <b>Direccion:</b> El Llano <br />
                                <b>Horario de Misa:</b> Domingo - 4:00 pm
                            </p>
                        </CardFooter>
                    </Card>
                    <Card className="m-2 flex-1 rounded-lg border border-[#19140035] bg-[#ffffff] p-6 text-left text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-[#f3f5f3] dark:text-[#1b1b18]">
                        <CardHeader className="text-center text-2xl font-bold text-black dark:text-[#1b1b18]">
                            Divina Pastora
                        </CardHeader>
                        <CardContent className="h-78 w-78 text-center text-lg font-semibold text-black dark:text-[#1b1b18]">
                            <center>
                                <div className="h-78 w-78 rounded-lg bg-[url('/resources/image/iglesia4.jpg')] bg-cover bg-center"></div>
                            </center>
                        </CardContent>
                        <CardFooter className="text-left text-sm font-semibold text-black dark:text-[#1b1b18]">
                            <p>
                                {' '}
                                <b>Direccion:</b> La Pastora <br />
                                <b>Horario de Misa:</b> Sabado - 5:00 pm
                            </p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="mt-30 w-full overflow-hidden leading-none">
                    <svg
                        className="relative block h-12 w-full text-gray-100"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <p className="text-center text-5xl font-semibold text-black dark:text-[#1b1b18]">
                        Actividades
                    </p>
                </div>
                <div className="flex h-150 w-full items-center justify-center gap-6 opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <Carousel slides={slidesData} />
                </div>

                <section className="w-full bg-[#c09f80] text-white">
                    <div className="grid grid-cols-2 px-8">
                        <div className="grid gap-2">
                            <figure className="sticky top-0 grid h-screen place-content-center">
                                <img
                                    src="/image/activadades/acti3.jpg"
                                    alt=""
                                    className="h-150 w-150 rounded-md object-cover align-bottom shadow-lg transition-all duration-300"
                                />
                            </figure>
                            <figure className="sticky top-0 grid h-screen place-content-center">
                                <img
                                    src="/image/activadades/comunion.jpg"
                                    alt=""
                                    className="h-150 w-150 rounded-md object-cover align-bottom shadow-lg transition-all duration-300"
                                />
                            </figure>
                            <figure className="sticky top-0 grid h-screen place-content-center">
                                <img
                                    src="/image/activadades/confir3.jpg"
                                    alt=""
                                    className="h-150 w-150 rounded-md object-cover align-bottom shadow-lg transition-all duration-300"
                                />
                            </figure>
                            <figure className="sticky top-0 grid h-screen place-content-center">
                                <img
                                    src="/image/activadades/confir2.jpg"
                                    alt=""
                                    className="h-150 w-150 rounded-md object-cover align-bottom shadow-lg transition-all duration-300"
                                />
                            </figure>
                        </div>
                        <div className="sticky top-0 grid h-screen place-content-center gap-4 px-8 text-center">
                            <h3 className="px-8 text-center font-['Germania_One'] text-8xl leading-[120%] font-medium tracking-tight text-black transition-all">
                                Parroquia <br></br>
                                Sagrada Familia
                            </h3>
                        </div>
                    </div>
                </section>
                <ImageScrolling />
                <Footer />
            </div>
        </>
    );
}

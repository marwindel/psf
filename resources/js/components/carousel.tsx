import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent, CardTitle } from './ui/card';

export interface SlideItem {
    image: string;
    title?: string;
    description?: string;
}

// 2. Definimos las props del componente
interface CarouselProps {
    slides?: SlideItem[];
}

export function Carousel({ slides = [] }: CarouselProps) {
    // Inicializamos el hook de Embla
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    // Funciones para navegar
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    console.log('Ruta de la imagen:', slides[0]?.image);
    return (
        <div className="relative mx-auto mt-15 h-max w-full max-w-6xl px-4">
            {/* Contenedor principal del Viewport */}

            <div
                className="overflow-hidden rounded-2xl shadow-lg"
                ref={emblaRef}
            >
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="aspect-video min-w-0 flex-[0_0_100%]"
                        >
                            <div className="flex h-full w-full">
                                <div className="h-full w-[70%] bg-white">
                                    <img
                                        alt={
                                            slide.title || `Slide ${index + 1}`
                                        }
                                        className={`h-full w-full bg-cover bg-center`}
                                        src={slide.image}
                                        style={
                                            {
                                                /*
                                            filter: 'mask(linear-gradient(to right, black, transparent))',
                                            mask: 'linear-gradient(to right, black, transparent)',
                                            WebkitMask:
                                                'linear-gradient(to right, black, transparent)', */
                                            }
                                        }
                                    />
                                </div>
                                <div className="h-full w-[30%] items-center justify-center bg-white p-6 text-2xl text-gray-800">
                                    <div className="h-1/8"></div>
                                    <Card className="h-full w-full border-0 bg-white p-6 text-gray-800">
                                        <CardTitle className="text-center text-xl font-bold">
                                            {slide.title}
                                        </CardTitle>
                                        <CardContent>
                                            <p className="text-justify text-lg text-gray-600">
                                                {slide.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón Anterior */}
            <button
                onClick={scrollPrev}
                className="absolute top-1/2 left-6 -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-800 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
                aria-label="Anterior"
            >
                &#10094;
            </button>

            {/* Botón Siguiente */}
            <button
                onClick={scrollNext}
                className="bg-grey/90 absolute top-1/2 right-6 -translate-y-1/2 rounded-full p-3 text-gray-800 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
                aria-label="Siguiente"
            >
                &#10095;
            </button>
        </div>
    );
}

// @ts-nocheck

import { useScroll, useTransform, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import Footer from './footer';

export default function ImageScrolling() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <>
            <main ref={container} className="relative h-[200vh] bg-[#c09f80]">
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />
            </main>
        </>
    );
}

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.section
            style={{ scale, rotate }}
            className="sticky top-0 flex h-screen flex-col items-center justify-center bg-linear-to-t bg-[url('/public/image/sf.jpg')] from-[#ebebeb] to-[#dadada] bg-cover bg-center"
        ></motion.section>
    );
};

const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className="relative h-screen bg-linear-to-t from-[#c09f80] to-[#a35b09] text-white"
        >
            <article className="relative z-10 container mx-auto grid grid-cols-2">
                <h1 className="mt-15 justify-center py-10 text-center text-6xl leading-[100%] font-semibold tracking-tight">
                    Señor, hazme un instrumento de tu paz. Donde haya odio
                    siembre yo amor; donde haya ofensa, perdón; donde hay duda,
                    fe; donde hay desesperación, esperanza; donde haya
                    tinieblas, luz; donde haya tristeza, alegría.
                </h1>
                <div className="mt-15">
                    <img
                        src="/image/san-francisco.jpeg"
                        alt="img"
                        className="h-70% w-70% rounded-md object-cover"
                    />
                </div>
            </article>
        </motion.section>
    );
};

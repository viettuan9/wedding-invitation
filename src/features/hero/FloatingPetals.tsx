import { useMemo } from 'react';
import { motion } from 'framer-motion';
import petal from '@/assets/images/petal.png';

const PETAL_COUNT = 40;

type PetalConfig = {
    id: number;
    startX: number;
    drift: number;
    duration: number;
    delay: number;
};

export const FloatingPetals = () => {
    const petals = useMemo<PetalConfig[]>(
        () =>
            Array.from({ length: PETAL_COUNT }, (_, id) => ({
                id,
                startX: Math.random() * 100,
                drift: (Math.random() - 0.5) * 40,
                duration: 12 + Math.random() * 10,
                delay: Math.random() * 5,
            })),
        []
    );

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {petals.map(({ id, startX, drift, duration, delay }) => (
                <motion.img
                    key={id}
                    src={petal}
                    className="absolute w-6 opacity-80"
                    style={{ left: `${startX}%`, top: '-10%' }}
                    animate={{
                        y: ['0vh', '120vh'],
                        x: ['0vw', `${drift}vw`],
                        rotate: [0, 360],
                        opacity: [0, 0.8, 0.8, 0],
                    }}
                    transition={{
                        duration,
                        delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        times: [0, 0.1, 0.8, 1],
                    }}
                />
            ))}
        </div>
    );
};

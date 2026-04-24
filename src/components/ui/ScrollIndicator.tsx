import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm">
            <span className="mb-2 opacity-80">Cuộn xuống</span>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
                className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
                <div className="w-1 h-2 bg-white mt-2 rounded-full" />
            </motion.div>
        </div>
    );
};

import { Section } from "@/components/layout";
import { ScrollIndicator } from "@/components/ui";
import { motion } from "framer-motion";
import { FloatingPetals } from "./FloatingPetals";

const heroUrl =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2000&auto=format";

export const Hero = () => {
  return (
    <Section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-position-[20%_15%]"
          style={{ backgroundImage: `url('${heroUrl}')` }}
        />
        {/* Warm Overlay: Tạo cảm giác ảnh cũ, sang trọng thay vì gradient đen */}
        <div className="absolute inset-0 bg-[#f2f1ed]/30 backdrop-sepia-[0.2]" />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      <FloatingPetals />
    </Section>
  );
};

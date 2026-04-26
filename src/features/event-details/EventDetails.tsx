import { Section } from '@/components/layout';
import { RsvpModal } from '@/components/ui/RsvpModal';
import { motion } from 'framer-motion';

const COUPLE_INFO = [
    {
        name: 'Nguyễn Việt Tuấn',
        role: 'Groom',
        image: '/images/chure.png',
    },
    {
        name: 'Trần Thị Vân',
        role: 'Bride',
        image: '/images/codau.png',
    },
] as const;

const PersonCard = ({
    name,
    image,
    role,
}: {
    name: string;
    image: string;
    role: string;
}) => (
    <motion.article
        whileHover={{ y: -5 }}
        className="group rounded-[10px] border border-[rgba(38,37,30,0.08)] bg-[#fdfdfb] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
    >
        <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-full border-2 border-[#f2f1ed] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Decorative ring - tinh chỉnh màu nhẹ nhàng hơn */}
            <div className="absolute inset-[-10px] border border-[#a68b5c]/20 rounded-full scale-100 group-hover:scale-105 transition-transform duration-500" />
        </div>

        <span className="font-roboto text-[10px] uppercase tracking-[0.25em] text-[#a68b5c] block mb-2 font-medium">
            {role === 'Groom' ? 'Chú rể' : 'Cô dâu'}
        </span>

        <h3 className="font-playfair text-[26px] leading-[1.3] text-[#26251e] mb-4">
            {name}
        </h3>

        {/* <div className="flex justify-center gap-4">
            {['FB', 'INS', 'LINK'].map((social) => (
                <span
                    key={social}
                    className="cursor-pointer text-[10px] font-roboto tracking-widest text-[rgba(38,37,30,0.4)] hover:text-[#8b1d24] transition-colors"
                >
                    {social}
                </span>
            ))}
        </div> */}
    </motion.article>
);

type EventDetailsProps = {
    openRsvp: boolean;
    onOpenRsvp: () => void;
    onCloseRsvp: () => void;
};

export const EventDetails = ({
    openRsvp,
    onOpenRsvp,
    onCloseRsvp,
}: EventDetailsProps) => {
    const [groom, bride] = COUPLE_INFO;

    return (
        <Section id="event" className="bg-[#f2f1ed] text-[#26251e] py-24">
            {/* Header Section */}
            <div className="text-center mb-20">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-roboto text-[12px] uppercase tracking-[0.3em] text-[rgba(38,37,30,0.5)]"
                >
                    Trân trọng kính mời
                </motion.p>
                <h2 className="mt-4 font-playfair text-[40px] md:text-[52px] leading-[1.1] text-[#26251e]">
                    Thông tin buổi lễ
                </h2>
                <div className="mt-4 w-12 h-[1px] bg-[#a68b5c] mx-auto" />
            </div>

            {/* Event Details */}
            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 items-center">
                <PersonCard
                    name={groom.name}
                    role="Groom"
                    image={groom.image}
                />

                {/* Center Invitation Card */}
                <article className="relative z-10 rounded-[12px] border border-[rgba(38,37,30,0.05)] bg-[#fdfdfb] p-8 md:p-12 text-center shadow-[0_30px_60px_rgba(0,0,0,0.1)] overflow-hidden">
                    {/* Accent border top - dùng màu Burgundy sang trọng */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#8b1d24]" />

                    <h3 className="font-playfair text-[28px] tracking-tight mb-6 text-[#26251e]">
                        Lễ Thành Hôn
                    </h3>

                    <p className="font-playfair text-[16px] leading-[1.7] text-[rgba(38,37,30,0.6)] mb-10 italic">
                        "Sự hiện diện của quý khách là niềm vinh hạnh lớn lao
                        nhất đối với gia đình chúng tôi."
                    </p>

                    <div className="font-roboto space-y-8 mb-12">
                        <div>
                            <p className="text-[20px] uppercase tracking-[0.2em] text-[#8b1d24] font-bold">
                                Chủ Nhật
                            </p>
                            <h4 className="text-[40px] tracking-[-0.02em] text-[#8b1d24] font-light">
                                03.05.2026
                            </h4>
                            <p className="text-[18px] uppercase text-[#8b1d24] mt-1 font-bold">
                                Vào lúc 10:30 Sáng
                            </p>
                        </div>

                        <div className="w-10 h-px bg-[rgba(38,37,30,0.1)] mx-auto" />

                        <div>
                            <h5 className="font-roboto text-[#26251e] text-[19px] mb-2 font-medium uppercase tracking-tight">
                                Nhà văn hoá tổ dân số 5A
                            </h5>
                            <p className="font-playfair text-[16px] text-[rgba(38,37,30,0.5)]">
                                Phú Lương, Hà Nội, Việt Nam
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onOpenRsvp}
                        className="w-full rounded-[4px] bg-[#26251e] px-6 py-[16px] text-[13px] uppercase tracking-[0.2em] font-roboto text-[#f2f1ed] transition-all duration-300 hover:bg-[#8b1d24] active:scale-[0.98] shadow-md"
                    >
                        Xác nhận tham dự
                    </button>
                </article>

                <PersonCard
                    name={bride.name}
                    role="Bride"
                    image={bride.image}
                />
            </div>

            <RsvpModal open={openRsvp} onClose={onCloseRsvp} />
        </Section>
    );
};

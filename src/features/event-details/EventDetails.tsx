import { Section } from "@/components/layout";
import { RsvpModal } from "@/components/ui/RsvpModal";
import { motion } from "framer-motion";

const COUPLE_INFO = [
  {
    name: "Nguyễn Việt Tuấn",
    role: "Groom",
    image: "/images/chure.png",
  },
  {
    name: "Trần Thị Vân",
    role: "Bride",
    image: "/images/codau.png",
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
    className="group rounded-[10px] border border-[rgba(38,37,30,0.1)] bg-[#f7f7f4] p-8 text-center shadow-[rgba(0,0,0,0.02)_0px_0px_16px,rgba(0,0,0,0.008)_0px_0px_8px] transition-all duration-300 hover:shadow-[rgba(0,0,0,0.14)_0px_28px_70px,rgba(0,0,0,0.1)_0px_14px_32px]"
  >
    <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-full border border-[rgba(38,37,30,0.15)] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
      />
      {/* Decorative ring in oklab space */}
      <div className="absolute inset-[-8px] border border-[rgba(38,37,30,0.05)] rounded-full scale-100 group-hover:scale-105 transition-transform duration-500" />
    </div>

    <span className="font-roboto text-[10px] uppercase tracking-[0.2em] text-[rgba(38,37,30,0.4)] block mb-2">
      {role}
    </span>

    <h3 className="font-playfair text-[24px] leading-[1.3] text-[#26251e] mb-4">
      {name}
    </h3>

    <div className="flex justify-center gap-3">
      {["FB", "INS", "LINK"].map((social) => (
        <span
          key={social}
          className="cursor-pointer text-[10px] font-roboto tracking-wider text-[rgba(38,37,30,0.5)] hover:text-[#f54e00] transition-colors"
        >
          {social}
        </span>
      ))}
    </div>
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
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-roboto text-[11px] uppercase tracking-[0.25em] text-[rgba(38,37,30,0.4)]"
        >
          Trân trọng kính mời
        </motion.p>
        <h2 className="mt-4 font-roboto text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.04em] text-[#26251e]">
          Thông tin buổi lễ
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid gap-4 md:gap-8 lg:grid-cols-3 items-center">
        {/* Groom Card */}
        <PersonCard name={groom.name} role="Chú rể" image={groom.image} />

        {/* Center Invitation: The "Featured" Card */}
        <article className="relative z-10 rounded-[12px] border border-[rgba(38,37,30,0.1)] bg-[#ebeae5] p-6 md:p-10 text-center shadow-[rgba(0,0,0,0.14)_0px_28px_70px,rgba(0,0,0,0.1)_0px_14px_32px] overflow-hidden">
          {/* Accent border top like Cursor pricing cards */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f54e00]" />

          <h3 className="font-roboto text-[26px] tracking-[-0.02em] mb-6">
            Lễ Thành Hôn
          </h3>

          <p className="font-playfair text-[18px] leading-[1.6] text-[rgba(38,37,30,0.7)] mb-8 italic">
            "Sự hiện diện của quý khách là niềm vinh hạnh lớn lao nhất đối với
            gia đình chúng tôi."
          </p>

          <div className="font-roboto space-y-6 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#c5460ccf] mb-2">
                Tháng 5 / 2026
              </p>
              <h4 className=" text-[32px] tracking-[-0.05em] text-[#c5460ccf]">
                Chủ Nhật, 03.05
              </h4>
              <p className=" text-[20px] text-[rgba(38,37,30,0.5)] mt-1">
                Vào lúc 10:30 Sáng
              </p>
            </div>

            <div className="w-8 h-px bg-[rgba(38,37,30,0.1)] mx-auto" />

            <div>
              <h5 className="font-roboto text-[#002df5] text-[18px] mb-1">
                Nhà văn hoá tổ dân số 5A
              </h5>
              <p className="font-playfair text-[15px] text-[rgba(38,37,30,0.6)]">
                Phú Lương, Hà Nội, Việt Nam
              </p>
            </div>
          </div>

          <button
            onClick={onOpenRsvp}
            className="w-full rounded-[8px] bg-[#26251e] px-6 py-[14px] text-[14px] font-roboto text-[#f2f1ed] transition-all duration-200 hover:bg-[#cf2d56] active:scale-[0.98] shadow-lg shadow-black/5"
          >
            Xác nhận tham dự
          </button>
        </article>

        {/* Bride Card */}
        <PersonCard name={bride.name} role="Cô dâu" image={bride.image} />
      </div>

      <RsvpModal open={openRsvp} onClose={onCloseRsvp} />
    </Section>
  );
};

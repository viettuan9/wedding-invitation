import { Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { motion } from "framer-motion";

export const MapLocation = () => {
  const address = "Nhà văn hoá tổ dân số 5A, Hà Đông, Hà Nội";

  // Tọa độ ví dụ để tăng tính "Technical" cho thiết kế Cursor
  const coordinates = "20.9715° N, 105.7761° E";

  const googleMapEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.1891084432777!2d105.75692957627791!3d20.94491949065106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453002e4afa13%3A0x9649b13760eb672a!2zTmjDoCB2xINuIGhvw6EgdOG7lSBkw6JuIHPhu5EgNUE!5e0!3m2!1svi!2s!4v1777017865571!5m2!1svi!2s";
  const openMapLink = "https://maps.app.goo.gl/2xzSskUQPvK8KSq79";

  return (
    <Section id="location" className="bg-[#ffffff] text-[#26251e] py-20 px-6">
      {/* Header: Căn chỉnh theo style báo chí */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f54e00]"
        >
          Tổ chức
        </motion.span>
        <h2 className="mt-3 font-display text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.05em]">
          Vị Trí & Chỉ Đường
        </h2>
        <div className="mt-4 w-12 h-px bg-[#26251e]/10 mx-auto" />
      </div>

      {/* Map Card: Áp dụng Elevation Level 3 của Cursor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[12px] border border-[rgba(38,37,30,0.1)] bg-[#e6e5e0] p-2 md:p-3 shadow-[rgba(0,0,0,0.14)_0px_28px_70px,rgba(0,0,0,0.1)_0px_14px_32px]"
      >
        <div className="rounded-[8px] overflow-hidden border border-[rgba(38,37,30,0.1)] grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
          <iframe
            title="Bản đồ địa điểm tổ chức cưới"
            src={googleMapEmbed}
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />
        </div>
      </motion.div>

      {/* Address & Actions */}
      <div className="max-w-3xl mx-auto text-center mt-10">
        <p className="font-mono text-[11px] text-[rgba(38,37,30,0.4)] mb-2 uppercase tracking-widest">
          {coordinates}
        </p>
        <h3 className="font-playfair text-[24px] md:text-[28px] leading-[1.3] mb-8">
          {address}
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Primary Button: Warm Surface style */}
          <Button
            type="button"
            variant="primary"
            onClick={() => window.open(openMapLink, "_blank", "noreferrer")}
            className="h-10 w-full md:w-auto px-8"
          >
            Chỉ đường chi tiết
          </Button>

          {/* Secondary Pill style */}
          <Button
            type="button"
            variant="tertiary"
            onClick={() => window.open(openMapLink, "_blank", "noreferrer")}
            className="h-10 w-full md:w-auto rounded-full px-6 text-[13px] hover:text-[#26251e] hover:bg-[rgba(38,37,30,0.04)]"
          >
            Mở trong Google Maps
          </Button>
        </div>
      </div>

      {/* Editorial Note: Hướng dẫn đường đi theo kiểu chú thích trong tạp chí */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-2xl mx-auto mt-16 relative p-8 text-center"
      >
        {/* Decorative brackets kiểu code editor */}
        <span className="absolute top-0 left-0 text-2xl text-[rgba(38,37,30,0.1)] font-serif">
          {"{"}
        </span>
        <span className="absolute bottom-0 right-0 text-2xl text-[rgba(38,37,30,0.1)] font-serif">
          {"}"}
        </span>

        <p className="font-playfair italic text-[16px] md:text-[18px] leading-[1.6] text-[rgba(38,37,30,0.6)] px-4">
          "Nếu đi từ trung tâm, bạn chỉ cần đi dọc theo trục đường Thanh Xuân –
          Quang Trung. Sau đó rẽ trái ở ngã ba, địa điểm nằm ngay tại khu vực
          trung tâm phường Phú Lương, rất thuận tiện cho việc đỗ xe và di
          chuyển."
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[rgba(38,37,30,0.3)]">
          — Ghi chú cho khách mời —
        </p>
      </motion.div>
    </Section>
  );
};

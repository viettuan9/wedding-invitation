export type GalleryImage = {
  src: string;
  thumbnail?: string;
  alt?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: import.meta.env.VITE_IMG_1,
    thumbnail: import.meta.env.VITE_IMG_1,
    alt: "Cô dâu chú rể bên hoa",
  },
  {
    src: import.meta.env.VITE_IMG_2,
    thumbnail: import.meta.env.VITE_IMG_2,
    alt: "Khoảnh khắc trao nhẫn",
  },
  {
    src: import.meta.env.VITE_IMG_3,
    thumbnail: import.meta.env.VITE_IMG_3,
    alt: "Nhẫn cưới",
  },
  {
    src: import.meta.env.VITE_IMG_4, // thay ảnh cô dâu khác
    thumbnail: import.meta.env.VITE_IMG_4,
    alt: "Cô dâu",
  },
  {
    src: import.meta.env.VITE_IMG_5,
    thumbnail: import.meta.env.VITE_IMG_5,
    alt: "Chú rể",
  },
  {
    src: import.meta.env.VITE_IMG_6, // thay ảnh bàn tiệc
    thumbnail: import.meta.env.VITE_IMG_6,
    alt: "Bàn tiệc cưới",
  },
  {
    src: import.meta.env.VITE_IMG_7,
    thumbnail: import.meta.env.VITE_IMG_7,
    alt: "Hoa cưới",
  },
  {
    src: import.meta.env.VITE_IMG_8,
    thumbnail: import.meta.env.VITE_IMG_8, // sửa typo: 432f31197aeb (không phải 432f31197aeb? cái này giống rồi)
    alt: "Lễ cưới ngoài trời",
  },
];

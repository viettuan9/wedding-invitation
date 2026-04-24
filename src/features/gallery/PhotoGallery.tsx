import { Section } from '@/components/layout';
import { galleryImages } from '@/data/gallery';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const PhotoGallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <Section id="gallery" className="bg-yellow-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <p className="text-pink-400 tracking-widest text-sm">
                        Khoảnh khắc
                    </p>
                    <h2 className="text-4xl text-center mb-8 text-gray-800">
                        Album ảnh cưới
                    </h2>
                </div>
                {/* Grid ảnh */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, idx) => (
                        <div
                            key={image.src}
                            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => setIndex(idx)}
                        >
                            <img
                                src={image.thumbnail || image.src}
                                alt={image.alt || `Wedding photo ${idx + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox component */}
            {index !== -1 && (
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={galleryImages.map((img) => ({
                        src: img.src,
                        alt: img.alt,
                    }))}
                />
            )}
        </Section>
    );
};

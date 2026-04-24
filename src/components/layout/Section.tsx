import type { ReactNode } from 'react';
import { Container } from './Container';

type Props = {
    id?: string;
    children: ReactNode;
    className?: string;
};

export const Section = ({ id, children, className }: Props) => {
    return (
        <section
            id={id}
            className={`snap-section scroll-mt-24 py-20 ${className ?? ''}`}
        >
            <Container>{children}</Container>
        </section>
    );
};

import React from 'react';

type CardProps = {
    title: string;
    description?: string;
    imageUrl?: string;
    children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => (
    <div
        style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            padding: '20px',
            background: '#fff',
            maxWidth: 350,
            margin: '16px auto',
        }}
    >
        {imageUrl && (
            <img
                src={imageUrl}
                alt={title}
                style={{ width: '100%', borderRadius: '6px 6px 0 0', marginBottom: 16 }}
            />
        )}
        <h3 style={{ margin: '0 0 12px 0' }}>{title}</h3>
        {description && <p style={{ margin: '0 0 12px 0', color: '#555' }}>{description}</p>}
        {children}
    </div>
);

export default Card;
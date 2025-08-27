import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  // Allow rich content (JSX) for description
  description?: React.ReactNode;
  imageUrl?: string;
  children?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  children,
  className = '',
}) => (
  <div className={`border border-gray-200 rounded-xl shadow-md p-5 lg:max-w-3xl max-w-sm mx-auto my-4` + className}>
    {imageUrl && (
      <div>
        <Image src={imageUrl} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
    )}
    <h3 className="font-semibold text-lg">{title}</h3>
    {description && (
      <div
        className="text-left"
        style={{ margin: "0 0 12px 0", color: "#555" }}
      >
        {description}
      </div>
    )}
    {children}
  </div>
);

export default Card;

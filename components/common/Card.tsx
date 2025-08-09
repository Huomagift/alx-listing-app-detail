
import Image from "next/image";
import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ property }) => {
  const discount = property.discount ? parseInt(property.discount) : 0;
  const location = `${property.address.city}, ${property.address.country}`;

  return (
    <div className="cursor-pointer hover:shadow-md hover:rounded-lg bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative w-full h-64">
        <Image
          src={property.image}
          alt={property.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
          priority={false}
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount}% Off
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{location}</p>
        <p className="text-blue-600 font-semibold mt-2 text-lg">
          ${property.price.toLocaleString()}/night
        </p>
      </div>
    </div>
  );
};

export default Card;

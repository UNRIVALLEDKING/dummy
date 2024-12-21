/* eslint-disable react/prop-types */

import { Tag } from '../ui/Tabs';

export default function ProductCard({ product, size = 'small' }) {
  const aspectRatio = {
    small: 'aspect-square',
    medium: 'aspect-[3/4]',
    large: 'aspect-[16/9]',
  }[size];

  const textSize = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
  }[size];

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className={`relative ${aspectRatio}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Tag>{product.category}</Tag>
        </div>
      </div>
      <div className="p-4 lg:p-6">
        <h3
          className={`font-semibold text-[#393939] line-clamp-2 ${textSize} mb-3`}
        >
          {product.name}
        </h3>
        <p className="text-[#f37a1f] font-medium">{product.price}</p>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-[#393939]/60 line-clamp-1">
            {product.supplier}
          </p>
          <p className="text-sm text-[#393939]/60">{product.location}</p>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 hover:border-gray-200 transition-all hover:shadow-xl hover:shadow-gray-200/40 p-1">
      <div className="aspect-square w-full overflow-hidden bg-gray-50 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-white/90 backdrop-blur-sm border border-gray-100 text-gray-500">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-black uppercase tracking-tighter text-gray-900 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-xs font-bold text-gray-400">
            {product.price}
          </span>
        </div>
        
        <div className="space-y-1.5 border-t border-gray-50 pt-4">
          {product.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
              <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">{spec}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-white hover:bg-red-600 border border-gray-100 hover:border-red-600 text-gray-900 hover:text-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300">
          Inquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

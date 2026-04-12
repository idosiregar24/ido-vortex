import React from 'react';
import { formatRupiah } from './currency';

export default function PropertyPrice({ price, onViewDetails }) {
  return (
    <div className="flex items-center justify-between mt-auto pt-3">
      <span className="text-xl font-extrabold text-gray-900 tracking-tight">
        {formatRupiah(price)}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onViewDetails?.();
        }}
        className="text-xs font-bold text-white px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 active:scale-95 transition-all shadow-md shadow-orange-200 whitespace-nowrap"
      >
        View Details
      </button>
    </div>
  );
}
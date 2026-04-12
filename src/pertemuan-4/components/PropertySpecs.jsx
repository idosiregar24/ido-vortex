import React from 'react';

const BedIcon = () => (
  <svg className="text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7v11M21 7v11M3 12h18M3 7a2 2 0 012-2h14a2 2 0 012 2"/>
    <path d="M7 12V7h10v5"/>
  </svg>
);

const BathIcon = () => (
  <svg className="text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z"/>
    <path d="M6 12V5a2 2 0 012-2h1v2"/>
  </svg>
);

const AreaIcon = () => (
  <svg className="text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/>
    <rect x="7" y="7" width="10" height="10" rx="1"/>
  </svg>
);

export default function PropertySpecs({ specs }) {
  return (
    <div className="flex items-center gap-3 py-3 my-1 border-t border-b border-gray-100 flex-wrap">
      <div className="flex items-center gap-1 text-xs text-gray-500 font-medium" title="Kamar Tidur">
        <BedIcon /> {specs.bedrooms} beds
      </div>
      <span className="text-gray-200 text-xs">|</span>
      <div className="flex items-center gap-1 text-xs text-gray-500 font-medium" title="Kamar Mandi">
        <BathIcon /> {specs.bathrooms} baths
      </div>
      <span className="text-gray-200 text-xs">|</span>
      <div className="flex items-center gap-1 text-xs text-gray-500 font-medium" title="Luas Tanah">
        <AreaIcon /> {specs.landArea}
      </div>
    </div>
  );
}
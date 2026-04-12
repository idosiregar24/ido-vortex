import React, { useEffect } from 'react';
import { formatRupiah } from './currency';

export default function PropertyModal({ property, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!property) return null;

  const { name, imageUrl, description, tags, details } = property;
  const { price, location, specs } = details;

  const specItems = [
    {
      label: 'Kamar Tidur', value: `${specs.bedrooms} Kamar`,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M3 7v11M21 7v11M3 12h18M3 7a2 2 0 012-2h14a2 2 0 012 2"/><path d="M7 12V7h10v5"/></svg>,
    },
    {
      label: 'Kamar Mandi', value: `${specs.bathrooms} Kamar`,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z"/><path d="M6 12V5a2 2 0 012-2h1v2"/></svg>,
    },
    {
      label: 'Luas Tanah', value: specs.landArea,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>,
    },
    {
      label: 'Luas Bangunan', value: specs.buildingArea,
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    },
  ];

  return (
    <>
      {/* Keyframe animations — tidak bisa diganti Tailwind */}
      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96) } to { opacity: 1; transform: translateY(0) scale(1) } }
        .modal-backdrop { animation: fadeIn 0.2s ease }
        .modal-box      { animation: slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) }
      `}</style>

      {/* Backdrop */}
      <div
        className="modal-backdrop fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Modal Box */}
        <div
          className="modal-box bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-60 overflow-hidden rounded-t-2xl">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Tags */}
            <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <span key={i}
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    i === 0
                      ? 'bg-orange-500 text-white'
                      : 'bg-white/20 text-white border border-white/40 backdrop-blur-sm'
                  }`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">{name}</h2>

            <div className="flex items-center gap-1.5 mb-4">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-sm text-gray-400">{location}</span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>

            <hr className="border-gray-100 mb-5" />

            {/* Spesifikasi Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {specItems.map(({ label, value, icon }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">{label}</p>
                    <p className="text-sm font-bold text-gray-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Harga & CTA */}
            <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
              <div>
                <p className="text-[10px] text-gray-400 font-medium mb-0.5">Harga</p>
                <p className="text-xl font-extrabold text-gray-900 tracking-tight">{formatRupiah(price)}</p>
              </div>
              <button className="text-sm font-bold text-white px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 transition-all shadow-md shadow-orange-200">
                Hubungi Agen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

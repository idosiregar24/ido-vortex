import React from 'react';

export default function PropertyHeader({ name, location }) {
  return (
    <div className="mb-3">
      <h2 className="text-base font-bold text-gray-900 leading-snug mb-1.5 tracking-tight">
        {name}
      </h2>
      <div className="flex items-center gap-1.5">
        <svg className="flex-shrink-0 text-orange-400" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span className="text-xs text-gray-400">{location}</span>
      </div>
    </div>
  );
}
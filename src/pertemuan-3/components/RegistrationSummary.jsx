import React from "react";

const RegistrationSummary = ({ data }) => {
  return (
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Pendaftaran Berhasil
        </h3>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mb-4">
        Berikut adalah data yang kamu daftarkan:
      </p>

      {/* Data */}
      <div className="space-y-3 text-sm">
        
        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Nama Lengkap</span>
          <span className="font-medium text-gray-800">{data.nama}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Email</span>
          <span className="font-medium text-gray-800">{data.email}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Usia</span>
          <span className="font-medium text-gray-800">{data.umur} tahun</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Framework Pilihan</span>
          <span className="font-medium text-gray-800">{data.framework}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Tingkat Pengalaman</span>
          <span className="font-medium text-gray-800">{data.pengalaman}</span>
        </div>

      </div>
    </div>
  );
};

export default RegistrationSummary;
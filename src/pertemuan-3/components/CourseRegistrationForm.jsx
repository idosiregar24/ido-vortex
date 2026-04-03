import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const CourseRegistrationForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    umur: "",
    framework: "",
    pengalaman: "",
  });

  const [errors, setErrors] = useState({
    nama: "",
    email: "",
    umur: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateInput = (name, value) => {
    let errorMsg = "";

    if (name === "nama") {
      if (!value.trim()) errorMsg = "Nama wajib diisi.";
      else if (value.length < 3) errorMsg = "Minimal 3 karakter.";
      else if (!/^[a-zA-Z\s]*$/.test(value))
        errorMsg = "Hanya boleh berisi huruf.";
    }

    if (name === "email") {
      if (!value.trim()) errorMsg = "Email wajib diisi.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        errorMsg = "Format email tidak valid.";
      else if (value.length < 5) errorMsg = "Email terlalu pendek.";
    }

    if (name === "umur") {
      if (!value.trim()) errorMsg = "Umur wajib diisi.";
      else if (isNaN(value)) errorMsg = "Harus berupa angka.";
      else if (parseInt(value) < 18) errorMsg = "Minimal 18 tahun.";
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (isSubmitted) setIsSubmitted(false);

    if (["nama", "email", "umur"].includes(name)) {
      const errorMessage = validateInput(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    }
  };

  const isFormValid = () => {
    const isAllFilled = Object.values(formData).every(
      (val) => val.trim() !== ""
    );
    const hasNoErrors = Object.values(errors).every((err) => err === "");
    return isAllFilled && hasNoErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Gabung Program
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Mulai perjalananmu menjadi developer siap kerja
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <TextInput
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          error={errors.nama}
          placeholder="Nama Lengkap"
        />

        <TextInput
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Alamat Email"
        />

        <TextInput
          name="umur"
          value={formData.umur}
          onChange={handleChange}
          error={errors.umur}
          placeholder="Usia"
        />

        <SelectInput
          name="framework"
          value={formData.framework}
          onChange={handleChange}
          defaultText="Pilih Framework"
          options={["React", "Vue", "Angular", "Svelte"]}
        />

        <SelectInput
          name="pengalaman"
          value={formData.pengalaman}
          onChange={handleChange}
          defaultText="Tingkat Pengalaman"
          options={["Pemula", "Menengah", "Mahir"]}
        />

        {/* Syarat & Ketentuan */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <input
            type="checkbox"
            id="terms"
            required
            className="w-4 h-4 accent-blue-600 cursor-pointer"
          />
          <label htmlFor="terms" className="cursor-pointer">
            Saya setuju dengan{" "}
            <span className="text-blue-600 hover:underline">
              Syarat & Ketentuan
            </span>
          </label>
        </div>

        {/* Tombol Daftar */}
        {isFormValid() && !isSubmitted && (
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            Daftar Sekarang
          </button>
        )}
      </form>

      {/* State Berhasil */}
      {isSubmitted && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <h3 className="text-green-700 font-semibold mb-2">
            Pendaftaran Berhasil 🎉
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><b>Nama:</b> {formData.nama}</li>
            <li><b>Email:</b> {formData.email}</li>
            <li><b>Usia:</b> {formData.umur}</li>
            <li><b>Kursus:</b> {formData.framework}</li>
            <li><b>Level:</b> {formData.pengalaman}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseRegistrationForm;
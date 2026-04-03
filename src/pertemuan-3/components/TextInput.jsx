import React from "react";

const TextInput = ({
    name,
    type = "text",
    value,
    onChange,
    error,
    placeholder,
}) => {
    return (
        <div className="flex flex-col gap-1">

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition
        ${error
                        ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }`}
            />

            {error && (
                <span className="text-red-500 text-xs font-medium">
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextInput;
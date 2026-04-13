"use client";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  large?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function InputField({
  label,
  placeholder,
  value,
  type = "text",
  large = false,
  onChange,
}: InputFieldProps) {
  const sharedClasses =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-vertical";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {large ? (
        <textarea
          className={`${sharedClasses} min-h-24`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={sharedClasses}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
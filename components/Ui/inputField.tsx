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
  return (
    <>
      <style>{`
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-label {
          font-size: 12px;
          font-weight: 700;
          color: #888;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: 'Space Mono', monospace;
        }

        .input-field,
        .textarea-field {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          color: #e0e0e0;
          font-family: 'Space Mono', monospace;
          background: #1a1a1a;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          resize: vertical;
        }

        .input-field::placeholder,
        .textarea-field::placeholder {
          color: #444;
        }

        .input-field:focus,
        .textarea-field:focus {
          border-color: #00c9ff;
          box-shadow: 0 0 0 3px rgba(0,201,255,0.1), 0 0 12px rgba(0,255,135,0.06);
        }

        .textarea-field {
          min-height: 96px;
        }

        @media (max-width: 640px) {
          .input-field,
          .textarea-field {
            padding: 10px 12px;
            font-size: 13px;
            border-radius: 8px;
          }

          .input-label {
            font-size: 11px;
          }

          .textarea-field {
            min-height: 80px;
          }
        }
      `}</style>

      <div className="input-group">
        <label className="input-label">{label}</label>
        {large ? (
          <textarea
            className="textarea-field"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            className="input-field"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </>
  );
}
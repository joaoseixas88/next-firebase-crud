import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  
  error?: string;
  readOnly?: boolean;
}

export function Input({ label, type, readOnly, error, ...rest }: InputProps) {
  return (
    <div className={`flex flex-col`}>
      <label className={`px-1`}>{label}</label>
      <input
        readOnly={readOnly}
        
        {...rest}
        className={`rounded-md border-2 ${
          error ? "border-red-600 " : "border-purple-400"
        }  px-4 py-2 ${
          error || readOnly ? "outline-none" : "outline-purple-800"
        }
				${readOnly ? "bg-gray-300" : "bg-gray-100"}`}
      />
      {error && (
        <div className={`flex justify-end`}>
          <p className={`text-red-600`}>{error}</p>
        </div>
      )}
    </div>
  );
}

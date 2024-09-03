import { FormFieldProps } from "../types/RegisterFormTypes";

export const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}: FormFieldProps) => (
  <div>
    <label htmlFor={name} className="text-sm font-semibold">{placeholder}</label>
    <input
      id={name}
      className="h-10 w-full p-3 border rounded-lg shadow-sm text-sm"
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {
      error
      ? <span className="text-xs text-red-600 ">{error.message}</span>
      : null
    }
  </div>
);

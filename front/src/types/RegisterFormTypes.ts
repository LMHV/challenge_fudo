import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  email: string;
  fullName: string;
  age: number;
  username: string;
  country: string;
  password: string;
  confirmPassword: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
  | "email"
  | "fullName"
  | "age"
  | "username"
  | "country"
  | "password"
  | "confirmPassword";

const stringValue: string = "El campo debe ser una cadena de texto." as const;

export const RegisterFormSchema: ZodType<FormData> = z
  .object({
    email: z
      .string({ message: stringValue })
      .email({ message: "Email inválido." })
      .min(1, { message: "Campo obligatorio." }),
    fullName: z
      .string({ message: stringValue })
      .min(3, { message: "Debe tener al menos 3 caracteres." }),
    age: z
      .number({
        message: 'El campo debe ser un número',
        required_error: "Campo obligatorio.",
        invalid_type_error: "Debe ser un número.",
      })
      .gt(1, { message: "La edad debe ser mayor a 1" })
      .lt(100, { message: "La edad debe ser menor a 100" })
      .positive({ message: "La edad debe ser un número positivo" }),
    username: z
      .string({ message: stringValue })
      .min(8, { message: "Debe tener al menos 8 caracteres." })
      .max(20, { message: "Debe tener como máximo 20 caracteres." }),
    country: z
      .string({ message: stringValue })
      .min(4, { message: "Debe contener al menos 4 caracteres" })
      .max(20, { message: "Debe tener como máximo 20 caracteres." }),
    password: z
      .string({ message: stringValue })
      .min(8, { message: "Debe tener al menos 8 caracteres." }),
    confirmPassword: z
      .string({ message: stringValue })
      .min(8, { message: "Debe tener al menos 8 caracteres." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  });

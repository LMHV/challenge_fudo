import { FormField } from "./FormField";
import { useForm } from "react-hook-form";
import { FormData, RegisterFormSchema } from "../types/RegisterFormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "./Loader";
import { useNavigate } from "react-router-dom";
import { IRegisterUserResponse } from "../interfaces/RegisterUser";
import { toast } from "sonner";

export function RegisterForm() {
  const navigate = useNavigate();

  const registerUser = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch("http://localhost:3000/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error en la creación de usuario.");
      }

      const data: IRegisterUserResponse = await response.json();
      return data;
    },
    onSuccess: async (data) => {
      if (data?.token) {
        window.localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        toast.error("Error en la creación de usuario.", { position: "top-center" });
      }
    },
    onError: async (error: Error) => {
      toast.error(error.message, { position: "top-center" });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // setError,
  } = useForm<FormData>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    registerUser.mutate(data);
  };

  return (
    <div className="border my-14 py-5 px-10 rounded-xl shadow-sm w-[300px] sm:w-[400px] max-w-[400px] flex flex-col items-center gap-y-3 hover:shadow-primary/40 hover:shadow-md transition-all duration-100">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900">Registrarse</h2>
        <span className="text-primary text-sm font-medium">
          Crea tu usuario en DELI
        </span>
      </div>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          type="text"
          placeholder="Nombre completo"
          name="fullName"
          register={register}
          error={errors.fullName}
        />
        <FormField
          type="number"
          placeholder="Edad"
          name="age"
          register={register}
          error={errors.age}
          valueAsNumber
        />
        <FormField
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          register={register}
          error={errors.username}
        />
        <FormField
          type="text"
          placeholder="País"
          name="country"
          register={register}
          error={errors.country}
        />
        <FormField
          type="password"
          placeholder="Contraseña"
          name="password"
          register={register}
          error={errors.password}
        />
        <FormField
          type="password"
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />
        <button
          type="submit"
          disabled={!isValid || registerUser.isPending}
          className="flex items-center justify-center disabled:opacity-50 disabled:bg-gray-500 disabled:border-gray-400 disabled:pointer-events-none border-2 border-primary bg-primary rounded-lg text-white font-semibold hover:bg-white hover:outline-2 hover:outline-primary  hover:text-primary transition-all duration-200 p-2 mt-2"
        >
          {registerUser.isPending ? <Loader /> : "Registrarse"}
        </button>
      </form>
    </div>
  );
}

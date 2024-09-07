import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { RegisterForm } from "../components/RegisterForm";


export function SignUpPage() {

  return(
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="grid place-content-center">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  )
}

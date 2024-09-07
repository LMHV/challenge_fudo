export function Footer() {


  return (
    <footer className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto text-white py-5">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <span className="order-2 md:order-1 mt-8 md:mt-0 text-primary">
            &copy; FUDO, {new Date().getFullYear()}.
          </span>
          <div className="order-1 md:order-2 text-gray-600">
            <a href="/" className="px-2">About us</a>
            <a href="/" className="px-2">Contact us</a>
            <a href="/" className="px-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

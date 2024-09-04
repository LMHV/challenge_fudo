export function Loader() {
  return (
    <svg
      className="animate-spin h-7 w-7 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-100"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1"
      ></circle>
      <path
        className="opacity-100"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  );
}

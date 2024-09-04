interface IToast {
  bgColor: string;
  message: string;
}

export function Toast({ bgColor, message }: IToast) {
  return (
    <div
      id="toast-default"
      className="flex items-center w-full max-w-xs p-4 bg-white rounded-lg shadow"
      role="alert"
    >
      <div className="ms-3 text-sm font-normal">{message}{bgColor}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-300 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8  "
        data-dismiss-target="#toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

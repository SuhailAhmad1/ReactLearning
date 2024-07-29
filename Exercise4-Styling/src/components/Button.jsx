export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded-lg hover:bg-amber-500 hover:text-black" 
      {...props}
    >
      {children}
    </button>
  );
}

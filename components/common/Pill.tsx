const Pill = ({ label }: { label: string }) => (
  <button className="bg-gray-100 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
    {label}
  </button>
);

export default Pill;

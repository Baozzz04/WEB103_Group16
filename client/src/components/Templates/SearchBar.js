export function SearchBar({ name = "", placeholder, value, onChange }) {
  return (
    <div className="flex w-8/12 relative justify-center">
      <div className="relative w-3/5">
        <input
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="h-14 w-full pl-12 pr-5 text-base text-white border rounded-md border-[#4C4C4C] bg-[#4A4A4A] shadow-lg"
        />
        <img
          src="/look.svg"
          alt="Search"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
        />
      </div>
    </div>
  );
}

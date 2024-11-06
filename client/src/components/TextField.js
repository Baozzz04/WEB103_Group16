export function TextField({
  value,
  onChange,
  type,
  purpose = false,
  onTogglePassword,
  showPasswordIcon,
  error,
}) {
  const handleChange = (e) => {
    const currentValue = e.target.value;
    if (type !== "number" || currentValue === "" || Number(currentValue) >= 0) {
      onChange(e);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder=""
        type={type}
        value={value}
        onChange={handleChange}
        className={`${
          purpose ? "h-36" : "h-12"
        } p-6 text-md text-black border rounded-xl border-[#F2F4F5] bg-[#F2F4F5] w-full ${
          error ? "border-red-500" : ""
        }`}
      />
      {showPasswordIcon && (
        <img
          src={type === "password" ? "/showpassword.svg" : "/hidepassword.svg"}
          alt={type === "password" ? "Show password" : "Hide password"}
          className="absolute right-6 top-4 cursor-pointer w-[20px] h-[20px]"
          onClick={onTogglePassword}
        />
      )}
    </div>
  );
}

export function SelectField({ value, onChange, options, error }) {
  return (
    <select
      placeholder=""
      value={value}
      onChange={onChange}
      className={`h-12 px-5 text-base text-black	border rounded-xl border-[#F2F4F5] bg-[#F2F4F5] appearance-none placeholder-zinc-400 w-full ${
        error ? "border-red-500" : ""
      }`}
    >
      <option value="" disabled hidden className="text-zinc-500">
        {""}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

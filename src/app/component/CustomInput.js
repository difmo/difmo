const CustomInput = ({
  style,
  placeholder,
  label,
  id,
  type,
  onChange,
  value,
}) => {
  return (
    <div className="relative mb-6">
      <label
        className="block mb-1 text-sm font-semibold text-gray-800 transition-all duration-300 ease-in-out"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none border-2 border-gray-300 rounded-lg w-full py-4 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-1 focus:ring-[#EA130C] focus:border-[#EA130C] transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
      />
    </div>
  );
};

export default CustomInput;

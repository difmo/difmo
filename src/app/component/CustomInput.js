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
    <div className="mb-6 relative">
      <label
        className="block text-sm font-semibold text-gray-800 mb-2 transition-all duration-300 ease-in-out"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none border-2 border-gray-300 rounded-lg w-full py-4 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
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

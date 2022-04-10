const BaseInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  disabled,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      {!!label && (
        <label className="block text-textSecondary font-medium" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        disabled={disabled}
        className="w-full rounded-md disabled:opacity-60 p-2 placeholder:text-black placeholder:uppercase placeholder:font-medium text-sm"
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default BaseInput;

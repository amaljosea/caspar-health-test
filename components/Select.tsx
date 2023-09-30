type Option<ValueType> = {
  label: string;
  value: ValueType;
};

type SelectProps<ValueType> = {
  options: Option<ValueType>[];
  value: ValueType;
  onChange: (value: ValueType) => void;
  label: string;
};

export const Select = <ValueType extends string>({
  options,
  value,
  onChange,
  label,
}: SelectProps<ValueType>) => {
  return (
    <label>
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as ValueType)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

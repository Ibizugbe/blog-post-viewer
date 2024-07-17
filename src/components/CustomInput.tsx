import React, { useState, useEffect } from 'react';

interface CustomInputProps {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholders, onChange }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <input
      type="text"
      placeholder={placeholders[placeholderIndex]}
      onChange={onChange}
      className="p-2 border rounded w-full"
    />
  );
};

export default CustomInput;

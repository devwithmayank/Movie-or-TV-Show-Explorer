interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'tertiary';
  leadingIcon?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  leadingIcon,
  disabled = false 
}: ButtonProps) => {
  const baseStyles = "flex justify-center items-center px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-center w-fit text-xs";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300",
    tertiary: "text-blue-600 hover:bg-blue-50 disabled:text-blue-300"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variantStyles[variant]}`}
      disabled={disabled}
    >
      {leadingIcon && <span>{leadingIcon}</span>}
      {children}
    </button>
  );
};

export default Button;

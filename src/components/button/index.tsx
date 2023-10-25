const CustomButton: React.FC<{
  title: string;
  hoverColor: string;
  onClick: () => void;
}> = ({ title, hoverColor, onClick }) => {
  return (
    <button
      className={`text-xs text-[#0D0A0B] rounded-md px-4 py-2 border-[1px] h-10  ${hoverColor} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;

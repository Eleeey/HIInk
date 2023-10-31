import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  color?: string;
  bgColor?:string
};

const Button = ({ type, color, icon, title, bgColor }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-2 px-6 rounded-full border ${bgColor} ${color}`} type={type}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;

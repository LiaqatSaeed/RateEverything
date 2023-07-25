import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  className: string;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  className,
}: IButtonProps) => <button className={className}>{children}</button>;

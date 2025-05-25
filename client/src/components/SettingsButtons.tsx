import { NavLink } from "react-router-dom";

type SettingsButtonsProps = {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  isActive?: boolean;
};

export function SettingsButtons({
  to,
  onClick,
  children,
  isActive,
}: SettingsButtonsProps) {
  if (to) {
    return (
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    );
  }
  return (
    <button onClick={onClick} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
}

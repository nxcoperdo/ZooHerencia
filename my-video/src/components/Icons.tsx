type IconProps = {
  size?: number;
  color?: string;
};

export const CodeIcon: React.FC<IconProps> = ({ size = 48, color = "#F8FAFC" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M8.5 6L3 12l5.5 6M15.5 6L21 12l-5.5 6M13.5 4l-3 16"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InvoiceIcon: React.FC<IconProps> = ({ size = 48, color = "#F8FAFC" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M6 2.5h9l3 3V21a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5z"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path d="M15 2.5V6h3.5" stroke={color} strokeWidth={2} strokeLinejoin="round" />
    <path
      d="M8.5 11h7M8.5 14.5h7M8.5 18h4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = ({ size = 48, color = "#F8FAFC" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M14.7 6.3a4 4 0 00-5.6 4.9L3 17.3V21h3.7l6.1-6.1a4 4 0 004.9-5.6l-2.6 2.6-2.1-.6-.6-2.1 2.3-2.9z"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

import "./premium-divider.css";

type PremiumDividerProps = {
  number: string;
  label: string;
  tone?: "light" | "dark";
};

export function PremiumDivider({ number, label, tone = "light" }: PremiumDividerProps) {
  return (
    <div className={`premium-divider premium-divider--${tone}`} role="separator" aria-label={label}>
      <div className="premium-divider__inner">
        <span className="premium-divider__number">{number}</span>
        <i className="premium-divider__line" />
        <strong>{label}</strong>
        <i className="premium-divider__line" />
        <span className="premium-divider__mark">CD</span>
      </div>
    </div>
  );
}

export default PremiumDivider;

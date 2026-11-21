import "./homepage-live-ticker.css";

const TICKER_ITEMS = [
  "Custom websites from R4,999",
  "First visual direction within 24 hours",
  "Focused builds in 5–7 working days",
  "Custom websites for South African business",
  "3D logo design and campaign posters",
  "Pretoria-built · Ready for Gauteng",
] as const;

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="homepage-live-ticker__group" aria-hidden={hidden || undefined} role="list">
      {TICKER_ITEMS.map((item, index) => (
        <span key={item} role="listitem">
          <b>0{index + 1}</b>
          <span>{item}</span>
          <i aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function HomepageLiveTicker() {
  return (
    <aside className="homepage-live-ticker" aria-label="Carter Digitals live service updates">
      <div className="homepage-live-ticker__status">
        <i aria-hidden="true" />
        <span><b>LIVE</b> / NOW BOOKING</span>
        <small>24H FIRST DIRECTION</small>
      </div>
      <div className="homepage-live-ticker__viewport">
        <div className="homepage-live-ticker__track">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>
    </aside>
  );
}

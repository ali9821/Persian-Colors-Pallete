export default function ColorSection({ data }) {
  return (
    <div className="CS_container">
      <h1>{data.sectionTitle}</h1>
      <div className="CS_colors_box">
        {data.colors.map((item, index) => (
          <div
            key={item.HEX}
            style={{ backgroundColor: item.HEX }}
            className="CS_color_item"
          >
            <p>{item.HEX}</p>
            <button
              onClick={() => {
                console.log(item.HEX);
                navigator.clipboard.writeText(item.HEX);
              }}
            >
              Copy HEX
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(hexToRgb(item.HEX));
              }}
            >
              Copy RGB
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function hexToRgb(hex) {
  // Ensure the hex code is formatted properly
  hex = hex.trim().startsWith("#") ? hex.slice(1) : hex;

  // Check if the hex code is in the short form (e.g., "#FFF")
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Convert the hex code to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r},${g},${b}`;
}
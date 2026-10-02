import { ImageResponse } from "next/og";

export const alt = "Carmine Coppola — Machine learning and HPC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e9",
          color: "#15140f",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: "#6a665b", display: "flex" }}>
          Research fellow · Naples, Italy
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, lineHeight: 0.95 }}>
          <span>Carmine</span>
          <span style={{ color: "#cf4a14", fontStyle: "italic" }}>Coppola</span>
        </div>
        <div style={{ fontSize: 32, color: "#15140f", display: "flex" }}>Machine learning · HPC · Edge vision</div>
      </div>
    ),
    size,
  );
}

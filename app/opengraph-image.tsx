import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tabnify – Smart Tab Manager Chrome Extension";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: "absolute",
                        top: "-50px",
                        left: "-50px",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        right: "-80px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.03)",
                    }}
                />

                {/* Logo emoji */}
                <div
                    style={{
                        fontSize: "64px",
                        marginBottom: "16px",
                        display: "flex",
                    }}
                >
                    📑
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: 800,
                        color: "white",
                        letterSpacing: "-2px",
                        marginBottom: "8px",
                        display: "flex",
                    }}
                >
                    Tabnify
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: "32px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.9)",
                        marginBottom: "32px",
                        display: "flex",
                    }}
                >
                    Smart Tab Manager for Chrome
                </div>

                {/* Features */}
                <div
                    style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        fontSize: "20px",
                        color: "rgba(255,255,255,0.75)",
                    }}
                >
                    <span style={{ display: "flex" }}>📁 Group Tabs</span>
                    <span style={{ display: "flex" }}>•</span>
                    <span style={{ display: "flex" }}>💾 Save Sessions</span>
                    <span style={{ display: "flex" }}>•</span>
                    <span style={{ display: "flex" }}>🎯 Focus Mode</span>
                    <span style={{ display: "flex" }}>•</span>
                    <span style={{ display: "flex" }}>🔍 Search History</span>
                </div>

                {/* Badge */}
                <div
                    style={{
                        marginTop: "32px",
                        padding: "12px 28px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.15)",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: 600,
                        display: "flex",
                    }}
                >
                    100% Free · No Data Collected
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}

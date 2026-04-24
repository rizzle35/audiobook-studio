"use client";
import { useState } from "react";

export default function App() {
  const [script, setScript] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>🎬 Audiobook Studio</h1>

      <textarea
        placeholder="[NARRATOR]: Start here..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
        style={{ width: "100%", height: 120 }}
      />
    </div>
  );
}

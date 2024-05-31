"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export function CalcomEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink="maissoum/callme"
      style={{ width: "100%", height: "100%", overflowY: "hidden" }}
      config={{ layout: "month_view" }}
    />
  );
}

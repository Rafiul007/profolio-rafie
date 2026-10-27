"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { inViewOnce } from "@/lib/motion";

const MOBILE_WEEKS = 26;

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVEL_COLORS = [
  "rgba(255,255,255,0.06)",
  "rgba(192,132,252,0.30)",
  "rgba(192,132,252,0.55)",
  "rgba(216,180,254,0.80)",
  "rgba(249,168,212,1)",
];

export default function GitHubContributions() {
  const [data, setData] = useState<{ total: number; days: Day[] } | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setData)
      .catch(() => setFailed(true));
  }, []);

  // Group days into week columns, padding the first week so rows line up with weekdays
  const weeks = useMemo(() => {
    if (!data) return [];
    const pad = new Date(data.days[0].date).getUTCDay();
    const cells: (Day | null)[] = [...Array(pad).fill(null), ...data.days];
    const out: (Day | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7));
    return out;
  }, [data]);

  if (failed) {
    return (
      <p className="text-sm text-gray-400">
        Contribution graph unavailable right now.
      </p>
    );
  }

  return (
    <div>
      <p className="mb-4 text-sm text-gray-400">
        {data ? (
          <>
            <span className="text-white tabular-nums">{data.total.toLocaleString()}</span>{" "}
            contributions in the last year
          </>
        ) : (
          <span className="inline-block h-4 w-48 animate-pulse rounded bg-white/10 align-middle" />
        )}
      </p>

      <motion.div
        className="grid grid-flow-col auto-cols-fr gap-[3px]"
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        transition={{ staggerChildren: 0.012 }}
      >
        {(weeks.length ? weeks : Array.from({ length: 53 }, () => Array(7).fill(null))).map((week, w, all) => (
          <motion.div
            key={w}
            // Phones show the last ~6 months so cells stay legible
            className={`${w < all.length - MOBILE_WEEKS ? "hidden sm:grid" : "grid"} grid-rows-7 gap-[3px]`}
            variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          >
            {Array.from({ length: 7 }, (_, d) => {
              const day = week[d];
              return (
                <div
                  key={d}
                  title={day ? `${day.count} contributions on ${day.date}` : undefined}
                  className="aspect-square w-full rounded-[2px]"
                  style={{ background: day ? LEVEL_COLORS[day.level] : data ? "transparent" : LEVEL_COLORS[0] }}
                />
              );
            })}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-gray-500">
        Less
        {LEVEL_COLORS.map((c) => (
          <span key={c} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: c }} />
        ))}
        More
      </div>
    </div>
  );
}

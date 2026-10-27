// Last year of GitHub contributions, cached and refreshed twice a day.
export const revalidate = 43200;

const GITHUB_USER = "Rafiul007";

type ApiResponse = {
  total: { lastYear: number };
  contributions: { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }[];
};

export async function GET() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
    { next: { revalidate } }
  );
  if (!res.ok) {
    return Response.json({ error: "unavailable" }, { status: 502 });
  }

  const data = (await res.json()) as ApiResponse;
  return Response.json({
    total: data.total.lastYear,
    days: data.contributions.map(({ date, count, level }) => ({ date, count, level })),
  });
}

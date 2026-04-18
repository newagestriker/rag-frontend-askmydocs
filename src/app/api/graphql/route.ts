export async function POST(req: Request) {
  const body = await req.text();

  const response = await fetch(process.env.NEXT_BACKEND_GRAPHQL_URL?? "https://tbhxhm8lso.localto.net/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "localtonet-skip-warning": "1",
    },
    body,
  });

  const text = await response.text();

  return new Response(text, {
    status: response.status,
    headers: {
      "content-type": response.headers.get("content-type") ?? "application/json",
    },
  });
}
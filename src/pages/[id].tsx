const Wait = () => <pre>Please wait to be redirected...</pre>;

export async function getServerSideProps(ctx: { params: { id: string } }) {
  const redirect = ctx.params.id;

  const res = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://0.0.0.0:3000/api/read" // REPLACE WITH YOUR URL
      : "https://timerr.vercel.app/api/read",
    {
      method: "POST",
      body: JSON.stringify({
        redirect,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const body = await res.json();
  if (!body.supabase[0]) {
    return {
      notFound: true,
    };
  } else {
    return {
      redirect: {
        destination: body.supabase[0].url,
        permanent: true,
      },
    };
  }
}

export default Wait;

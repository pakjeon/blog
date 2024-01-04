async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { message: 'hello, pakjeon' };
}

export default async function Home() {
  const { message } = await getData();
  return (
    <section>{message}</section>
  )
}

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";


const UserPage: NextPage<{
  title: string,
  id: string,
}> = (props) =>
{
  return (
    <div>
      <h1>User ID = {props.id}</h1>
      <h2>{props.title}</h2>
      <Link href="/user">back</Link>
    </div>
  )
};

export const getStaticPaths: GetStaticPaths = async () =>
{
  const users = (await import('../../lib/stock.json')).default.records;

  const ids = users.map(user => user.id);
  const paths = ids.map(id => ({ params: { id } }));

  return {
    paths, 
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { id }}) =>
{
  const users = (await import('../../lib/stock.json')).default.records;
  const user = users.find(user => user.id === id);

  return {
    props: {
      title: user.t,
      id: user.id,
    },
  };
};


export default UserPage;
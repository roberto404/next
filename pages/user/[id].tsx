import { GetStaticPaths, GetStaticProps, NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import fetch from 'node-fetch';

type User = {
  id: string,
  t: string,
};

// type Respond = {
//   records: User[],
// }

interface Respond {
  records?: User[];
}



const UserPage: NextPage<{
  user: User
}> = (props) =>
{
  console.log(props);
  return (
    <div>
      <h1>User ID = {props.user.id}</h1>
      <h2>{props.user.t}</h2>
      <Link href="/user">back</Link>
    </div>
  )
};

// export const getStaticPaths: GetStaticPaths = async () =>
// {
//   const users = (await import('../../lib/stock.json')).default.records;

//   const ids = users.map(user => user.id);
//   const paths = ids.map(id => ({ params: { id } }));

//   return {
//     paths, 
//     fallback: false
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params: { id }}) =>
// {
//   const users = (await import('../../lib/stock.json')).default.records;
//   const user = users.find(user => user.id === id);

//   return {
//     props: {
//       user,
//     },
//   };
// };



export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) =>
{
  const { id } = params;
  
  // const result = await fetch(
  //   `http://localhost:3000/api/user/${id}`
  // );
  const result = await fetch(
    `https://kontakt2.rs.hu/api/v3/product/`
    // `https://api.github.com/repos/vercel/next.js`
    // `http://localhost:3000/api/user/${id}`
  );

  // console.log(result);
  const respond: Respond = await result.json();

  const user = respond.records.find(product => product.id == id);
  // const user: User = await result.json();

  return {
    props: { user }
  }
}


export default UserPage;
import Link from 'next/link';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import fetch from 'node-fetch';

type User = {
  id: string,
  t: string,
};

const UserIndexPage: NextPage<{
  users: User[]
}> = (props) =>
{
  return (
    <div>
      <h1 className='heavy text-xl'>Users</h1>
      {
        props.users.map(x => (
          <div key={x.id}><Link href={`/user/${x.id}`}>{x.t}</Link></div>
        ))
      }
    </div>
  )
}

export const getStaticProps: GetStaticProps = 
  async () =>
  {
    const users = (await import('../../lib/stock.json')).default.records.slice(0, 100);

    return {
      props:  { users },
    }
  }

// export const getServerSideProps: GetServerSideProps = async ({
//   params,
//   res,
// }) =>
// {
//   // const { id } = params;
//   const result = await fetch(
//     'http://localhost:3000/stock.json'
//   );

//   console.log(result);
//   const users: User = await result.json().records;

//   return {
//     props: { users }
//   }
// }


export default UserIndexPage;
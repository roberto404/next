import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';

const UserIndexPage: NextPage<{
  users: {
    id: string,
    t: string,
  }[]
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
    const users = (await import('../../lib/stock.json')).default.records;

    return {
      props:  { users },
    }
  }

export default UserIndexPage;
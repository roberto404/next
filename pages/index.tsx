import { NextPage } from "next";
import Link from 'next/link';

const IndexPage: NextPage = () =>
{
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/about">go to about</Link>
    </div>
  )
};

export default IndexPage;
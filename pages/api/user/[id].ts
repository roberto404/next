import { NextApiHandler } from "next";

import data from '../../../lib/stock.json'

const user: NextApiHandler = (req, res) =>
{
  const { id } = req.query;

  const record = data.records.find(x => String(x.id) === id);

  if (record)
  {
    res.status(200).json(record);
  }
  else
  {
    res.status(404).end();
  }
}

export default user;
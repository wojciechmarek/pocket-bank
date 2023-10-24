import type { NextApiRequest, NextApiResponse } from "next";

type RequestData = {
  id: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body as RequestData;
  console.log("id", id);
  
  res.status(200).json({ id });
}

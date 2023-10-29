import type { NextApiRequest, NextApiResponse } from "next";
import { loggedIds } from "./common";

type RequestData = {
  id: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body as RequestData;
  const isAuthorized = loggedIds.includes(id);
  res.status(200).json({ isAuthorized });
}

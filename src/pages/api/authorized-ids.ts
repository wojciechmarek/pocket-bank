import type { NextApiRequest, NextApiResponse } from "next";
import { loggedIds, removedLoggedIds } from "./common";

type RequestData = {
  id: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body as RequestData;
  const isAuthorized = loggedIds.includes(id);

  if (isAuthorized) {
    removedLoggedIds.push(id);
  }

  res.status(200).json({ isAuthorized });
}

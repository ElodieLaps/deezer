// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import SearchApi from "@/api/search";
import TrackType from "@/utils/types/track";

type Data = TrackType[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { q: keyword, page: index } = req.query;
  if (keyword) {
    const result = await SearchApi.findSomethingByKeyword(keyword);
    res.status(200).json(result);
  }
  if (keyword && index) {
    const result = await SearchApi.getNextPage(keyword, index);
    res.status(200).json(result);
  }
}

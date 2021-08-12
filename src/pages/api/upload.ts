import prisma from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Is method POST?
  if (req.method == "POST") {
    // Method is post, add new timer, good place to check if all fields are in req.body
    await prisma.links
      .create({
        data: {
          url: req.body.site,
          redirect: req.body.redirect,
        },
      })
      .catch((err) => console.log(err));

    return res.status(200).json({ success: true, redirect: req.body.redirect });
  } else {
    // Method is not POST, return 405 method not allowed
    return res.status(405).json({ success: false, data: "Method not allowed" });
  }
};

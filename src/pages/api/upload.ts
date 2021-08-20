import { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "../../../lib/supabaseClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Is method POST?
  if (req.method == "POST") {
    // Method is post, upload data.
    let site = req.body.site;

    if (
      req.body.site.includes("https://") ||
      req.body.site.includes("http://")
    ) {
      site = req.body.site.split("://")[1];
    }

    const { data, error } = await supabase.from("Links").insert([
      {
        url: `https://${site}`,
        redirect: req.body.redirect,
      },
    ]);
    if (error) return res.status(500).json({ success: false, data: error });

    return res.status(200).json({
      success: true,
      redirect: req.body.redirect,
    });
  } else {
    // Method is not POST, return 405 method not allowed
    return res.status(405).json({ success: false, data: "Method not allowed" });
  }
};

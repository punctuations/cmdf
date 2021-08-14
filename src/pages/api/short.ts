import { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "../../../lib/supabaseClient";
import { emojis, links, pattern } from "../../../lib/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Is method POST?
  if (req.method == "POST") {
    // Method is post, initial checks & generate redirect link & upload data.
    if (!req.body.site)
      // Not acceptable.
      return res.status(406).json({
        success: false,
        data: "Missing site parameter in the body.",
      });

    if (req.body.site.length > 78)
      // Payload too large.
      return res.status(413).json({
        success: false,
        data: "URL is too long, limit of 78 chars.",
        input: `${req.body.site.length} chars received.`,
      });

    if (!Boolean(new URL(req.body.site)))
      // Not acceptable.
      return res.status(406).json({
        success: false,
        data: "The URL does not conform to the URL pattern.",
      });

    let redirect;

    if (req.body.emoji) {
      let i,
        result = [];
      for (i = 0; i < 5; i++) {
        result.push(
          Object.keys(emojis)[(Object.keys(emojis).length * Math.random()) << 0]
        );
      }

      const emojiString: string = await result.join("");

      redirect = emojiString;
    } else {
      redirect = Math.random().toString(16).substr(2, 8);
    }

    // Upload
    const { data, error } = await supabase.from("Links").insert([
      {
        url: req.body.site,
        redirect,
      },
    ]);
    if (error) return res.status(500).json({ success: false, data: error });

    return res.status(200).json({
      success: true,
      default: `https://cmdf.at/${redirect}`,
      redirect,
      links,
    });
  } else {
    // Method is not POST, return 405 method not allowed
    return res.status(405).json({ success: false, data: "Method not allowed" });
  }
};

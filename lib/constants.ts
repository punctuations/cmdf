export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const pattern = new RegExp(
  "^(?!.*[Hh][Tt][Tt][Pp][Ss]?:\\/\\/)" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // fragment locator

export const emojis: { [index: string]: string } = {
  "ð": "smile",
  "ð": "upside_down",
  "ðĪŠ": "quirky",
  "ðĪ": "nerd",
  "ðĪŊ": "mind_blown",
  "ðī": "sleep",
  "ðĐ": "poop",
  "ðŧ": "ghost",
  "ð―": "alien",
  "ðĪ": "robot",
  "ðū": "game",
  "ð": "open",
  "ð": "vulkan",
  "âïļ": "peace",
  "ðĪ": "love",
  "ðĪ": "rock",
  "ðĪ": "call",
  "ð": "wave",
  "ð­": "rat",
  "ðĶ": "dino",
  "ðĶ": "t_rex",
  "ð": "dragon",
  "ðĪĄ": "clown",
  "âïļ": "cloud",
};

export const links = [
  "cmdf.at",
  "kbd.cmdf.at",
  "www.cmdf.at",
  "look.newtab.vc",
  "browser.newtab.vc",
  "open.newtab.vc",
  "a.newtab.vc",
  "please.dont-ping.me",
  "i.told-you.dont-ping.me",
  "i.told.you.dont-ping.me",
  "cmdf.vercel.app",
  "ctrl.vercel.app",
  "option.vercel.app",
  "ampersand.vercel.app",
  "tilde.vercel.app",
  "tilda.vercel.app",
  "backspace.vercel.app",
  "winkey.vercel.app",
  "ctrlf.vercel.app",
  "hyphen.vercel.app",
  "punctuation.vercel.app",
];

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
  "😊": "smile",
  "🙃": "upside_down",
  "🤪": "quirky",
  "🤓": "nerd",
  "🤯": "mind_blown",
  "😴": "sleep",
  "💩": "poop",
  "👻": "ghost",
  "👽": "alien",
  "🤖": "robot",
  "👾": "game",
  "👐": "open",
  "🖖": "vulkan",
  "✌️": "peace",
  "🤟": "love",
  "🤘": "rock",
  "🤙": "call",
  "👋": "wave",
  "🐭": "rat",
  "🦕": "dino",
  "🦖": "t_rex",
  "🐉": "dragon",
  "🤡": "clown",
};

export const links = [
  "cmdf.at",
  "kbd.cmdf.at",
  "www.cmdf.at",
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

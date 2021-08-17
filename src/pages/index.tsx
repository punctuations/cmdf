import Head from "next/head";
import { NextSeo } from "next-seo";

import { motion } from "framer-motion";
import React, { ChangeEvent } from "react";
import Reward, { RewardElement } from "react-rewards";
import { toast, Toaster } from "react-hot-toast";
import { useClipboard } from "use-clipboard-copy";

import {emojis, links} from "../../lib/constants";
import { Socials } from "../../assets/socials";

export default function Home() {
  const clipboard = useClipboard();

  const [site, setSite] = React.useState<string | null>(null);
  const [link, setLink] = React.useState<string>('https://cmdf.at')
  const [emoji, setEmoji] = React.useState<boolean>(false);
  const [redirect, setRedirect] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (redirect) {
      const loading = toast.loading("Uploading...");

      fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({
          site,
          redirect,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .catch((err) => {
          toast("Could not upload", {
            icon: "❌",
            id: loading,
          });
        })
        .finally(() => {
          toast(
            <span>
              Link shortened!
              <button
                className="ml-4 px-2 py-1 rounded duration-300 border-blue-500 bg-blue-500 hover:bg-white text-white hover:text-blue-700 border"
                onClick={() => clipboard.copy(`${link}/${redirect}`)}
              >
                {clipboard.copied ? "Copied!" : "Copy"}
              </button>
            </span>,
            {
              icon: "✅",
              id: loading,
              duration: 10000,
            }
          );
          reward?.rewardMe();
        });
    }
  }, [redirect]);

  let reward: RewardElement | null = null;

  async function upload() {
    if (site && site.length <= 78) {
      if (emoji) {
        let i,
          result = [];
        for (i = 0; i < 5; i++) {
          result.push(
            Object.keys(emojis)[
              (Object.keys(emojis).length * Math.random()) << 0
            ]
          );
        }

        const emojiString: string = await result.join("");

        setRedirect(emojiString);
      } else {
        setRedirect(Math.random().toString(16).substr(2, 8));
      }
    } else {
      reward?.punishMe();
    }
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2f3136" />
      </Head>
      <NextSeo
        title="⌘ + F"
        description="⌘ + F, find a new way to shorten urls"
        openGraph={{
          type: "website",
          url: "https://cmdf.at",
          title: "⌘ + F",
          description: "⌘ + F, find a new way to shorten urls",
          images: [
            {
              url: "/cmd.png",
              width: 400,
              height: 200,
            },
          ],
        }}
        twitter={{
          handle: "@atmattt",
          site: "@atmattt",
          cardType: "summary_large_image",
        }}
      />

      <main className="absolute w-full h-full flex flex-col items-center justify-center space-y-12">
        <Toaster position="top-center" reverseOrder={true} />

        <header>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="font-semibold text-3xl"
          >
            Hello, ⌘ + f!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.1,
            }}
            className="text-gray-400"
          >
            ⌘ + f, find a new way to shorten urls
          </motion.p>
        </header>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="duration-500 transition-shadow shadow-md hover:shadow-lg rounded-md p-6 py-8 grid place-content-center"
        >
          <h6 className="text-gray-500">start shortening :)</h6>
          <form className="flex flex-col space-y-3">
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-700"
            >
              ⌘ + f
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">https://</span>
              </div>
              <input
                id="website"
                name="website"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSite(e.target.value)
                }
                pattern="^(?!.*[Hh][Tt][Tt][Pp][Ss]?:\/\/)(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                className="duration-150 transition-colors focus:outline-none focus:border-black block w-full 2xl:pl-[3.75rem] xl:pl-[3.75rem] lg:pl-[3.75rem] md:pl-[3.75rem] sm:pl-[3.75rem] pl-16 pr-3 py-1 sm:text-sm border border-gray-400 rounded-md"
                placeholder="example.com"
                required
              />
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">&rarr;</span>
              </div>
              <select
                  id="links"
                  name="links"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setLink(e.target.value)
                  }
                  className="duration-150 transition-colors focus:outline-none focus:ring-0 focus:border-black block w-full 2xl:pl-8 xl:pl-8 lg:pl-8 md:pl-8 sm:pl-8 pl-16 pr-3 py-1 sm:text-sm border border-gray-400 rounded-md"
                  required
              >
                {links.map((link) => {
                  return (
                     <option key={link} value={`https://${link}`}>{link}</option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-center">
              <input
                id="emojis"
                name="emojis"
                type="checkbox"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmoji(e.target.value === "on")
                }
                className="form-checkbox ring-0 transition-colors duration-150 h-4 w-4 appearance-none checked:text-black checked:hover:text-gray-800 checked:border-transparent border border-gray-300 rounded"
              />
              <label
                htmlFor="emojis"
                className="ml-2 block text-sm text-gray-900"
              >
                Use emojis
              </label>
            </div>
          </form>

          <button
            onClick={() => upload()}
            className="w-full mt-3 duration-150 transition-colors px-3 py-2 rounded-md border border-gray-400 hover:border-black text-gray-500 hover:text-black"
          >
            Shorten
            <Reward
              ref={(ref) => (reward = ref)}
              type="confetti"
              config={{
                angle: 90,
                springAnimation: false,
                spread: 360,
                elementCount: 150,
              }}
            />
          </button>
        </motion.div>

        <section className="absolute left-5 bottom-5 flex flex-row space-x-4">
          {Socials.map((socials, i) => {
            return (
              <motion.div
                className="duration-500 transition-all text-gray-400 hover:text-gray-700"
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.2 + (i / 100 + 0.05) * 5,
                    ease: [0.48, 0.15, 0.25, 0.96],
                  },
                }}
              >
                {socials}
              </motion.div>
            );
          })}
        </section>
      </main>
    </>
  );
}

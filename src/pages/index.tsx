import React, { ChangeEvent } from "react";
import { emojis } from "../../lib/constants";

export default function Home() {
  React.useEffect(() => {}, []);

  const [site, setSite] = React.useState<string | null>(null);
  const [emoji, setEmoji] = React.useState<boolean>(false);
  const [redirect, setRedirect] = React.useState<string | null>(null);

  function upload() {
    if (emoji) {
      let i,
        result = [];
      for (i = 0; i < 5; i++) {
        result.push(
          emojis[
            Object.keys(emojis)[
              (Object.keys(emojis).length * Math.random()) << 0
            ]
          ]
        );
      }
      setRedirect(result.join(""));
    } else {
      setRedirect(Math.random().toString(16).substr(2, 8));
    }

    fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({
        site,
        redirect,
      }),
    });
  }

  return (
    <main className="absolute w-full h-full flex flex-col items-center justify-center space-y-12">
      <header>
        <h3 className="font-semibold text-3xl">Hello, ⌘ + f!</h3>
        <p className="text-gray-400">⌘ + f, find a new way to shorten urls</p>
      </header>
      <div className="duration-500 transition-shadow shadow-md hover:shadow-lg rounded-md p-6 py-8 grid place-content-center">
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
              className="duration-150 transition-colors focus:outline-none focus:border-black block w-full pl-[3.75rem] pr-3 py-1 sm:text-sm border border-gray-400 rounded-md"
              placeholder="example.com"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              id="emojis"
              name="emojis"
              type="checkbox"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmoji(e.target.value === "on")
              }
              className="form-checkbox transition-colors duration-150 h-4 w-4 appearance-none focus:ring checked:bg-indigo-600 checked:border-transparent border border-gray-300 rounded"
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
          className="mt-3 duration-150 transition-colors px-3 py-2 rounded-md border border-gray-400 hover:border-black text-gray-500 hover:text-black"
        >
          Shorten
        </button>
      </div>
    </main>
  );
}

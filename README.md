![Logo](public/cmd.png)

# cmd + f

Find a new way to shorten urls

---

### API

To use the api you can send a `POST` request to `/api/short`, in the body of the request you can have two fields: site*, and emoji. "site" will contain a link to the place you want to redirect to, i.e. "spotify.com", please do not include any http protocols in the string as only http**s** is supported. "emoji" will be a boolean value for if you want the redirect url (returned by the service) as a random string of numbers and letters or a random string of pre-approved emojis.

### Emojis

If you want to add emojis just go to [`/lib/constants.ts`](https://github.com/punctuations/cmdf/blob/main/lib/constants.ts) and add some new emojis and make a pull request! :)

### Footnotes

"*" meaning required.
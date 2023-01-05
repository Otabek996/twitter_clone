// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import Twitter from "twitter-lite";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


// const client = new Twitter({
//   subdomain: "https://api.twitter.com/1.1/statuses/update.json", // "api" is the default (change for other subdomains)
//   version: "1.1", // version "1.1" is the default (change for other subdomains)
//   consumer_key: "7OVoDU6aYkceIchKLX7K4nbRy", // from Twitter.
//   consumer_secret: "4J8F62EdbafpcsevE0Ytsftz3XEJNeMrQIC307ZYBHHMsA41A3", // from Twitter.
//   access_token_key: "4507587629-a6w6fdRLR001P4lM0M535gCXGKp5yF2nRj3xgiI", // from your User (oauth_token)
//   access_token_secret: "GyFNKQuM4b06tRYKbu2PaLY9tBOJQPDP7J83CgXq8gs5b" // from your User (oauth_token_secret)
// });

// client
// .get("account/verify_credentials")
// .then(results => {
//   console.log("results", results);
// })
// .catch(console.error);
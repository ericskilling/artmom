import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '23f7ad68a607e635c6a318ae80d99e4a806d170b', queries,  });
export default client;
  
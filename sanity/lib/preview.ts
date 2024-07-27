import definePreview from "next-sanity/preview";

import { dataset, projectId,useCdn } from "../env";

const onPublicAccess = () => {
  throw new Error("You need to be logged in to preview content");
};

if(!projectId || !dataset) {
  throw new Error("Missing projectId or dataset");
}


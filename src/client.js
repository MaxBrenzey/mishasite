import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "9wsujgbu",
  dataset: "production",
  useCdn: true,
})
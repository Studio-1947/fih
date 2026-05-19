import { groq } from "next-sanity";

export const EVENTS_QUERY = groq`
  *[_type == "event" && defined(image.asset)] | order(date desc) {
    _id,
    title,
    description,
    image,
    date
  }
`;

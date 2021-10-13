import all from "./content/*.md";
import moment from "moment";

const posts = all.map(({ filename, html, metadata }) => {
  const permalink = filename.replace(/\.md$/, "");
  let Prevdate = new Date(metadata.date);
  const date = moment(Prevdate).format("MMM Do YY");

  return { ...metadata, filename, html, permalink, date };
});
// función para buscar un post
export function findPost(slug) {
  // usamos lodash para encontrar un post por su permalink (nombre de fichero):
  return posts.find((post) => post.permalink === slug);
}

export default posts;

import _ from "lodash";
import all from "./content/*.md";
import moment from 'moment'
import 'moment/locale/es-mx.js';
import { v4 as uuidv4 } from 'uuid';

moment.locale('es-mx');

export const posts = _.chain(all)
  .map(transform)
  .orderBy("date", "desc") // ordenamos los posts por fecha
  .value();

// función para formatear cada post
function transform({ filename, html, metadata }) {
  // el permalink es el nombre del archivo '.md'
  const uid = uuidv4()

  const Prevpermalink = filename.replace(/\.md$/, "");
  const permalink =`${Prevpermalink}-${uid}`

  // convertimos la fecha en un Date
  let Prevdate = new Date(metadata.date);

  const date = moment(Prevdate).format("MMM Do YY");  ;

  // devolvemos el post con el nuevo formato
  return { ...metadata, filename, html, permalink, date };
}

// función para buscar un post
export function findPost(permalink) {
  // usamos lodash para encontrar un post por su permalink (nombre de fichero):
  return _.find(posts, { permalink });
}

export default posts;

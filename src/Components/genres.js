import * as chroma from "chroma-js";
import _ from "lodash";


const firstColour =  "#21ABC0"
const secondColour = "#970C3F"
const thirdColour =  "#22223b"

// order genres by 'seriousness' 
const orderedGenres = [
  "Kids",
  "Comedy",
  "School",
  'Shounen',
  "Shoujo",
  "Fantasy",
  "Super Power",
  "Cars",
  "Sports",
  "Game",
  "Adventure",
  "Action",
  "Demons",
  "Samurai",
  "Supernatural",
  'Magic',
  "Martial Arts",
  "Mecha",
  "Slice of Life",
  "Parody",
  "Romance",
  "Music",
  "Josei",
  "Seinen",  
  "Mystery",
  "Horror",
  "Thriller",
  "Space",
  "Police",
  "Military",
  "Drama",
  "Historical",
  'Sci-Fi',
  "Psychological",
  "Dementia",
]

// these genres not included in the above list 
const hentaiGenres = [
  'Hentai',
  "Ecchi",
  "Harem",
  "Shounen Ai",
  "Shoujo Ai",
  "Yaoi",
  "Yuri",
]

const colourScaleOrderedGenres = chroma.scale([firstColour, secondColour, thirdColour]
  .map(color => chroma(color).brighten(0))
  .map(color => chroma(color).saturate(0.1))
  )
  //.mode('lrgb') // hsl lrgb lab
  .colors(orderedGenres.length)



export { orderedGenres, hentaiGenres, colourScaleOrderedGenres }
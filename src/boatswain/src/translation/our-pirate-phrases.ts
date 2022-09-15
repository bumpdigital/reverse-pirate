import { Dictionary } from "./dictionary";

// This is a case sensitive list and includes:
// 1. Our terminology that we want to replace with specifically piratey words
// 2. Pirate names for community members
// 3. Other replacements where case matters (general names, terminology)
// Text replacements are run in order, bear that mind if you need to, or don't want to, run subsequent replacements
const piratePhrases: Dictionary<string> = {

  // common 'our' terms.
  "our.umbraco.com": "arrr.umbraco.community",
  "Our Umbraco": "Arrr Umbraco",
  "karma points": "doubloons",

  "c-trib": "Shipwright",
  "MVP": "Mate",
  "Mate 12x": "Pirate Lord",
  "Mate 11x": "Admiral",
  "Mate 10x": "Commodore",
  "Mate 9x": "Captain",
  "Mate 8x": "Quartermaster",
  "Mate 7x": "Boatswain",
  "Mate 6x": "Sailing Master",
  "Mate 5x": "Gunner",
  "Mate 4x": "Carpenter",
  "Mate 3x": "Master at Arms",
  "Mate 2x": "Armourer",
  "HQ": "Home Port",

  "Privacy Policy" : "Piracy Policy",

  // people - community members, package owners, MVPs etc.

  "Corné Hoskam": "Corné Yo-ho-hoskam",
  "Jason Elkin": "Jason \"Ahoy\" Elkin",
  "Jesper Mayntzhusen": "Jesper Mayntz-båten",
  "Joke Van Hamme": "Jo-ho-ho-ke Van Hamme",
  "mattou07": "Matthew Harrrt",
  "Nurhak Kaya": "Nurhak Kayarrr",
  "Shannon Deminick": "Shannon \"The Cannon\" Deminick",
  "Alex Skrypnyk (skrypnyk.dev)": "Alex \"Skull\" Skrypnyk",
  "Anders Bjerner": "Anders \"The Bear\" Bjerner",
  "Bjarne Fyrstenborg": "Bjarne Fyrsten-skib",
  "Busra Sengul": "Busra Seagul",
  "Callum Whyte": "Callum Great-white",
  "Carl": "Caarl",
  "Carole Logan": "Caarrrole Logan",
  "Chad": "\"Chain-shot\" Chad",
  "Chriztian Steinmeier": "Chriztian Meer-meier",
  "Damiaan": "Deck Hand Damiaan",
  "Danny Lancaster": "Danny Lancastarr",
  "Dave Woestenborghs": "Davy Jones-Woestenborghs",
  "David Brendel": "Davy Jones-Brendel",
  "Dennis Adolfi": "Dennis \"Redbeard\" Adolfi",
  "Emma Garland": "Emma Garland-Ahoy!",
  "Emmanuel Tissera": "Emmanuel \"Tricorn\" Tissera",
  "Erica Quessenberry": "Erica Queen-o'-the-sea",
  "Erik-Jan Westendorp": "Erik-Jan Westen-zee",
  "Frans de Jong": "\"Fearless\" Frans de Jong",
  "Heather Floyd": "Heather Flotsam",
  "Henk Boelman": "Henk Bow-man",
  "Jan Skovgaard": "Jan Skovg-aarrr-d",
  "Janae Cram": "Janae Clam",
  "Jeavon Leopold": "Jetsam Leopold",
  "jeffrey@umarketingsuite.com": "Jeffrey Schooner-maker",
  "Joe Glombek": "Jonah Glombek",
  "Karl Tynan": "Karl Tie-him-to-the-mast Tynan",
  "Kenn Jacobsen": "Ye Kenn Walk-The-Plank Jacobsen",
  "Kevin Jump": "Kevin Jump-Off-The-Plank",
  "Kyle Weems": "Kyle W. Smee",
  "Lars-Erik Aabech": "Larrs-Erik Aarrbech",
  "Laura Weatherhead": "Laurarr Weatharrhead",
  "Lee Kelleher": "Lee \"Keelhauling\" Kelleher",
  "Lennard Fonteijn": "One-legged Lennard Fonteijn",
  "Lotte Pitcher": "Looty Pitcharr",
  "Marc Goodson": "Marc Goldson",
  "Marcin Zajkowski": "Marcin \"Why is the rum gone?\" Zajkowski",
  "Mario": "Mariner Mario",
  "Matt Brailsford": "Matt \"Blackbeard\" Brailsford",
  "Matthew Wise": "Matthew \"One-eyed\" Wise",
  "Michael Latouche": "Michael Land-lubber Latouche",
  "Mike Masey": "Mike Matey",
  "Nathan Woulfe": "Nathan Sea-wolf",
  "Nik": "Nik-ing-all-yo-booty",
  "Owain Jones": "Owaine \"Davy\" Jones",
  "Owain Williams": "Owaine \"One-Eyed\" Williams",
  "Patrick de Mooij": "\"Pegleg\" Patrick de Mooij",
  "Paul Seal": "Paul \"Seadog\" Seal",
  "Paul Sterling": "Paul Pound-Sterling",
  "Phil Whittaker": "Phil-me-treasure-chest Whittaker",
  "Poornima Nayar": "Poornimarr Nayarr",
  "Rachel Breeze": "Rachel \"Three Sheets to the\" Breeze",
  "Ravi Motha": "Ravi \"The Ravager\" Motha",
  "Richard Ockerby": "Riches Ockerby",
  "Sophie": "Swabbie Sophie",
  "Søren Kottal": "Søren \"Swabbie\" Kottal",
  "Tiffany": "Tricorn Tiff",
  "Tim": "Tim-oneer",
  "Tom Madden": "Tom \"Man o' War\" Madden",

  // packages

  "Bergmania.OpenStreetMaps": "Bergmania.OpenSeaCharts",
  "Terratype": "Aquatype",
  "Umbraco Forms": "Umbraco Parchment",
  "Contentment": "Be Ye Contented?",

  // other
  "John": "Long John",
}

export const phrases = new Map(Object.entries(piratePhrases));
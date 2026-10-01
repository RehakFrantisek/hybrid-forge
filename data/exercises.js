const EXERCISES = [
  {
    "id": "breathing",
    "name": "Dýchání",
    "category": "mobilita/core",
    "focus": "bránice, žebra, core",
    "note": "Klidný nádech do 360° trupu; bez zvedání ramen.",
    "aliases": [
      "Dýchání"
    ],
    "image": "assets/exercises/breathing.svg"
  },
  {
    "id": "pelvic_tilt",
    "name": "Pánevní tlak",
    "category": "aktivace",
    "focus": "pánev, hluboký core",
    "note": "Jemně podsadit/povolit pánev bez bolesti.",
    "aliases": [
      "Pánevní tlak"
    ],
    "image": "assets/exercises/pelvic_tilt.svg"
  },
  {
    "id": "glute_bridge",
    "name": "Glute bridge",
    "category": "síla",
    "focus": "hýždě, zadní řetězec",
    "note": "Žebra dole, tlak přes celé chodidlo, nahoře zatnout hýždě.",
    "aliases": [
      "Glute bridge"
    ],
    "image": "assets/exercises/glute_bridge.svg"
  },
  {
    "id": "bird_dog",
    "name": "Bird dog",
    "category": "core",
    "focus": "stabilita trupu, kyčle",
    "note": "Pánev držet rovně, neprohýbat bedra.",
    "aliases": [
      "Bird dog"
    ],
    "image": "assets/exercises/bird_dog.svg"
  },
  {
    "id": "plank",
    "name": "Plank",
    "category": "core",
    "focus": "anti-extension core",
    "note": "Tělo v jedné linii, hýždě a břicho aktivní.",
    "aliases": [
      "Plank",
      "Lehký plank"
    ],
    "image": "assets/exercises/plank.svg"
  },
  {
    "id": "side_plank",
    "name": "Side plank",
    "category": "core",
    "focus": "šikmé břišní, glute medius",
    "note": "Pánev vysoko a v jedné linii.",
    "aliases": [
      "Side plank"
    ],
    "image": "assets/exercises/side_plank.svg"
  },
  {
    "id": "tibialis_raise",
    "name": "Zvedání špiček",
    "category": "prehab",
    "focus": "tibialis anterior",
    "note": "Paty zůstávají na zemi, špičky vytáhnout vzhůru.",
    "aliases": [
      "Zvedání špiček"
    ],
    "image": "assets/exercises/tibialis_raise.svg"
  },
  {
    "id": "wall_angels",
    "name": "Wall angels",
    "category": "mobilita",
    "focus": "hrudník, lopatky, ramena",
    "note": "Žebra neutrálně, pohyb bez násilného rozsahu.",
    "aliases": [
      "Wall angels"
    ],
    "image": "assets/exercises/wall_angels.svg"
  },
  {
    "id": "push_up",
    "name": "Kliky",
    "category": "síla",
    "focus": "hrudník, triceps, core",
    "note": "Tělo zpevněné, lokty přibližně 30–45° od trupu.",
    "aliases": [
      "Kliky",
      "Kliky těžší varianta"
    ],
    "image": "assets/exercises/push_up.svg"
  },
  {
    "id": "band_row",
    "name": "Přítahy gumy",
    "category": "síla",
    "focus": "záda, lopatky",
    "note": "Táhnout lokty dozadu, ramena netahat k uším.",
    "aliases": [
      "Přítahy gumy",
      "Přítahy gumy pomalu"
    ],
    "image": "assets/exercises/band_row.svg"
  },
  {
    "id": "bulgarian_split_squat",
    "name": "Bulharské dřepy",
    "category": "síla",
    "focus": "kvadriceps, hýždě, stabilita kyčle",
    "note": "Koleno sleduje směr špičky, stabilní pánev.",
    "aliases": [
      "Bulharské dřepy"
    ],
    "image": "assets/exercises/bulgarian_split_squat.svg"
  },
  {
    "id": "db_rdl",
    "name": "DB RDL / hip hinge",
    "category": "síla",
    "focus": "hamstringy, hýždě",
    "note": "Kyčle dozadu, neutrální páteř, váha blízko těla.",
    "aliases": [
      "DB RDL / hip hinge",
      "Hip hinge s gumou / DB RDL",
      "Hip hinge s gumou"
    ],
    "image": "assets/exercises/db_rdl.svg"
  },
  {
    "id": "assisted_nordic",
    "name": "Nordic hamstring asistovaný",
    "category": "síla",
    "focus": "hamstringy",
    "note": "Kontrolovat excentrickou fázi, dopomoc podle potřeby.",
    "aliases": [
      "Nordic hamstring asistovaný"
    ],
    "image": "assets/exercises/assisted_nordic.svg"
  },
  {
    "id": "ab_wheel",
    "name": "Kolečko",
    "category": "core",
    "focus": "anti-extension core",
    "note": "Rozsah jen takový, kde udržíš žebra a pánev.",
    "aliases": [
      "Kolečko"
    ],
    "image": "assets/exercises/ab_wheel.svg"
  },
  {
    "id": "wall_sit",
    "name": "Wall sit",
    "category": "síla",
    "focus": "kvadriceps",
    "note": "Celá záda opřená, kolena stabilní.",
    "aliases": [
      "Wall sit"
    ],
    "image": "assets/exercises/wall_sit.svg"
  },
  {
    "id": "hollow_hold",
    "name": "Hollow hold",
    "category": "core",
    "focus": "hluboký core",
    "note": "Bedra držet u podložky; zkrátit páku při ztrátě pozice.",
    "aliases": [
      "Hollow hold"
    ],
    "image": "assets/exercises/hollow_hold.svg"
  },
  {
    "id": "overhead_press",
    "name": "Overhead press",
    "category": "síla",
    "focus": "ramena, triceps, core",
    "note": "Nevytlačovat přes prohnutí beder.",
    "aliases": [
      "Overhead press",
      "Overhead press s gumou / DB",
      "Overhead press s gumou"
    ],
    "image": "assets/exercises/overhead_press.svg"
  },
  {
    "id": "single_leg_hip_thrust",
    "name": "Jednonožní hip thrust",
    "category": "síla",
    "focus": "hýždě, stabilita pánve",
    "note": "Pánev držet vodorovně, nahoře plná extenze kyčle.",
    "aliases": [
      "Jednonožní hip thrust"
    ],
    "image": "assets/exercises/single_leg_hip_thrust.svg"
  },
  {
    "id": "dead_bug",
    "name": "Dead bug",
    "category": "core",
    "focus": "stabilita trupu",
    "note": "Bedra stabilní, pomalý kontrolovaný pohyb.",
    "aliases": [
      "Dead bug"
    ],
    "image": "assets/exercises/dead_bug.svg"
  },
  {
    "id": "face_pull",
    "name": "Face pull",
    "category": "síla/prehab",
    "focus": "zadní delty, lopatky",
    "note": "Táhnout k obličeji, lopatky kontrolovaně dozadu.",
    "aliases": [
      "Face pull"
    ],
    "image": "assets/exercises/face_pull.svg"
  },
  {
    "id": "y_raise",
    "name": "Y raise",
    "category": "prehab",
    "focus": "dolní trapéz, lopatky",
    "note": "Lehká zátěž, palce vzhůru, bez krčení ramen.",
    "aliases": [
      "Y raise"
    ],
    "image": "assets/exercises/y_raise.svg"
  },
  {
    "id": "90_90_switch",
    "name": "90/90 hip switches",
    "category": "kyčle",
    "focus": "vnitřní/vnější rotace kyčlí",
    "note": "Přecházet kontrolovaně mezi stranami bez švihu.",
    "aliases": [
      "90/90 hip switches"
    ],
    "image": "assets/exercises/90_90_switch.svg"
  },
  {
    "id": "cossack_squat",
    "name": "Cossack squat",
    "category": "kyčle/síla",
    "focus": "adduktory, kyčle, kotník",
    "note": "Přesun váhy do strany, druhá noha dlouhá; rozsah bez bolesti.",
    "aliases": [
      "Cossack squat"
    ],
    "image": "assets/exercises/cossack_squat.svg"
  },
  {
    "id": "half_kneeling_hip_flexor",
    "name": "Half-kneeling hip flexor stretch",
    "category": "kyčle/mobilita",
    "focus": "flexory kyčle",
    "note": "Podsadit pánev a zatnout hýždi zadní nohy; neprohýbat bedra.",
    "aliases": [
      "Half-kneeling hip flexor stretch",
      "Half-kneeling hip flexor stretch + glute squeeze"
    ],
    "image": "assets/exercises/half_kneeling_hip_flexor.svg"
  },
  {
    "id": "adductor_rockback",
    "name": "Adductor rock-back",
    "category": "kyčle/mobilita",
    "focus": "adduktory",
    "note": "Jedna noha do strany, kyčle pomalu dozadu při neutrální páteři.",
    "aliases": [
      "Adductor rock-back"
    ],
    "image": "assets/exercises/adductor_rockback.svg"
  },
  {
    "id": "straddle_leg_lift",
    "name": "Seated straddle leg lift / compression",
    "category": "kyčle/core",
    "focus": "flexory kyčle, komprese",
    "note": "Sed vzpřímeně; zvednout jednu nebo obě natažené nohy bez švihu.",
    "aliases": [
      "Seated straddle leg lift / compression"
    ],
    "image": "assets/exercises/straddle_leg_lift.svg"
  }
];

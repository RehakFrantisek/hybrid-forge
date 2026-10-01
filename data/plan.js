const PLAN_VERSION = "2026-q4-hips";
const SEED = [
  {
    "date": "28.09.2026",
    "day": "Pondělí",
    "morning": "",
    "evening": "",
    "blank": true
  },
  {
    "date": "29.09.2026",
    "day": "Úterý",
    "morning": "",
    "evening": "",
    "blank": true
  },
  {
    "date": "30.09.2026",
    "day": "Středa",
    "morning": "",
    "evening": "",
    "blank": true
  },
  {
    "date": "01.10.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "02.10.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 18 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "03.10.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 50 min (Z2)"
  },
  {
    "date": "04.10.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "05.10.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 6x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "06.10.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "07.10.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "08.10.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "09.10.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 20 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "10.10.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 55 min (Z2)"
  },
  {
    "date": "11.10.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "12.10.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 7x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "13.10.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "14.10.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "15.10.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "16.10.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 22 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "17.10.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 60 min (Z2)"
  },
  {
    "date": "18.10.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "19.10.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 8x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "20.10.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "21.10.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "22.10.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 3x8–10\nPřítahy gumy pomalu – 3x10\nOverhead press s gumou / DB – 2x10\nJednonožní hip thrust – 2x10/strana\nCossack squat – 2x5/strana\nSide plank – 2x30 s\nDead bug – 2x10\nFace pull – 2x12"
  },
  {
    "date": "23.10.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 15 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "24.10.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 45 min (Z2)"
  },
  {
    "date": "25.10.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "26.10.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 5x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "27.10.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 3 série (RIR 1–2)\nPřítahy gumy – 3x12\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 3x10\nNordic hamstring asistovaný – 2x6\nKolečko – 2x8–10\nWall sit – 2x40 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "28.10.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Lehký běh / svižná chůze Z1–Z2 – 25–30 min"
  },
  {
    "date": "29.10.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "30.10.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 18 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "31.10.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 50 min (Z2)"
  },
  {
    "date": "01.11.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "02.11.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 6x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "03.11.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "04.11.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "05.11.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "06.11.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 20 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "07.11.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 55 min (Z2)"
  },
  {
    "date": "08.11.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "09.11.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 7x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "10.11.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "11.11.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "12.11.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "13.11.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 22 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "14.11.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 60 min (Z2)"
  },
  {
    "date": "15.11.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "16.11.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 8x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "17.11.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "18.11.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "19.11.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 3x8–10\nPřítahy gumy pomalu – 3x10\nOverhead press s gumou / DB – 2x10\nJednonožní hip thrust – 2x10/strana\nCossack squat – 2x5/strana\nSide plank – 2x30 s\nDead bug – 2x10\nFace pull – 2x12"
  },
  {
    "date": "20.11.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 15 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "21.11.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 45 min (Z2)"
  },
  {
    "date": "22.11.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "23.11.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 5x400 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "24.11.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 3 série (RIR 1–2)\nPřítahy gumy – 3x12\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 3x10\nNordic hamstring asistovaný – 2x6\nKolečko – 2x8–10\nWall sit – 2x40 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "25.11.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Lehký běh / svižná chůze Z1–Z2 – 25–30 min"
  },
  {
    "date": "26.11.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "27.11.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 22 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "28.11.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 60 min (Z2)"
  },
  {
    "date": "29.11.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "30.11.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 5x600 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "01.12.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "02.12.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "03.12.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "04.12.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 25 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "05.12.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 65 min (Z2)"
  },
  {
    "date": "06.12.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "07.12.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 5x600 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "08.12.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "09.12.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "10.12.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "11.12.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 25 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "12.12.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 70 min (Z2)"
  },
  {
    "date": "13.12.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "14.12.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 6x600 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "15.12.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "16.12.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "17.12.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 3x8–10\nPřítahy gumy pomalu – 3x10\nOverhead press s gumou / DB – 2x10\nJednonožní hip thrust – 2x10/strana\nCossack squat – 2x5/strana\nSide plank – 2x30 s\nDead bug – 2x10\nFace pull – 2x12"
  },
  {
    "date": "18.12.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 18 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "19.12.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 50 min (Z2)"
  },
  {
    "date": "20.12.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "21.12.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 4x600 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "22.12.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 3 série (RIR 1–2)\nPřítahy gumy – 3x12\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 3x10\nNordic hamstring asistovaný – 2x6\nKolečko – 2x8–10\nWall sit – 2x40 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "23.12.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Lehký běh / svižná chůze Z1–Z2 – 25–30 min"
  },
  {
    "date": "24.12.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  },
  {
    "date": "25.12.2026",
    "day": "Pátek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nTempo běh – 22 min\nVýklus – 5–8 min\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "26.12.2026",
    "day": "Sobota",
    "morning": "Mobilita – 15 min\nLehký plank – 2x30 s",
    "evening": "Dlouhý běh – 60 min (Z2)"
  },
  {
    "date": "27.12.2026",
    "day": "Neděle",
    "morning": "Mobilita / regenerace – 25–35 min\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana\n\nFace pull – 3x15\nY raise – 2x15",
    "evening": "Volno"
  },
  {
    "date": "28.12.2026",
    "day": "Pondělí",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Lehce – 10 min\nIntervaly – 5x600 m\nMeziklus – 200 m\nVýklus – 5–8 min"
  },
  {
    "date": "29.12.2026",
    "day": "Úterý",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Švihadlo – 8–10x45 s\nKliky – 4 série (RIR 1–2)\nPřítahy gumy – 4x15\nBulharské dřepy – 3x10 každá noha\nHip hinge s gumou / DB RDL – 4x10–12\nNordic hamstring asistovaný – 3x6\nKolečko – 3x8–12\nWall sit – 3x45 s\n\nCORE FINISHER (8–10 min):\nHollow hold – 3x30 s\nKolečko – 3x8\nSide plank – 2x40 s"
  },
  {
    "date": "30.12.2026",
    "day": "Středa",
    "morning": "Mobilita – 15–20 min\nRoller lýtek\nMobilita kotníku\n\nHIP FLOW (8–12 min):\n90/90 hip switches – 2x8/strana\nCossack squat – 2x6/strana\nHalf-kneeling hip flexor stretch + glute squeeze – 2x30 s/strana\nAdductor rock-back – 2x8/strana\nSeated straddle leg lift / compression – 2x6–8/strana",
    "evening": "Běh Z2 – 30 min"
  },
  {
    "date": "31.12.2026",
    "day": "Čtvrtek",
    "morning": "Dýchání – 2 min\nPánevní tlak – 3x8\nGlute bridge – 2x15\nBird dog – 2x10\nPlank – 2x35 s\nSide plank – 2x35 s\nZvedání špiček – 2x15\nWall angels – 2x12",
    "evening": "Kliky těžší varianta – 4x8–12\nPřítahy gumy pomalu – 4x12\nOverhead press s gumou / DB – 3x10–12\nJednonožní hip thrust – 3x12/strana\nCossack squat – 3x6/strana\nSide plank – 3x40 s\nDead bug – 3x12\nFace pull – 3x15"
  }
];

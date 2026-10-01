# Hybrid Forge

Hybrid Forge je osobní **Hybrid Training System**: jednoduchá statická PWA pro běh, sílu, core a mobilitu. Tréninkový program HYBRID začíná 1. 10. 2026. První týden je 28. 9.–4. 10. 2026; 28.–30. 9. nemá naplánovaný trénink.

Aplikace nabízí týdenní kalendář pondělí–neděle, responzivní mobilní zobrazení, Done / Undo, úpravu tréninku, přehled dokončení a JSON export/import. Poslední týden obsahuje pouze zbývající dny dodaného plánu.

## Lokální spuštění

Stačí Python 3; není potřeba instalace balíčků ani build:

```sh
cd hybrid-forge
python3 -m http.server 8000 --bind 127.0.0.1
```

V prohlížeči otevřete `http://localhost:8000`. Neotevírejte přímo `index.html` přes `file://`; service worker vyžaduje HTTP na localhostu nebo HTTPS.

## Struktura

- `index.html` — stránka aplikace a dialog úpravy tréninku.
- `app.js` — původní tréninkový plán, kalendář, stav a JSON zálohy.
- `style.css` — desktopový a mobilní vzhled.
- `manifest.webmanifest` — název, rozsah a ikony instalovatelné PWA.
- `service-worker.js` — offline cache souborů aplikace.
- `icons/` — PNG ikony 192 × 192 a 512 × 512.

## Data a instalace

Stav se ukládá do **localStorage** konkrétního prohlížeče a webové adresy. Data se zatím **nesynchronizují mezi zařízeními**. Vymazání dat webu je odstraní; pravidelně používejte Export JSON. Zálohu lze obnovit přes Import JSON. Původní klíč úložiště je zachován pro kompatibilitu se stávající verzí. Změna domény nebo portu znamená jiné úložiště.

Jde o installable PWA: v podporovaném prohlížeči použijte instalaci aplikace nebo „Přidat na plochu“. Po prvním úspěšném načtení a aktivaci service workeru funguje i offline. Podpora instalace závisí na prohlížeči a zařízení.

## Statický deployment

Publikujte obsah repozitáře na HTTPS statický hosting, například GitHub Pages z větve `main`, složky `/ (root)`. Build příkaz ani backend nejsou potřeba. Relativní cesty podporují kořen domény i podadresář `/hybrid-forge/`. Hosting musí zpřístupnit manifest, service worker a ikony bez přihlašování a vracet správné MIME typy.

Při změně souborů aplikace zvyšte verzi `CACHE` v `service-worker.js`. Nový worker se aktivuje po zavření starých oken aplikace; pak aplikaci znovu otevřete. Při vývoji lze cache a worker odstranit v nástrojích prohlížeče. Samotné obnovení stránky může načíst starou offline verzi.

## Kontrola před vydáním

Volitelně zkontrolujte syntaxi pomocí Node.js:

```sh
node --check app.js
node --check service-worker.js
```

Přes lokální HTTP server ověřte první týden, navigaci, Done / Undo, editaci, přehled, zachování stavu po obnovení a export/import. Neplatný import nesmí přepsat data. Zkontrolujte mobilní i desktopové rozměry, načtení všech souborů a offline obnovení po aktivaci workeru. Při mazání tréninku zůstává datum v kalendáři, aby se neposunuly týdny.

Projekt nemá framework, build proces, backend, autentizaci ani cloudovou synchronizaci. GitHub repozitář je zdrojem pravdy pro další vývoj.

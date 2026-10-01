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
- `app.js` — kalendář, stav a JSON zálohy.
- `data/plan.js` — aktualizovaný plán 1. 10.–31. 12. 2026 z Excelu.
- `data/exercises.js` a `exercises.js` — knihovna 26 cviků, hledání a propojení tréninků.
- `assets/exercises/` — původní SVG ilustrace, dostupné také offline.
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

## Cviky a aktualizovaný plán

Záložka **Cviky** obsahuje všech 26 cviků z listu KNIHOVNA CVIKŮ dodaného Excelu. Hledání funguje podle názvu, kategorie a partie i bez diakritiky. Kliknutí na podtržený cvik v kalendáři otevře detail se schematickou ilustrací a původní technickou poznámkou. Varianty kliků, planku a přítahů odkazují na základní cvik. Běžecké úseky a obecné bloky mobility bez záznamu v dodané knihovně zůstávají textem.

Obrázky jsou původní lokální SVG schémata orientační polohy, nikoli fotografické návody ani kompletní pohybové sekvence. Aplikace nestahuje obrázky z cizích serverů. Původ dat je popsán v `data/source.md`; měření z listů INPUT a ANALYTICS se neimportují.

Nová instalace používá plán do 31. 12. 2026. Pokud už existuje uložený plán, aplikace jej **automaticky nepřepíše**. V kalendáři nabídne „Použít nový plán“. Po potvrzení nejprve uloží původní stav do samostatné zálohy localStorage, poté nahradí tréninky a zachová označení Done podle dat. Zálohu lze stáhnout v Nastavení přes „Export plánu před aktualizací“ a obnovit standardním JSON importem. Vlastní úpravy tréninků zůstávají v záloze, nepřenášejí se do nového plánu. Při nedostatku místa se aktualizace neprovede.

## Automatické ověření

Volitelný test `python3 tests/smoke.py` vyžaduje Python balíček Playwright a Chromium (výchozí `/usr/bin/chromium`, lze změnit proměnnou `CHROMIUM_PATH`). Testuje knihovnu, obrázky, hledání, mobilní layout, aktualizaci plánu se zálohou, zachování dat a offline načtení pod podadresářem. Testovací nástroje nejsou závislostí aplikace ani podmínkou nasazení.

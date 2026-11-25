# esame-fe2-sassone

Applicazione React + TypeScript per la prova di fine modulo (M9), basata sul wireframe presente in `traccia/prototipo` e collegata alle API di TMDB.

## Funzionalità

- **Elenco film (`/`)**: carica la prima pagina dei risultati fissi per `The Lord of the Rings` (massimo 20 elementi, senza filtri o paginazione).
- **Dettaglio film (`/movies/:id`)**: legge l'`id` dall'URL e mostra i dettagli completi del film selezionato.
- **Shell condivisa**: entrambe le pagine usano lo stesso layout con `Header` e `Outlet` di React Router.

## Avvio in locale

```bash
npm install
npm run dev
```

Per creare la build di produzione:

```bash
npm run build
```

## Struttura principale

- `src/types/movie.ts` — tipi TypeScript per elenco, dettaglio (`MovieDetail`) e props
- `src/components/Header.tsx` — intestazione con brand e link alla home
- `src/components/Shell.tsx` — layout condiviso con `Header` e `Outlet`
- `src/components/MovieCard.tsx` — card del singolo film nell'elenco
- `src/pages/MoviesPage.tsx` — pagina elenco (`/`)
- `src/pages/MovieDetailPage.tsx` — pagina dettaglio (`/movies/:id`)
- `traccia/` — traccia della prova, prototipo HTML/CSS e scheda componente Word

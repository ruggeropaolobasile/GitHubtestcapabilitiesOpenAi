# Bonifica del repository

Questa bonifica è di tipo conservativo: non rimuove file esistenti, ma rende il repository più leggibile e governabile.

## Obiettivi

- chiarire lo scopo delle cartelle
- separare esempi, documentazione e test
- rendere più semplice la lettura da parte del connettore GitHub
- predisporre il repository a review future

## Struttura desiderata

- `.github/` : template e workflow
- `docs/` : documentazione operativa
- `examples/` : esempi dimostrativi
- `src/` : codice minimo ma leggibile
- `tests/` : test ed esercizi di review

## Azioni di bonifica già effettuate

- aggiunta roadmap
- aggiunto troubleshooting
- aggiunti target di ricerca e TODO
- aggiunto modulo `src/sample_module.js`
- separata una branch di demo per differenze controllate

## Azioni future consigliate

- introdurre naming più coerente per gli esempi
- aggiungere un indice generale dei documenti
- aprire una PR di consolidamento quando il layer della piattaforma lo consente

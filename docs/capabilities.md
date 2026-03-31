# Capabilities da testare con il connettore GitHub

Questo documento raccoglie alcune capacità operative che il connettore GitHub può abilitare quando un repository contiene file reali.

## Lettura repository

- leggere metadata repository
- leggere file specifici
- cercare simboli, stringhe e TODO
- identificare entry point e struttura

## Analisi modifiche

- confrontare commit
- confrontare branch
- ispezionare patch e diff di una pull request
- elencare file cambiati

## Collaborazione

- leggere issue
- leggere pull request
- commentare PR
- reagire a commenti e review

## Scrittura

- creare file
- creare branch
- aggiornare contenuti
- aprire pull request

## Prompt utili

### Repository discovery
- Mappami il repository e spiegami la struttura.
- Elenca i file principali e descrivine lo scopo.

### Code search
- Cerca tutti i riferimenti a capability.
- Cerca i file che parlano di connector o GitHub.

### Review
- Riassumi le ultime modifiche come farebbe un senior reviewer.
- Dimmi quali test mancano.

### Evolution
- Proponi una struttura migliore per trasformare questo repo in una demo più ricca.
- Crea una branch con una cartella `examples/` e contenuti aggiuntivi.

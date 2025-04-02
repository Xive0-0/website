# 📌 Website

Website è un progetto creato per provare **V0** e testarne le funzionalità.

![Next.js Logo](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg)

![Vercel Logo](https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png)

## 🚀 Tecnologie Utilizzate
- [V0](https://v0.dev/) per la generazione dell'interfaccia utente
- [Next.js](https://nextjs.org/) come framework per il frontend
- [Vercel](https://vercel.com/) per il deploy e l'hosting

## 📂 Struttura del Progetto
```
/ 📁 website
 ├── 📁 public       # File statici
 ├── 📁 src
 │   ├── 📁 components  # Componenti UI
 │   ├── 📁 pages       # Pagine Next.js
 │   ├── 📁 styles      # Fogli di stile
 │   ├── 📁 utils       # Funzioni di utilità
 ├── .env.local      # Variabili d'ambiente
 ├── next.config.js  # Configurazione Next.js
 ├── package.json    # Dipendenze e script
 ├── README.md       # Documentazione del progetto
```

## 💻 Installazione e Avvio Locale

1. Clonare il repository:
   ```sh
   git clone https://github.com/tuo-username/website.git
   ```
2. Entrare nella cartella del progetto:
   ```sh
   cd website
   ```
3. Installare le dipendenze:
   ```sh
   npm install
   ```
4. Creare un file `.env.local` e aggiungere eventuali variabili d'ambiente necessarie.
5. Avviare il server di sviluppo:
   ```sh
   npm run dev
   ```
6. L'app sarà disponibile su `http://localhost:3000`

## 🌍 Deploy su Vercel

Il progetto è deployato su **Vercel**. Ogni push su `main` triggera automaticamente un nuovo deploy.

### Deploy manuale:
Se vuoi effettuare un deploy manuale:
1. Installare il CLI di Vercel (se non già installato):
   ```sh
   npm install -g vercel
   ```
2. Connettere il progetto a Vercel:
   ```sh
   vercel
   ```
3. Effettuare il deploy:
   ```sh
   vercel --prod
   ```

## 🛠️ Personalizzazione
Se vuoi modificare il design dell'interfaccia generata con V0, puoi:
- Modificare direttamente i file in `src/components`
- Utilizzare la documentazione di V0 per personalizzare i componenti

## 📜 Licenza
Specificare il tipo di licenza del progetto (MIT, GPL, ecc.).

---
📩 Per qualsiasi domanda o suggerimento, contattami su [email o link a un profilo social].


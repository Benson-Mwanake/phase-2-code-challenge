# Smart Goal Planner

Smart Goal Planner is a simple React app for managing your financial goals. You can:

* Create savings goals with name, category, target amount, and deadline
* View progress with a progress bar
* Add money toward your goals
* See when goals are completed
* Delete goals

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:Benson-Mwanake/phase-2-code-challenge.git
cd smart-goal-planner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```


### 4. Build for production

```bash
npm run build
```

## Folder Structure

* `src/` – React components and CSS
* `db.json` – JSON Server database

## Backend (JSON Server)

To start JSON Server:

```bash
npx json-server --watch db.json --port 3000
```

Make sure it runs on `http://localhost:3000`

## Technologies Used

* React
* Vite
* JSON Server
* Plain CSS

## License

MIT


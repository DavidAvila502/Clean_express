import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import mainRoutes from "./routes/index.js";

// * App init ----
const app = express();

app.set("PORT", process.env.PORT);

// * Middlewares settigns ----

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// * Routes ----

app.get("/", (request, response) => {
   return response.json({ message: "API V1.0" });
});

app.use(mainRoutes);

app.use((req, res, next) => {
   res.status(404).send("<h1>Pagina no encontrada</h1>");
});

//  * Run API ----

app.listen(app.get("PORT"), () => {
   console.log(`Server listening on port: ${app.get("PORT")}`);
});

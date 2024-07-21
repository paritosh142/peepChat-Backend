import cors from "cors";

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};

const PEEP_CHAT_TOKEN = "peepChaToken";

export { corsOptions, PEEP_CHAT_TOKEN };

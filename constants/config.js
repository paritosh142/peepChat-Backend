const corsOptions = {
  origin: ["http://localhost:5173", "https://peep-chat-frontend.vercel.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const PEEP_CHAT_TOKEN = "peepChaToken";

export { corsOptions, PEEP_CHAT_TOKEN };

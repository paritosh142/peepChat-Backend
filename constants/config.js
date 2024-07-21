const corsOptions = {
  origin: "https://peepchat.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const PEEP_CHAT_TOKEN = "peepChaToken";

export { corsOptions, PEEP_CHAT_TOKEN };

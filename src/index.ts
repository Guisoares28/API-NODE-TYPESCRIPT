import { app } from "./server";

var PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`App rodando na porta: ${PORT}`));
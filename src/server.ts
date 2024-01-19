import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";
import { producaoRoutes } from "./routes/producao.routes";

const app: FastifyInstance = fastify();

app.register(userRoutes, {
  prefix: "/user",
})

app.register(producaoRoutes, {
  prefix: "/producao",
})

app.listen({port: 3333,},
  ()=>{
    console.log("server listening on port 3333");
  }
)
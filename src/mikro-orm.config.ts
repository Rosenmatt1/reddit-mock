import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  // parser: "@typescript-eslint/parser",
  // plugins: ["@typescript-eslint"],
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: 'reddit',
  type: 'postgresql',
  user: 'postgres',
  password: 'Matty18!',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
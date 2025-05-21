import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

import Search from "../islands/searchUnit";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div class="py-8 text-center">
      <title> ~/&gt; </title>
      <h1 class="text-3xl"> Hello world!</h1>
      <Search />
    </div>,
  );
});

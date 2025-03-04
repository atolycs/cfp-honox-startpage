import { createRoute } from "honox/factory";
import postAction from "../../lib/SearchMethod";
import { z } from "zod";

export default createRoute(async (c) => {
  const urlholder = c.req.query("urlholder");
  try {
    // @ts-ignore
    const resolved_url = await postAction(urlholder);

    return c.redirect(resolved_url, 301);
  } catch (error) {
    return c.render(
      <div>
        <p> How are you? </p>
      </div>,
    );
  }
});

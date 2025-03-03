import { createRoute } from "honox/factory";
import postAction from "../../methods/SearchMethod";

export default createRoute((c: Context) => {
  const urlholder = c.req.query("urlholder");
  return postAction(urlholder, c);
});

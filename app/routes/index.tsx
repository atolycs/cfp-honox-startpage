import { createRoute } from "honox/factory";
import Counter from "../islands/counter";
import SearchOrJump from "../islands/SerachOrJump";
import { LauncherContainer } from "../islands/Container";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div class="py-8 text-center">
      <title>Welcome back!</title>
      <h1 class="text-3xl font-bold">Hello, {name}!</h1>
      <Counter />
      <LauncherContainer name="Yes!">
        <a href="https://www.google.com">Google!</a>
        <a href="https://www.google.com">Google!</a>
        <a href="https://www.google.com">Google!</a>
        <a href="https://www.google.com">Google!</a>
        <a href="https://www.google.com">Google!</a>
        <a href="https://www.google.com">Google!</a>
      </LauncherContainer>
      <SearchOrJump />
    </div>,
  );
});

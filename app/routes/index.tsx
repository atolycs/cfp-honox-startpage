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
      <div class="grid grid-cols-3 gap-2">
        <div class="object-left-top grid-cols-subgrid">
          <img
            src="https://github.com/atolycs.png"
            class="rounded-2xl object-none h-80 w-30 ml-auto "
            alt=""
          />
        </div>
        <div class="grid grid-cols-3 gap-1">
          <LauncherContainer name="Yes!" className="h-full bg-green-300">
            <a href="https://www.google.com">Google!</a>
            <a href="https://www.duckduckgo.com">DuckduckGo!</a>
            <a href="https://www.youtube.com">YouTube!</a>
          </LauncherContainer>
          <LauncherContainer name="dev" className="h-full bg-teal-300" />
          <LauncherContainer name="Yes!" className="h-full bg-red-50">
            <a href="https://www.google.com">Google!</a>
            <a href="https://www.duckduckgo.com">DuckduckGo!</a>
            <a href="https://www.youtube.com">YouTube!</a>
          </LauncherContainer>
          <LauncherContainer name="Yes!" className="h-full bg-red-200">
            <a href="https://www.google.com">Google!</a>
            <a href="https://www.duckduckgo.com">DuckduckGo!</a>
            <a href="https://www.youtube.com">YouTube!</a>
          </LauncherContainer>
          <LauncherContainer name="Yes!" className="h-full bg-blue-200">
            <a href="https://www.google.com">Google!</a>
            <a href="https://www.duckduckgo.com">DuckduckGo!</a>
            <a href="https://www.youtube.com">YouTube!</a>
          </LauncherContainer>
        </div>
      </div>
      <SearchOrJump className="object-contain mr-30" />
    </div>,
  );
});

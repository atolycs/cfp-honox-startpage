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
      <div class="justify-center">
        <div class="flex justify-center items-stretch gap-3">
          <img
            src="https://github.com/atolycs.png"
            class="object-none object-left-center h-80 w-30"
            alt=""
          />
          <div class="items-baseline grid grid-cols-3 gap-2 justify-self-stretch">
            <LauncherContainer name="Yes!" className="bg-green-300">
              <a href="https://www.google.com">Google!</a>
              <a href="https://www.duckduckgo.com">DuckduckGo!</a>
              <a href="https://www.youtube.com">YouTube!</a>
            </LauncherContainer>
            <LauncherContainer name="dev" className="bg-teal-300" />
            <LauncherContainer name="Yes!" className="bg-red-50">
              <a href="https://www.google.com">Google!</a>
              <a href="https://www.duckduckgo.com">DuckduckGo!</a>
              <a href="https://www.youtube.com">YouTube!</a>
            </LauncherContainer>
            <LauncherContainer name="Yes!" className="bg-red-200">
              <a href="https://www.google.com">Google!</a>
              <a href="https://www.duckduckgo.com">DuckduckGo!</a>
              <a href="https://www.youtube.com">YouTube!</a>
            </LauncherContainer>
            <LauncherContainer name="Yes!" className="bg-blue-200">
              <a href="https://www.google.com">Google!</a>
              <a href="https://www.duckduckgo.com">DuckduckGo!</a>
              <a href="https://www.youtube.com">YouTube!</a>
            </LauncherContainer>
          </div>
        </div>
        <SearchOrJump className="object-contain ml-20" />
      </div>
    </div>,
  );
});

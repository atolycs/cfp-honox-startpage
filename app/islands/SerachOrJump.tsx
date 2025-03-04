import type { FC } from "hono/jsx";

type Props = {
  className?: string;
};

export default function SearchOrJump({ className }: Props) {
  return (
    <>
      <div class={className}>
        <form action="/searchOrJump">
          FIND &gt;{" "}
          <input type="text" name="urlholder" placeholder="Search or Jump..." />
          <button type="submit">Go!</button>
        </form>
      </div>
    </>
  );
}

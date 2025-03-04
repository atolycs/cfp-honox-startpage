import type { FC } from "hono/jsx";
import { useState } from "hono/jsx";

type Props = {
  className?: string;
};

export default function SearchOrJump({ className }: Props) {
  const [text, setText] = useState("FIND OR JUMP");
  return (
    <>
      <div class={className}>
        <form action="/searchOrJump">
          {text} &gt;{" "}
          <input
            type="text"
            name="urlholder"
            placeholder="Search or Jump..."
            onChange={(event) => {
              const isUrl =
                /^(((http)|(https)):\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]+\/?([a-zA-Z0-9/?=&%-_]+)?$/;
              const isIp =
                /^(((http)|(https)):\/\/)?(www\.)?([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}|localhost)(:[0-9]{1,5})?(\/[a-zA-Z0-9/?=&%-_]+)?$/;

              const url_match = event.target?.value.match(isUrl);
              const ip_match = event.target?.value.match(isIp);

              if (url_match != null || ip_match != null) {
                setText("JUMP");
              } else if (event.target?.value.length > 0) {
                setText("FIND");
              } else {
                setText("FIND OR JUMP");
              }
            }}
          />
          <button type="submit">Go!</button>
        </form>
      </div>
    </>
  );
}

import { useState } from "hono/jsx";

export default function Search() {
  const [jumpOrfind, setFindState] = useState("");

  function handleTextChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const is_url = /^(((http)|(https)):\/\/)?/;
    setFindState(e.target?.value?.match(is_url)?.[0]?.substring(0, 4) || "");
  }

  return (
    <div>
      <form onsubmit="return search()" method="post">
        <label for="search_box" autofocus>
          &gt;
          {jumpOrfind ? "jump" : "find"} /{" "}
        </label>
        <input
          type="text"
          placeholder="Type Here"
          name="search_box"
          id="search_box"
          autocomplete="off"
          autofocus
          onChange={handleTextChange}
        />
      </form>
    </div>
  );
}

/* export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p class="py-2 text-2xl">{count}</p>
      <button
        class="px-4 py-2 bg-orange-400 text-white rounded cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
 */

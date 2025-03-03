export default function SearchOrJump() {
  return (
    <div>
      <form action="/searchOrJump">
        <input type="text" name="urlholder" placeholder="Search or Jump..." />
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}

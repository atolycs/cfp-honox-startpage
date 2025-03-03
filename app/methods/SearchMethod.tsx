import { Context } from "hono";

export default function postAction(urlholder: string, c?: Context) {
  const searchEngine = "https://duckduckgo.com/?q=";
  console.log(`[postAction]: ${urlholder}`);

  const isUrl =
    /^(((http)|(https)):\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]+\/?([a-zA-Z0-9/?=&%-_]+)?$/;
  const isIp =
    /^(((http)|(https)):\/\/)?(www\.)?([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}|localhost)(:[0-9]{1,5})?(\/[a-zA-Z0-9/?=&%-_]+)?$/;

  const url_match = urlholder?.match(isUrl);
  const ip_match = urlholder?.match(isIp);

  if (url_match != null) {
    return c?.redirect(
      url_match[0].substring(0, 4) == "http"
        ? url_match[0]
        : "https://" + url_match[0],
    );
  } else if (ip_match != null) {
    return c?.redirect(
      ip_match[0].substring(0, 4) == "http"
        ? ip_match[0]
        : "http://" + ip_match[0],
    );
  } else if (urlholder != undefined) {
    console.log(`Redirecting Search DuckduckGo`);
    return c?.redirect(searchEngine + encodeURIComponent(urlholder));
  } else {
    console.log("Not Redirect");
    return c?.render(<div>Who are you?</div>);
  }
}

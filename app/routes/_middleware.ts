import { createRoute } from "honox/factory";
import { logger } from "hono/logger";
import { NONCE, secureHeaders } from "hono/secure-headers";

export default createRoute(
  logger(),
  secureHeaders({
    strictTransportSecurity: "max-age=63072000; includeSubDomains; preload",
    contentSecurityPolicy: import.meta.env.PROD
      ? {
          scriptSrc: [NONCE],
          defaultSrc: ["'self'"],
        }
      : undefined,
  }),
);

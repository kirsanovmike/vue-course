"use strict";
importScripts("sw-toolbox.js");
toolbox.router.get("/icons/*", toolbox.cacheFirst);
toolbox.router.get("/*", toolbox.networkFirst, {networkTimeoutSeconds: 5});

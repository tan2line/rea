# MCP server effect profiles

Scanned 40 npm packages on 2026-10-17. Static only: findings are source-syntax candidates with file:line, not proof of runtime behavior. Transitive dependencies are not scanned.

Tiers: {"T3":14,"T1":14,"T2":9,"T4":2,"T0":1}. Credentials: {"RESTRICTED":20,"PROVISIONAL":20}.

| Package                                          | Version   | Weekly downloads | License                 | Spawns process | Writes files | Network | Browser | Dynamic code | Install scripts | MCP proxy | Secret env vars | External hosts | Declared tools | Tier | Credential  |
| ------------------------------------------------ | --------- | ---------------- | ----------------------- | -------------- | ------------ | ------- | ------- | ------------ | --------------- | --------- | --------------- | -------------- | -------------- | ---- | ----------- |
| @playwright/mcp                                  | 0.0.83    | 6,403,349        | Apache-2.0              |                |              |         | yes     |              |                 |           | 0               | 0              | 0              | T3   | RESTRICTED  |
| chrome-devtools-mcp                              | 1.11.0    | 1,305,336        | Apache-2.0              | yes            | yes          | yes     |         | yes          |                 |           | 0               | 601            | 0              | T3   | RESTRICTED  |
| @upstash/context7-mcp                            | 4.4.2     | 1,212,373        | MIT                     |                |              | yes     |         |              |                 |           | 7               | 5              | 0              | T1   | PROVISIONAL |
| mcp-remote                                       | 0.15.1    | 663,737          | MIT                     | yes            | yes          | yes     |         | yes          |                 | yes       | 0               | 3              | 0              | T3   | RESTRICTED  |
| @modelcontextprotocol/server-filesystem          | 1.0.0     | 584,188          | SEE LICENSE IN LICENSE  |                | yes          |         |         |              |                 |           | 0               | 0              | 14             | T2   | PROVISIONAL |
| @modelcontextprotocol/server-everything          | 1.0.0     | 242,966          | SEE LICENSE IN LICENSE  |                |              | yes     |         |              |                 |           | 0               | 1              | 0              | T1   | PROVISIONAL |
| @modelcontextprotocol/server-memory              | 1.0.0     | 207,413          | SEE LICENSE IN LICENSE  |                | yes          |         |         |              |                 |           | 0               | 0              | 9              | T2   | PROVISIONAL |
| @wonderwhy-er/desktop-commander                  | 0.3.0     | 207,385          | MIT                     | yes            | yes          | yes     |         | yes          | yes             | yes       | 0               | 11             | 0              | T4   | RESTRICTED  |
| @modelcontextprotocol/server-sequential-thinking | 1.0.0     | 206,575          | SEE LICENSE IN LICENSE  |                |              |         |         |              |                 |           | 0               | 0              | 1              | T0   | PROVISIONAL |
| @notionhq/notion-mcp-server                      | 2.5.2     | 151,607          | MIT                     |                | yes          | yes     |         | yes          |                 |           | 3               | 5              | 0              | T3   | RESTRICTED  |
| @azure/mcp                                       | 3.0.0     | 134,446          | MIT                     | yes            | yes          | yes     |         |              | yes             |           | 0               | 1              | 0              | T4   | RESTRICTED  |
| firecrawl-mcp                                    | 3.30.3    | 129,393          | MIT                     |                |              | yes     |         |              |                 |           | 4               | 5              | 28             | T1   | RESTRICTED  |
| @modelcontextprotocol/server-postgres            | 0.6.2     | 127,894          | MIT                     |                |              | yes     |         |              |                 |           | 0               | 0              | 0              | T1   | RESTRICTED  |
| @modelcontextprotocol/server-slack               | 2025.4.25 | 97,600           | MIT                     |                |              | yes     |         |              |                 |           | 1               | 1              | 0              | T1   | PROVISIONAL |
| @modelcontextprotocol/server-github              | 2025.4.8  | 94,627           | MIT                     |                |              | yes     |         |              |                 |           | 1               | 0              | 0              | T1   | PROVISIONAL |
| @sentry/mcp-server                               | 0.42.0    | 92,171           | FSL-1.1-ALv2            | yes            | yes          | yes     |         | yes          |                 |           | 5               | 65             | 0              | T3   | RESTRICTED  |
| figma-developer-mcp                              | 0.13.2    | 91,027           | MIT                     |                | yes          | yes     |         |              |                 |           | 0               | 5              | 0              | T2   | PROVISIONAL |
| @supabase/mcp-server-supabase                    | 0.14.0    | 81,737           | Apache-2.0              |                |              | yes     |         |              |                 |           | 1               | 4              | 0              | T1   | PROVISIONAL |
| @hubspot/mcp-server                              | 0.4.0     | 31,856           | MIT                     |                |              | yes     |         |              |                 |           | 2               | 2              | 0              | T1   | PROVISIONAL |
| @modelcontextprotocol/server-puppeteer           | 2025.5.12 | 24,297           | MIT                     |                |              |         | yes     |              |                 |           | 0               | 0              | 0              | T3   | RESTRICTED  |
| @modelcontextprotocol/server-brave-search        | 0.6.2     | 22,947           | MIT                     |                |              | yes     |         |              |                 |           | 1               | 1              | 0              | T1   | PROVISIONAL |
| tavily-mcp                                       | 0.2.22    | 21,864           | MIT                     |                |              | yes     |         |              |                 |           | 1               | 2              | 0              | T1   | PROVISIONAL |
| exa-mcp-server                                   | 3.4.2     | 19,044           | ?                       |                |              | yes     |         | yes          |                 |           | 1               | 6              | 9              | T3   | RESTRICTED  |
| @stripe/mcp                                      | 0.3.3     | 18,973           | MIT                     |                |              | yes     |         |              |                 | yes       | 1               | 3              | 0              | T2   | PROVISIONAL |
| @apify/actors-mcp-server                         | 0.18.4    | 17,093           | MIT                     |                |              | yes     |         |              |                 | yes       | 1               | 29             | 0              | T2   | RESTRICTED  |
| task-master-ai                                   | 0.43.1    | 14,507           | MIT WITH Commons-Clause | yes            | yes          | yes     |         |              |                 |           | 11              | 14             | 44             | T3   | RESTRICTED  |
| @executeautomation/playwright-mcp-server         | 1.0.12    | 14,310           | MIT                     | yes            | yes          | yes     | yes     |              |                 |           | 0               | 0              | 0              | T3   | RESTRICTED  |
| @heroku/mcp-server                               | 1.2.12    | 12,135           | Apache-2.0              | yes            | yes          | yes     |         |              |                 |           | 1               | 2              | 37             | T3   | RESTRICTED  |
| @21st-dev/magic                                  | 0.2.3     | 11,918           | ISC                     |                |              | yes     |         |              |                 |           | 3               | 1              | 0              | T1   | PROVISIONAL |
| mcp-server-kubernetes                            | 4.1.9     | 5,297            | MIT                     | yes            | yes          | yes     |         |              |                 |           | 2               | 0              | 0              | T3   | RESTRICTED  |
| @neondatabase/mcp-server-neon                    | 0.6.5     | 3,926            | MIT                     |                | yes          | yes     |         |              |                 |           | 4               | 6              | 0              | T2   | PROVISIONAL |
| @pinecone-database/mcp                           | 0.3.0     | 3,757            | Apache-2.0              |                |              | yes     |         |              |                 | yes       | 1               | 3              | 1              | T2   | PROVISIONAL |
| @mongodb-js/mongodb-mcp-server                   | 0.0.3     | 2,812            | Apache-2.0              |                | yes          | yes     |         |              |                 |           | 0               | 2              | 0              | T2   | RESTRICTED  |
| @cyanheads/git-mcp-server                        | 2.15.3    | 2,535            | Apache-2.0              | yes            | yes          | yes     |         | yes          |                 |           | 2               | 10             | 0              | T3   | RESTRICTED  |
| @cloudflare/mcp-server-cloudflare                | 0.2.0     | 2,356            | Apache-2.0              | yes            | yes          | yes     |         |              |                 |           | 1               | 3              | 0              | T3   | RESTRICTED  |
| @openbnb/mcp-server-airbnb                       | 0.3.0     | 2,071            | MIT                     |                | yes          | yes     |         |              |                 |           | 0               | 3              | 0              | T2   | PROVISIONAL |
| @elastic/mcp-server-elasticsearch                | 0.3.1     | 2,003            | Apache-2.0              |                |              | yes     |         |              |                 |           | 2               | 0              | 4              | T1   | PROVISIONAL |
| @browserbasehq/mcp                               | 3.0.0     | 1,806            | Apache-2.0              |                |              | yes     |         |              |                 |           | 3               | 1              | 0              | T1   | PROVISIONAL |
| mcp-linear                                       | 0.1.8     | 405              | ?                       |                |              | yes     |         |              |                 |           | 1               | 0              | 0              | T1   | PROVISIONAL |
| mcp-shrimp-task-manager                          | 1.0.21    | 264              | MIT                     | yes            | yes          | yes     |         |              |                 |           | 0               | 0              | 0              | T3   | RESTRICTED  |

## Per-package detail

### @playwright/mcp@0.0.83

- REA Evidence: ev_57fb97fcfb2e81e6c230984c235e07c974449195f54e3a5532191725574adc48 (subject sha256 3a49a1da48e5224f26052ab54db22201619a509884b1e2e392757dbd222f6ee1)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- browser_automation: declared dependency: playwright, playwright-core
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 2 declared; THIN_WRAPPER: 1939 bytes of own code; behavior lives in 2 dependencies

### chrome-devtools-mcp@1.11.0

- REA Evidence: ev_686fea24f29974674ff16de022c6f94edeca798ce3bfbfe17ab4cc7b65987a4a (subject sha256 8fe066f98217d4d1ece32a63fa6d172a8ba7517e16a53374c2ee256f9acaabad)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: 13 spawn/exec call sites
- filesystem_write: 32 write/delete call sites
- network_egress: 18 request sites; 601 literal hosts
- dynamic_code: 3 eval/Function/vm sites
- Hosts: 33across.com (build/src/third_party/index.js:136028), a.b.co.uk (build/src/third_party/index.js:93698), a6bb0da87ee048cc9ae2a345fc09ab2e:63 (build/src/third_party/lighthouse-devtools-mcp-bundle.js:54985), acceptableads.com (build/src/third_party/index.js:136028), accessibe.com (build/src/third_party/index.js:136028), ad.amazon.com (build/src/third_party/index.js:136028), admanmedia.com (build/src/third_party/index.js:136028), admetricspro.com (build/src/third_party/index.js:136028), admin.fam-ad.com (build/src/third_party/index.js:136028), adnuntius.com (build/src/third_party/index.js:136028), affiliate-program.amazon.co.uk (build/src/third_party/index.js:136028), albacross.com (build/src/third_party/index.js:136028), amp.dev (build/src/third_party/index.js:136028), amplifyjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), angular.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10113), angularjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), api.w.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), appconsent.io (build/src/third_party/index.js:136028), appmate.io (build/src/third_party/index.js:136028), appsolute.us (build/src/third_party/index.js:136028), archive.mozilla.org (build/src/third_party/index.js:73558), atlassolutions.com (build/src/third_party/index.js:136028), attentivemobile.com (build/src/third_party/index.js:136028), auth0.com (build/src/third_party/index.js:136028), aws.amazon.com (build/src/third_party/index.js:136028), backbonejs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), basis.net (build/src/third_party/index.js:136028), beeketing.com (build/src/third_party/index.js:136028), bentojs.dev (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), bingads.microsoft.com (build/src/third_party/index.js:136028), bitbucket.org (build/src/third_party/index.js:92771), borlabs.io (build/src/third_party/index.js:136028), bow-now.jp (build/src/third_party/index.js:136028), brm.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), bugs.chromium.org (build/src/third_party/index.js:170517), byside.com (build/src/third_party/index.js:136028), camanjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), canjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), castle.io (build/src/third_party/index.js:136028), cdnjs.com (build/src/third_party/index.js:136028), chromestatus.com (build/src/third_party/index.js:171125), chromeuxreport.googleapis.com (build/src/third_party/index.js:164981), chromewebstore.google.com (build/src/third_party/index.js:138916), chromium.googlesource.com (build/src/third_party/index.js:172457), chromiumdash.appspot.com (build/src/third_party/index.js:171132), clarity.microsoft.com (build/src/third_party/index.js:136028), clearbit.com (build/src/third_party/index.js:136028), clickio.com (build/src/third_party/index.js:136028), code.createjs.com (build/src/third_party/index.js:136028), code.google.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), code.jquery.com (build/src/third_party/index.js:136028), codepen.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:55042), coherentpath.com (build/src/third_party/index.js:136028), complianz.io (build/src/third_party/index.js:136028), concert.io (build/src/third_party/index.js:136028), connexity.com (build/src/third_party/index.js:136028), consentmanager.net (build/src/third_party/index.js:136028), consumable.com (build/src/third_party/index.js:136028), convertful.com (build/src/third_party/index.js:136028), coralproject.net (build/src/third_party/index.js:136028), crbug.com (build/src/BrowserManager.js:131), create-react-app.dev (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), createjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), crisp.chat (build/src/third_party/index.js:136028), cs.chromium.org (build/src/third_party/index.js:92806), d3js.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), datatracker.ietf.org (build/src/third_party/index.js:173647), dc-js.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), debug.id (build/src/third_party/index.js:124286), dequeuniversity.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:35738), devdocs.magento.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10315), developer.akamai.com (build/src/third_party/index.js:136028), developer.chrome.com (build/src/third_party/index.js:145869), developer.mozilla.org (build/src/third_party/index.js:93200), developer.yahoo.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), developers.google.com (build/src/third_party/index.js:91061), disqus.com (build/src/third_party/index.js:136028), dmitrybaranovskiy.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), docs.google.com (build/src/third_party/index.js:93688), docs.joomla.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10286), docs.wp-rocket.me (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10603), dojotoolkit.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), ec-concier.com (build/src/third_party/index.js:136028), eightmedia.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), emberjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), emxdigital.com (build/src/third_party/index.js:136028), en.gravatar.com (build/src/third_party/index.js:136028), esm.sh (build/src/third_party/index.js:136028), evidon.com (build/src/third_party/index.js:136028), extensions.joomla.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10268), fabricjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), fedidcg.github.io (build/src/third_party/index.js:93171), ffmpeg.org (build/src/tools/screencast.js:121), fidoalliance.org (build/src/third_party/index.js:93988), fifty.io (build/src/third_party/index.js:136028), flipdesk.jp (build/src/third_party/index.js:136028), fontawesome.com (build/src/third_party/index.js:136028), fonts.adobe.com (build/src/third_party/index.js:136028), fonts.google.com (build/src/third_party/index.js:136028), foundation.zurb.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), foxentry.cz (build/src/third_party/index.js:136028), framer.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), freshdesk.com (build/src/third_party/index.js:136028), fundingchoices.google.com (build/src/third_party/index.js:136028), fusejs.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), getbootstrap.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), getmdl.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), glimr.io (build/src/third_party/index.js:136028), goadfuel.com (build/src/third_party/index.js:136028), goinstore.com (build/src/third_party/index.js:136028), goo.gle (build/src/third_party/index.js:93206), googlechrome.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:55042), googlechromelabs.github.io (build/src/third_party/index.js:73106), gospecless.com (build/src/third_party/index.js:136028), greensock.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), group.macromill.com (build/src/third_party/index.js:136028), guess-js.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), handlebarsjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), handsontable.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), hatenablog.com (build/src/third_party/index.js:136028), headjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), hellogenie.com (build/src/third_party/index.js:136028), html.spec.whatwg.org (build/src/third_party/index.js:93684), hubspot.com (build/src/third_party/index.js:136028), hybrid.ai (build/src/third_party/index.js:136028), hyperinzerce.cz (build/src/third_party/index.js:136028), id-ward.com (build/src/third_party/index.js:136028), id5.io (build/src/third_party/index.js:136028), image.nuxt.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10431), ink.sapo.pt (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), insights.fastlylabs.com (build/src/third_party/index.js:136028), integralads.com (build/src/third_party/index.js:136028), intent.com (build/src/third_party/index.js:136028), inzynk.com (build/src/third_party/index.js:136028), ionicframework.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), iprom.eu (build/src/third_party/index.js:136028), isotope.metafizzy.co (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), iteratehq.com (build/src/third_party/index.js:136028), ivitechnologies.com (build/src/third_party/index.js:136028), jakearchibald.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10460), jaywing.com (build/src/third_party/index.js:136028), jquery.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), jquerymobile.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), jquerytools.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), jqueryui.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), jspm.org (build/src/third_party/index.js:136028), judge.me (build/src/third_party/index.js:136028), jumpgroup.it (build/src/third_party/index.js:136028), karte.io (build/src/third_party/index.js:136028), keen.io (build/src/third_party/index.js:136028), knockoutjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), labs.adobe.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), launchdarkly.com (build/src/third_party/index.js:136028), leafletjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), learn.microsoft.com (build/src/third_party/index.js:93825), letsencrypt.org (build/src/third_party/index.js:136028), lit-element.polymer-project.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), lit-html.polymer-project.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), liveramp.com (build/src/third_party/index.js:136028), llmstxt.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:43745), loadable-components.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10507), lodash.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), madvertise.com (build/src/third_party/index.js:136028), magento.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), mailchimp.com (build/src/third_party/index.js:136028), marionettejs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), marketing.yahoo.co.jp (build/src/third_party/index.js:136028), marketingplatform.google.com (build/src/third_party/index.js:136028), marketplace.magento.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10311), markojs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), material.angular.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10117), matomo.org (build/src/third_party/index.js:136028), mediatrust.com (build/src/third_party/index.js:136028), metrica.yandex.com (build/src/third_party/index.js:136028), microanalytics.io (build/src/third_party/index.js:136028), mixpanel.com (build/src/third_party/index.js:136028), moat.com (build/src/third_party/index.js:136028), mochi.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), modernizr.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), momentjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), mootools.net (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), mouseflow.com (build/src/third_party/index.js:136028), mozilla.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:35738), mustache.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), navu.co (build/src/third_party/index.js:136028), newrelic.com (build/src/third_party/index.js:136028), nextjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10353), nitropack.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), nitropay.com (build/src/third_party/index.js:136028), nodejs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10926), numeraljs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), nuxtjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), octobercms.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10458), onesignal.com (build/src/third_party/index.js:136028), onetag.net (build/src/third_party/index.js:136028), onetrust.com (build/src/third_party/index.js:136028), openrico.sourceforge.net (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), optinmonster.com (build/src/third_party/index.js:136028), paperjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), parkingcrew.net (build/src/third_party/index.js:136028), pay.amazon.com (build/src/third_party/index.js:136028), paypal.com (build/src/third_party/index.js:136028), pcsclite.apdu.fr (build/src/third_party/index.js:93825), philipwalton.com (build/src/third_party/index.js:167454), pinterest.com (build/src/third_party/index.js:136028), plausible.io (build/src/third_party/index.js:136028), play.googleapis.com (build/src/telemetry/watchdog/ClearcutSender.js:9), playground.xyz (build/src/third_party/index.js:136028), podsights.com (build/src/third_party/index.js:136028), polar.me (build/src/third_party/index.js:136028), policies.google.com (build/src/config/mcp-options.js:122), pptr.dev (build/src/BrowserManager.js:134), preactjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), privacycg.github.io (build/src/third_party/index.js:173462), privacysandbox.com (build/src/third_party/index.js:170905), privacysandbox.google.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:51565), processingjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), product-details.mozilla.org (build/src/third_party/index.js:73628), prototypejs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), pubdash.ezoic.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10187), pubmatic.com (build/src/third_party/index.js:136028), purgecss.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10228), pusher.com (build/src/third_party/index.js:136028), quantcast.com (build/src/third_party/index.js:136028), raw.githubusercontent.com (build/src/third_party/index.js:40054), reactjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10503), reacttraining.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10511), registry.npmjs.org (build/src/bin/check-latest-version.js:10), remix.run (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), requirejs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), richaudience.com (build/src/third_party/index.js:136028), rightjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), riotjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), robertpataki.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), robots-relative.samclarke.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:50698), rubiconproject.com (build/src/third_party/index.js:136028), s0.ipstatp.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:14509), salesloft.com (build/src/third_party/index.js:136028), sammyjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), satori.marketing (build/src/third_party/index.js:136028), scale8.com (build/src/third_party/index.js:136028), script.aculo.us (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), scroll.com (build/src/third_party/index.js:136028), scrollmagic.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), seajs.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), sectigo.com (build/src/third_party/index.js:136028), secureprivacy.ai (build/src/third_party/index.js:136028), securiti.ai (build/src/third_party/index.js:136028), segmanta.com (build/src/third_party/index.js:136028), segment.com (build/src/third_party/index.js:136028), segmentstream.com (build/src/third_party/index.js:136028), sentry.io (build/src/third_party/index.js:136028), serkanyersen.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), sharethis.com (build/src/third_party/index.js:136028), sibboventures.com (build/src/third_party/index.js:136028), smadex.com (build/src/third_party/index.js:136028), snigel.com (build/src/third_party/index.js:136028), snowplowanalytics.com (build/src/third_party/index.js:136028), soasta.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), socket.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), source.chromium.org (build/src/third_party/index.js:92734), sourcepoint.com (build/src/third_party/index.js:136028), speedsize.com (build/src/third_party/index.js:136028), spine.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), sproutcore.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), stackoverflow.com (build/src/third_party/index.js:27569), stevesouders.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), storage.googleapis.com (build/src/third_party/index.js:73083), stripe.com (build/src/third_party/index.js:136028), sugarjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), sumo.com (build/src/third_party/index.js:136028), supership.jp (build/src/third_party/index.js:136028), support.google.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:34528), support.nitropack.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10392), support.wix.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10533), tealium.com (build/src/third_party/index.js:136028), terminus.com (build/src/third_party/index.js:136028), threejs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), throtle.io (build/src/third_party/index.js:136028), tilda.cc (build/src/third_party/index.js:136028), tongji.baidu.com (build/src/third_party/index.js:136028), tools.ietf.org (build/src/third_party/index.js:115138), tpmn.io (build/src/third_party/index.js:136028), traffective.com (build/src/third_party/index.js:136028), truendo.com (build/src/third_party/index.js:136028), truffle.bid (build/src/third_party/index.js:136028), trustarc.com (build/src/third_party/index.js:136028), tumblr.com (build/src/third_party/index.js:136028), twitch.tv (build/src/third_party/index.js:136028), twitter.com (build/src/third_party/index.js:136028), two.js.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), typo3.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), u360.d-bi.fr (build/src/third_party/index.js:136028), underscorejs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), unpkg.com (build/src/third_party/index.js:136028), urlpattern.spec.whatwg.org (build/src/config/puppeteer-options.js:40), usabilla.com (build/src/third_party/index.js:136028), usb.org (build/src/third_party/index.js:92771), usefathom.com (build/src/third_party/index.js:136028), user (build/src/third_party/index.js:170906), usercentrics.com (build/src/third_party/index.js:136028), usersnap.com (build/src/third_party/index.js:136028), vaadin.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), velocityjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), viafoura.com (build/src/third_party/index.js:136028), vimeo.com (build/src/third_party/index.js:136028), visely.io (build/src/third_party/index.js:136028), vk.com (build/src/third_party/index.js:136028), vuejs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), vwo.com (build/src/third_party/index.js:136028), w3c.github.io (build/src/config/cli-options.js:962), web.dev (build/src/third_party/index.js:93555), web.easy-ads.com (build/src/third_party/index.js:136028), webflow.com (build/src/third_party/index.js:136028), webstatus.dev (build/src/third_party/lighthouse-devtools-mcp-bundle.js:45062), wicg.github.io (build/src/third_party/index.js:93143), wistia.com (build/src/third_party/index.js:136028), withcabin.com (build/src/third_party/index.js:136028), withreach.com (build/src/third_party/index.js:136028), woocommerce.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), wordads.co (build/src/third_party/index.js:136028), wordpress.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10558), wp-rocket.me (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), wp.com (build/src/third_party/index.js:136028), www.ably.io (build/src/third_party/index.js:136028), www.abtasty.com (build/src/third_party/index.js:136028), www.accentuate.io (build/src/third_party/index.js:136028), www.ada.support (build/src/third_party/index.js:136028), www.addthis.com (build/src/third_party/index.js:136028), www.addtoany.com (build/src/third_party/index.js:136028), www.adition.com (build/src/third_party/index.js:136028), www.adlightning.com (build/src/third_party/index.js:136028), www.adnami.io (build/src/third_party/index.js:136028), www.adobe.com (build/src/third_party/index.js:136028), www.adroll.com (build/src/third_party/index.js:136028), www.adscore.com (build/src/third_party/index.js:136028), www.afterpay.com (build/src/third_party/index.js:136028), www.akamai.com (build/src/third_party/index.js:136028), www.alexa.com (build/src/third_party/index.js:136028), www.algolia.com (build/src/third_party/index.js:136028), www.apache.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:55042), www.appcues.com (build/src/third_party/index.js:136028), www.appdynamics.com (build/src/third_party/index.js:136028), www.appnexus.com (build/src/third_party/index.js:136028), www.atinternet.com (build/src/third_party/index.js:136028), www.atlasrtx.com (build/src/third_party/index.js:136028), www.audiencerate.com (build/src/third_party/index.js:136028), www.axelspringer.com (build/src/third_party/index.js:136028), www.bbc.co.uk (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.bedrockstreaming.com (build/src/third_party/index.js:136028), www.bidswitch.com (build/src/third_party/index.js:136028), www.blogger.com (build/src/third_party/index.js:136028), www.bmind.es (build/src/third_party/index.js:136028), www.bolt.com (build/src/third_party/index.js:136028), www.bonzai.co (build/src/third_party/index.js:136028), www.bootstrapcdn.com (build/src/third_party/index.js:136028), www.brainpad.co.jp (build/src/third_party/index.js:136028), www.brandmetrics.com (build/src/third_party/index.js:136028), www.braze.com (build/src/third_party/index.js:136028), www.bridgewell.com (build/src/third_party/index.js:136028), www.brightcove.com (build/src/third_party/index.js:136028), www.builder.io (build/src/third_party/index.js:136028), www.businesscatalyst.com (build/src/third_party/index.js:136028), www.carbonads.net (build/src/third_party/index.js:136028), www.catchpoint.com (build/src/third_party/index.js:136028), www.cdkglobal.com (build/src/third_party/index.js:136028), www.cedexis.com (build/src/third_party/index.js:136028), www.channelape.com (build/src/third_party/index.js:136028), www.chatwoot.com (build/src/third_party/index.js:136028), www.checkout.com (build/src/third_party/index.js:136028), www.chromium.org (build/src/config/browser-options.js:98), www.civicuk.com (build/src/third_party/index.js:136028), www.clearbrain.com (build/src/third_party/index.js:136028), www.clickguardian.co.uk (build/src/third_party/index.js:136028), www.cloudflare.com (build/src/third_party/index.js:136028), www.codigo.se (build/src/third_party/index.js:136028), www.commandersact.com (build/src/third_party/index.js:136028), www.consentdesk.com (build/src/third_party/index.js:136028), www.consentserve.com (build/src/third_party/index.js:136028), www.contactatonce.com (build/src/third_party/index.js:136028), www.contentful.com (build/src/third_party/index.js:136028), www.conversantmedia.eu (build/src/third_party/index.js:136028), www.cookiebot.com (build/src/third_party/index.js:136028), www.cookieinformation.com (build/src/third_party/index.js:136028), www.cookielaw.org (build/src/third_party/index.js:136028), www.crazyegg.com (build/src/third_party/index.js:136028), www.criteo.com (build/src/third_party/index.js:136028), www.dailykarma.com (build/src/third_party/index.js:136028), www.datocms.com (build/src/third_party/index.js:136028), www.dealer.com (build/src/third_party/index.js:136028), www.dentsuaegisnetwork.de (build/src/third_party/index.js:136028), www.didomi.io (build/src/third_party/index.js:136028), www.digitru.st (build/src/third_party/index.js:136028), www.distilnetworks.com (build/src/third_party/index.js:136028), www.dmdconnects.com (build/src/third_party/index.js:136028), www.dmgmedia.co.uk (build/src/third_party/index.js:136028), www.doofinder.com (build/src/third_party/index.js:136028), www.dotmetrics.net (build/src/third_party/index.js:136028), www.doubleverify.com (build/src/third_party/index.js:136028), www.drawbridge.com (build/src/third_party/index.js:136028), www.drift.com (build/src/third_party/index.js:136028), www.drupal.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10138), www.ebis.ne.jp (build/src/third_party/index.js:136028), www.emerse.com (build/src/third_party/index.js:136028), www.emetriq.com (build/src/third_party/index.js:136028), www.ensighten.com (build/src/third_party/index.js:136028), www.episerver.com (build/src/third_party/index.js:136028), www.ezoic.com (build/src/third_party/index.js:136028), www.facebook.com (build/src/third_party/index.js:136028), www.fancs.com (build/src/third_party/index.js:136028), www.ffmpeg.org (build/src/config/mcp-options.js:90), www.flotcharts.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.framer.com (build/src/third_party/index.js:136028), www.freshworks.com (build/src/third_party/index.js:136028), www.g2.com (build/src/third_party/index.js:136028), www.gatsbyjs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10230), www.gatsbyjs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.gemius.com (build/src/third_party/index.js:136028), www.geoedge.com (build/src/third_party/index.js:136028), www.getadmiral.com (build/src/third_party/index.js:136028), www.getrewardful.com (build/src/third_party/index.js:136028), www.gladly.com (build/src/third_party/index.js:136028), www.godaddy.com (build/src/third_party/index.js:136028), www.gomoxie.com (build/src/third_party/index.js:136028), www.google.com (build/src/third_party/index.js:93698), www.googleoptimize.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:14288), www.googletagservices.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:14285), www.gosquared.com (build/src/third_party/index.js:136028), www.gravito.net (build/src/third_party/index.js:136028), www.gwtproject.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.hellobar.com (build/src/third_party/index.js:136028), www.helpscout.net (build/src/third_party/index.js:136028), www.highcharts.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.histats.com (build/src/third_party/index.js:136028), www.hotjar.com (build/src/third_party/index.js:136028), www.hotmart.com (build/src/third_party/index.js:136028), www.hubvisor.io (build/src/third_party/index.js:136028), www.iana.org (build/src/third_party/index.js:93562), www.ietf.org (build/src/third_party/index.js:174052), www.inauth.com (build/src/third_party/index.js:136028), www.innovid.com (build/src/third_party/index.js:136028), www.instagram.com (build/src/third_party/index.js:136028), www.instart.com (build/src/third_party/index.js:136028), www.integrate.com (build/src/third_party/index.js:136028), www.intercom.com (build/src/third_party/index.js:136028), www.ipify.org (build/src/third_party/index.js:136028), www.ispot.tv (build/src/third_party/index.js:136028), www.iubenda.com (build/src/third_party/index.js:136028), www.izooto.com (build/src/third_party/index.js:136028), www.jivochat.com (build/src/third_party/index.js:136028), www.joomla.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.jsdelivr.com (build/src/third_party/index.js:136028), www.kameleoon.com (build/src/third_party/index.js:136028), www.kantarsifo.se (build/src/third_party/index.js:136028), www.knorex.com (build/src/third_party/index.js:136028), www.leaseweb.com (build/src/third_party/index.js:136028), www.linkedin.com (build/src/third_party/index.js:136028), www.listrak.com (build/src/third_party/index.js:136028), www.littledata.io (build/src/third_party/index.js:136028), www.livechat.com (build/src/third_party/index.js:136028), www.liveperson.com (build/src/third_party/index.js:136028), www.loggly.com (build/src/third_party/index.js:136028), www.loginradius.com (build/src/third_party/index.js:136028), www.luckyorange.com (build/src/third_party/index.js:136028), www.luigisbox.com (build/src/third_party/index.js:136028), www.mairdumont-netletix.com (build/src/third_party/index.js:136028), www.mapbox.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.marfeel.com (build/src/third_party/index.js:136028), www.marketgid.com (build/src/third_party/index.js:136028), www.marketo.com (build/src/third_party/index.js:136028), www.materialui.co (build/src/third_party/lighthouse-devtools-mcp-bundle.js:55042), www.measured.com (build/src/third_party/index.js:136028), www.media.net (build/src/third_party/index.js:136028), www.mediamath.com (build/src/third_party/index.js:136028), www.mediarithmics.com (build/src/third_party/index.js:136028), www.mediavine.com (build/src/third_party/index.js:136028), www.mediawallah.com (build/src/third_party/index.js:136028), www.mgid.com (build/src/third_party/index.js:136028), www.mparticle.com (build/src/third_party/index.js:136028), www.mrpfd.com (build/src/third_party/index.js:136028), www.netlify.com (build/src/third_party/index.js:136028), www.next14.com (build/src/third_party/index.js:136028), www.nielsen-online.com (build/src/third_party/index.js:136028), www.noibu.com (build/src/third_party/index.js:136028), www.oath.com (build/src/third_party/index.js:136028), www.ogury.com (build/src/third_party/index.js:136028), www.olark.com (build/src/third_party/index.js:136028), www.ontame.io (build/src/third_party/index.js:136028), www.openx.com (build/src/third_party/index.js:136028), www.optad360.com (build/src/third_party/index.js:136028), www.optimizely.com (build/src/third_party/index.js:136028), www.ordergroove.com (build/src/third_party/index.js:136028), www.osano.com (build/src/third_party/index.js:136028), www.outbrain.com (build/src/third_party/index.js:136028), www.ozoneproject.com (build/src/third_party/index.js:136028), www.pendo.io (build/src/third_party/index.js:136028), www.pepperjam.com (build/src/third_party/index.js:136028), www.pingdom.com (build/src/third_party/index.js:136028), www.pixijs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.pixnet.net (build/src/third_party/index.js:136028), www.playwire.com (build/src/third_party/index.js:136028), www.polymer-project.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.popads.net (build/src/third_party/index.js:136028), www.powr.io (build/src/third_party/index.js:136028), www.prefixbox.com (build/src/third_party/index.js:136028), www.pubperf.com (build/src/third_party/index.js:136028), www.pubtech.ai (build/src/third_party/index.js:136028), www.pulselive.com (build/src/third_party/index.js:136028), www.purecars.com (build/src/third_party/index.js:136028), www.qooxdoo.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.quantcast.com (build/src/third_party/index.js:136028), www.quantummetric.com (build/src/third_party/index.js:136028), www.quora.com (build/src/third_party/index.js:136028), www.rapidssl.com (build/src/third_party/index.js:136028), www.rcspubblicita.it (build/src/third_party/index.js:136028), www.rdstation.com (build/src/third_party/index.js:136028), www.readspeaker.com (build/src/third_party/index.js:136028), www.revjet.com (build/src/third_party/index.js:136028), www.revlifter.com (build/src/third_party/index.js:136028), www.rfc-editor.org (build/src/third_party/index.js:173993), www.ringieraxelspringer.pl (build/src/third_party/index.js:136028), www.rockerbox.com (build/src/third_party/index.js:136028), www.salesforce.com (build/src/third_party/index.js:136028), www.sc.pages01.net (build/src/third_party/lighthouse-devtools-mcp-bundle.js:14415), www.scorecardresearch.com (build/src/third_party/index.js:136028), www.scrippsnetworksdigital.com (build/src/third_party/index.js:136028), www.seedtag.com (build/src/third_party/index.js:136028), www.sencha.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.senchalabs.org (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), www.seznam.cz (build/src/third_party/index.js:136028), www.shareaholic.com (build/src/third_party/index.js:136028), www.sharethis.com (build/src/third_party/index.js:136028), www.shinystat.com (build/src/third_party/index.js:136028), www.shopify.com (build/src/third_party/index.js:136028), www.signal.co (build/src/third_party/index.js:136028), www.singlespot.com (build/src/third_party/index.js:136028), www.sirdata.com (build/src/third_party/index.js:136028), www.sizmek.com (build/src/third_party/index.js:136028), www.slideshare.net (build/src/third_party/index.js:136028), www.smartlook.com (build/src/third_party/index.js:136028), www.smartsupp.com (build/src/third_party/index.js:136028), www.smashingmagazine.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:10164), www.snapchat.com (build/src/third_party/index.js:136028), www.soundcloud.com (build/src/third_party/index.js:136028), www.sourceknowledge.com (build/src/third_party/index.js:136028), www.speedcurve.com (build/src/third_party/index.js:136028), www.spiceworks.com (build/src/third_party/index.js:136028), www.sportradar.com (build/src/third_party/index.js:136028), www.spotify.com (build/src/third_party/index.js:136028), www.squarespace.com (build/src/third_party/index.js:136028), www.statuspage.io (build/src/third_party/index.js:136028), www.taboola.com (build/src/third_party/index.js:136028), www.targito.com (build/src/third_party/index.js:136028), www.tawk.to (build/src/third_party/index.js:136028), www.texthelp.com (build/src/third_party/index.js:136028), www.thesistesting.com (build/src/third_party/index.js:136028), www.thetradedesk.com (build/src/third_party/index.js:136028), www.tidiochat.com (build/src/third_party/index.js:136028), www.tiktok.com (build/src/third_party/index.js:136028), www.tiledesk.com (build/src/third_party/index.js:136028), www.trafficjunky.com (build/src/third_party/index.js:136028), www.tray.com.br (build/src/third_party/index.js:136028), www.trustarc.com (build/src/third_party/index.js:136028), www.trychameleon.com (build/src/third_party/index.js:136028), www.turntonetworks.com (build/src/third_party/index.js:136028), www.uniconsent.com (build/src/third_party/index.js:136028), www.usehero.com (build/src/third_party/index.js:136028), www.ve.com (build/src/third_party/index.js:136028), www.verizondigitalmedia.com (build/src/third_party/index.js:136028), www.vidyard.com (build/src/third_party/index.js:136028), www.visualiq.com (build/src/third_party/index.js:136028), www.vizzit.se (build/src/third_party/index.js:136028), www.vonage.com (build/src/third_party/index.js:136028), www.voxmedia.com (build/src/third_party/index.js:136028), www.webads.nl (build/src/third_party/index.js:136028), www.websitebuilder.com (build/src/third_party/index.js:136028), www.webtrekk.com (build/src/third_party/index.js:136028), www.weebly.com (build/src/third_party/index.js:136028), www.wickedreports.com (build/src/third_party/index.js:136028), www.widespace.com (build/src/third_party/index.js:136028), www.wigzo.com (build/src/third_party/index.js:136028), www.wix.com (build/src/third_party/index.js:136028), www.wunderkind.co (build/src/third_party/index.js:136028), www.xaxis.com (build/src/third_party/index.js:136028), www.yahoo.com (build/src/third_party/index.js:136028), www.yotpo.com (build/src/third_party/index.js:136028), www.zoho.com (build/src/third_party/index.js:136028), www2.rampanel.com (build/src/third_party/index.js:136028), xhr.spec.whatwg.org (build/src/third_party/index.js:170921), yandex.com (build/src/third_party/index.js:136028), yandex.ru (build/src/third_party/index.js:136028), yargs.js.org (build/src/third_party/index.js:28878), yastatic.net (build/src/third_party/lighthouse-devtools-mcp-bundle.js:14304), yepnopejs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), youtube.com (build/src/third_party/index.js:136028), youtube.github.io (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), yuilibrary.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), zendesk.com (build/src/third_party/index.js:136028), zeotap.com (build/src/third_party/index.js:136028), zeptojs.com (build/src/third_party/lighthouse-devtools-mcp-bundle.js:39657), zetaglobal.com (build/src/third_party/index.js:136028)
- Env vars: CD4A_INTERNAL_DAEMON_SESSION_ID, CHROME_CONFIG_HOME, CHROME_DEVTOOLS_MCP_CRASH_ON_UNCAUGHT, CHROME_DEVTOOLS_MCP_NO_UPDATE_CHECKS, CHROME_DEVTOOLS_MCP_SESSION_ID, DEBUG, DISPLAY, LOCALAPPDATA, NODE_DEBUG, PUPPETEER_DANGEROUS_NO_SANDBOX, PUPPETEER_TEST_EXPERIMENTAL_CHROME_FEATURES, PUPPETEER_WEBDRIVER_BIDI_ONLY, WS_NO_BUFFER_UTIL, WS_NO_UTF_8_VALIDATE, XDG_CONFIG_HOME, XDG_RUNTIME_DIR, YARGS_MIN_NODE_VERSION
- process_spawn: `execSync(ps -u $(id -u) -o pid= | xargs -I{} cat /proc/{}/environ 2>/dev/null | tr '\0' '\n' | grep -m1 '^DISPLAY=' | cut -d= -f2)` at build/src/BrowserManager.js:102
- process_spawn: `execSync(npm config get registry)` at build/src/bin/check-latest-version.js:17
- process_spawn: `spawn(<dynamic>)` at build/src/daemon/client.js:93
- process_spawn: `childProcess.execFileSync(powershell.exe)` at build/src/daemon/utils.js:89
- process_spawn: `childProcess.execFileSync(ps)` at build/src/daemon/utils.js:100
- dynamic_code: `Function(…)` at build/src/third_party/index.js:39921
- dynamic_code: `Function(…)` at build/src/third_party/index.js:48395
- dynamic_code: `Function(…)` at build/src/third_party/index.js:56233
- Unknowns: DYNAMIC_MODULE_LOAD: 2 sites; MINIFIED_SOURCE: 3 files (effect recovery degraded); REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 0 declared

### @upstash/context7-mcp@4.4.2

- REA Evidence: ev_0abef4016150803c271c2d72118418ae59d8301aa9c92a58df479ed46f93cf64 (subject sha256 ceb2676e3e0a50ea3d021b711bf76ee0791f82ffa64c420bc14665bf6bc84e89)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 7 request sites; 5 literal hosts; declared dependency: undici
- secret_env_access: reads 7 credential-like env vars
- Hosts: clerk.context7.com (dist/lib/constants.js:9), context7.com (dist/index.js:183), integrations.vercel.com (dist/lib/vercelMarketplaceJwt.js:2), login.microsoftonline.com (dist/lib/jwt.js:15), mcp.context7.com (dist/lib/constants.js:8)
- Env vars: AUTH_SERVER_URL, CONTEXT7_API_KEY, CONTEXT7_API_URL, EMA_ISSUER, EMA_JWKS_URL, HTTPS_PROXY, HTTP_PROXY, MCP_AUTH_ENFORCEMENT, MCP_CLIENT_IP_ASSERTION_KEY, MCP_OAUTH_ALLOWED_AUDIENCES, MCP_OAUTH_AUDIENCE_ENFORCEMENT, MCP_OAUTH_TOKEN_VALIDATION, NODE_EXTRA_CA_CERTS, OAUTH_AUTH_SERVER_URL, OAUTH_JWKS_URL, OPENAI_APPS_CHALLENGE_TOKEN, RESOURCE_URL, VERCEL_MARKETPLACE_OIDC_AUDIENCE, VERCEL_MARKETPLACE_OIDC_ISSUER, http_proxy, https_proxy
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 13 declared

### mcp-remote@0.15.1

- REA Evidence: ev_ed5f637737de277026222db7f7297f8f18b2368404fd47d3c9d7b18dddb71966 (subject sha256 5ff151af2eda6904e2ea5654e0cd20d83a8d2be59fa58338b574c4ffcd873241)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: 1 spawn/exec call sites
- filesystem_write: 13 write/delete call sites
- network_egress: 9 request sites; 3 literal hosts; declared dependency: undici
- dynamic_code: 2 eval/Function/vm sites
- remote_mcp_proxy: uses MCP client SDK (forwards to another server)
- Hosts: raw.githubusercontent.com (dist/chunk-KJCT2FXL.js:22829), remote.mcp.server (dist/proxy.js:12692), server-url (dist/client.js:151)
- Env vars: BROWSER, DBUS_SESSION_BUS_ADDRESS, DISPLAY, MCP_REMOTE_CONFIG_DIR, WAYLAND_DISPLAY
- dynamic_code: `Function(…)` at dist/chunk-KJCT2FXL.js:22696
- process_spawn: `spawn(<dynamic>)` at dist/chunk-KJCT2FXL.js:34090
- dynamic_code: `Function(…)` at dist/proxy.js:7227
- Unknowns: REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 4 declared

### @modelcontextprotocol/server-filesystem@1.0.0

- REA Evidence: ev_9cca9fdade82fe7e91a595c4511703e42d8852b5f3814f30e768ab51a2e10722 (subject sha256 d969523faacb196f8b33a3569b9f89aedbf96d098ba86dbff1b7efb676b99f49)
- Tier T2 local-mutating; max authorization L2 conditional; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- filesystem_write: 3 write/delete call sites
- Declared tools (14): create_directory, directory_tree, edit_file, get_file_info, list_allowed_directories, list_directory, list_directory_with_sizes, move_file, read_file, read_media_file, read_multiple_files, read_text_file, search_files, write_file
- Unknowns: DYNAMIC_JSON_LOAD: 1 sites (data, not code); TRANSITIVE_DEPENDENCIES_UNSCANNED: 5 declared

### @modelcontextprotocol/server-everything@1.0.0

- REA Evidence: ev_b50046fe00e34bdb8339a064d0f0627ace62c31f4612a207249868ffb19e7bdf (subject sha256 759ab24b667020b32f7e42800c90f1e82edf67194ac00f8477cc85530f3a8050)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 1 request sites; 1 literal hosts
- Hosts: raw.githubusercontent.com (dist/tools/gzip-file-as-resource.js:19)
- Env vars: GZIP_ALLOWED_DOMAINS, GZIP_MAX_FETCH_SIZE, GZIP_MAX_FETCH_TIME_MILLIS, PORT
- Unknowns: MINIFIED_SOURCE: 1 files (effect recovery degraded); DYNAMIC_JSON_LOAD: 1 sites (data, not code); TRANSITIVE_DEPENDENCIES_UNSCANNED: 5 declared

### @modelcontextprotocol/server-memory@1.0.0

- REA Evidence: ev_513dff946ab0ac076c5c398e6783b2895bd5341d264840c96954170115501967 (subject sha256 12ce9ee85969cb39c863af6941b9c2e7647f336b7971fe8702d92fb9ccde32fb)
- Tier T2 local-mutating; max authorization L2 conditional; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- filesystem_write: 10 write/delete call sites
- Env vars: MEMORY_FILE_PATH
- Declared tools (9): add_observations, create_entities, create_relations, delete_entities, delete_observations, delete_relations, open_nodes, read_graph, search_nodes
- Unknowns: DYNAMIC_JSON_LOAD: 1 sites (data, not code); TRANSITIVE_DEPENDENCIES_UNSCANNED: 2 declared

### @wonderwhy-er/desktop-commander@0.3.0

- REA Evidence: ev_c19e657472851cecab83b4eb66be04ad679d81ac9f252db42102d66b1c6e0f39 (subject sha256 10ebfa167c73f3ed7b9085f5266bc11d51a68fb51a5f85ca9ef98e4a2829d78e)
- Tier T4 install-time-executing; max authorization L0 informational; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: 16 spawn/exec call sites
- filesystem_write: 54 write/delete call sites
- network_egress: 16 request sites; 11 literal hosts; imports network client SDK: @supabase/supabase-js; declared dependency: @supabase/supabase-js
- dynamic_code: 2 eval/Function/vm sites
- install_scripts: package.json scripts: postinstall
- remote_mcp_proxy: uses MCP client SDK (forwards to another server); uses MCP client SDK
- Hosts: calendar.app.google (dist/setup-claude-server.js:621), claude.ai (dist/setup-claude-server.js:645), dc-telemetry-proxy-83847352264.europe-west1.run.app (dist/setup-claude-server.js:15), desktopcommander.app (dist/utils/dockerPrompt.js:24), discord.com (dist/setup-claude-server.js:622), mcp.desktopcommander.app (dist/remote-device/device.js:80), prosemirror.net (dist/ui/file-preview/preview-runtime.js:93), schemas.openxmlformats.org (dist/utils/files/docx.js:417), tally.so (dist/tools/feedback.js:76), telemetry.desktopcommander.app (dist/setup-claude-server.js:14), www.google.com (dist/tools/pdf/markdown.js:728)
- Env vars: AI_AGENT, APPDATA, CI, CIRCLECI, CI_PROJECT_NAME, CLAUDE_CODE_ENTRYPOINT, CLAUDE_PLUGIN_DATA, CODESPACES, CODESPACE_NAME, COMPOSE_PROJECT_NAME, COMPOSE_SERVICE, CONTAINER_HOST, CONTAINER_IMAGE, ComSpec, DC_DEBUG, DC_FLAG_URL, DC_REMOTE_DEVICE, DEBUG, DEBUG_MODE, DESKTOP_COMMANDER_DISABLE_TELEMETRY, DOCKER_CONTAINER, DOCKER_IMAGE, DOCKER_NODE_ID, DOCKER_SWARM_MODE, GITHUB_ACTIONS, GITHUB_REPOSITORY, GITHUB_WORKFLOW, GITLAB_CI, GITPOD_WORKSPACE_ID, HOSTNAME, HOST_PLATFORM, IMAGE_NAME, JENKINS_URL, JOB_NAME, KUBERNETES_NAMESPACE, KUBERNETES_NODE_NAME, KUBERNETES_PORT, KUBERNETES_SERVICE_HOST, LXC_NAME, MCP_CLIENT_DOCKER, MCP_DXT, MCP_SERVER_URL, NODE_ENV, NODE_NAME, PATH, PATHEXT, PODMAN_CONTAINER, PODMAN_IMAGE, POD_NAME, POD_NAMESPACE, PROMPT, ProgramFiles(x86), ProgramFiles, SHELL, SystemRoot, TERM, TERM_PROGRAM, TRAVIS, UV_THREADPOOL_SIZE, VSCODE_PID, WSLENV, WSL_DISTRO_NAME, WT_SESSION, _, npm_command, npm_config_global, npm_config_user_agent, npm_execpath, npm_lifecycle_event, npm_lifecycle_script, npm_package_version, npm_version
- process_spawn: `exec(npm --version)` at dist/remote-device/diagnostics/report.js:129
- process_spawn: `execFile(sw_vers)` at dist/remote-device/diagnostics/report.js:142
- process_spawn: `execFile(powershell.exe)` at dist/remote-device/diagnostics/report.js:328
- process_spawn: `execFile(ps)` at dist/remote-device/diagnostics/report.js:338
- process_spawn: `spawn(<dynamic>)` at dist/search-manager.js:159
- process_spawn: `exec(npm --version)` at dist/setup-claude-server.js:128
- process_spawn: `exec(<dynamic>)` at dist/setup-claude-server.js:544
- process_spawn: `spawn(<dynamic>)` at dist/terminal-manager.js:141
- Unknowns: DYNAMIC_MODULE_LOAD: 4 sites; MINIFIED_SOURCE: 2 files (effect recovery degraded); REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 34 declared

### @modelcontextprotocol/server-sequential-thinking@1.0.0

- REA Evidence: ev_13e36703776937b7ab9c9cb26ff0ab567fd22b8c7c0e84333eb69451ec840f4d (subject sha256 60602a45de0bfe357a4ffe77de001b67fbcde0a92e4e1eeb4512881651ad7d58)
- Tier T0 pure-compute; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- Env vars: DISABLE_THOUGHT_LOGGING
- Declared tools (1): sequentialthinking
- Unknowns: DYNAMIC_JSON_LOAD: 1 sites (data, not code); TRANSITIVE_DEPENDENCIES_UNSCANNED: 4 declared

### @notionhq/notion-mcp-server@2.5.2

- REA Evidence: ev_426942bc024525ae2f7a8bf8ec9e1822fa647983ef83998449137ad36583451f (subject sha256 cffc5f1f414bed6001c19fa94936ddebb97a1608ed26b66ae2f30675c757ad86)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- filesystem_write: 3 write/delete call sites
- network_egress: 2 request sites; 5 literal hosts; declared dependency: axios, node-fetch
- dynamic_code: 2 eval/Function/vm sites
- secret_env_access: reads 3 credential-like env vars
- Hosts: api.notion.com (bin/cli.mjs:209), dub.sh (bin/cli.mjs:55), git.io (bin/cli.mjs:10), raw.githubusercontent.com (bin/cli.mjs:69), www.notion.so (bin/cli.mjs:209)
- Env vars: AUTH_TOKEN, BASE_URL, DEBUG, DEBUG_FD, DEBUG_MIME, ENABLE_TOKEN_PASSTHROUGH, NODE_ENV, NOTION_TOKEN, NO_DEPRECATION, NO_PROXY, OPENAPI_MCP_HEADERS, TRACE_DEPRECATION, no_proxy
- dynamic_code: `Function(…)` at bin/cli.mjs:7
- dynamic_code: `Function(…)` at bin/cli.mjs:69
- Unknowns: MINIFIED_SOURCE: 1 files (effect recovery degraded); REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 12 declared

### @azure/mcp@3.0.0

- REA Evidence: ev_444143ec94f262c8fae5450bce9fa114c8bca73a9c378cc0045b9aad58699754 (subject sha256 950fc69217eb8a7808c0a9a31a282c20cf53a24f9b8e340d98b498018272d222)
- Tier T4 install-time-executing; max authorization L0 informational; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: 2 spawn/exec call sites
- filesystem_write: 4 write/delete call sites
- network_egress: 0 request sites; 1 literal hosts
- install_scripts: package.json scripts: postinstall
- Hosts: aka.ms (scripts/post-install-script.js:20)
- Env vars: DEBUG, LOCALAPPDATA, XDG_CACHE_HOME
- process_spawn: `execSync(<dynamic>)` at index.js:201
- process_spawn: `execSync(`template`)` at index.js:206
- Unknowns: DYNAMIC_MODULE_LOAD: 2 sites; TRANSITIVE_DEPENDENCIES_UNSCANNED: 0 declared

### firecrawl-mcp@3.30.3

- REA Evidence: ev_fded8abb6640af117bbd9d0ca98c91e24184b880b8847a613af3318512edc462 (subject sha256 f66908410bafd4306db7ce485561a54c76712f72e386dd831abb5554e0c2db51)
- Tier T1 network-bound; max authorization L3 supervised; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- network_egress: 15 request sites; 5 literal hosts; imports network client SDK: firecrawl; declared dependency: undici; declared dependency: firecrawl
- secret_env_access: reads 4 credential-like env vars
- Hosts: api.firecrawl.dev (dist/index.js:2732), docs.firecrawl.dev (dist/index.js:3209), firecrawl.dev (dist/index.js:6674), mcp.firecrawl.dev (dist/index.js:3567), www.firecrawl.dev (dist/index.js:3550)
- Env vars: CLOUD_SERVICE, FASTMCP_ENDPOINT, FASTMCP_HOST, FASTMCP_PORT, FASTMCP_STATELESS, FASTMCP_TRANSPORT, FIRECRAWL_API_KEY, FIRECRAWL_API_URL, FIRECRAWL_MCP_RESOURCE_URL, FIRECRAWL_MCP_SEARCH_ENABLED, FIRECRAWL_MCP_SEARCH_ENDPOINT, FIRECRAWL_MCP_SEARCH_OAUTH_ONLY, FIRECRAWL_MCP_SEARCH_PORT, FIRECRAWL_MCP_SEARCH_RESOURCE_URL, FIRECRAWL_OAUTH_INTROSPECT_CACHE_TTL_MS, FIRECRAWL_OAUTH_INTROSPECT_SECRET, FIRECRAWL_OAUTH_ISSUER, FIRECRAWL_OAUTH_TOKEN, HOST, HTTP_STREAMABLE_SERVER, MCP_DELEGATED_CREDENTIAL_SECRET, MCP_OAUTH_ACCEPT_LEGACY_V2_MCP_AUD, PORT, SSE_LOCAL
- Declared tools (28): firecrawl_agent, firecrawl_agent_status, firecrawl_check_crawl_status, firecrawl_crawl, firecrawl_credit_usage, firecrawl_developer_search, firecrawl_extract, firecrawl_feedback, firecrawl_gov_search, firecrawl_interact, firecrawl_interact_stop, firecrawl_map, firecrawl_monitor_check, firecrawl_monitor_checks, firecrawl_monitor_create, firecrawl_monitor_delete, firecrawl_monitor_get, firecrawl_monitor_list, firecrawl_monitor_run, firecrawl_monitor_update, firecrawl_parse, firecrawl_research_inspect_paper, firecrawl_research_read_paper, firecrawl_research_related_papers, firecrawl_research_search_github, …
- Unknowns: REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 11 declared

### @modelcontextprotocol/server-postgres@0.6.2

- REA Evidence: ev_8e3fddc79ab656dc908b546cf15120434f43685eafe6d9adebefb6903dbc13c5 (subject sha256 5d8d375a2e79b8929cbcf7b153d1753e999f4bccb47b481fa9a7e99879469208)
- Tier T1 network-bound; max authorization L3 supervised; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- network_egress: imports network client SDK: pg; declared dependency: pg
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 2 declared; THIN_WRAPPER: 3796 bytes of own code; behavior lives in 2 dependencies

### @modelcontextprotocol/server-slack@2025.4.25

- REA Evidence: ev_98f033d38fe004f600967ee516b63df2799b44f8225ead54ad4dfedc98635b56 (subject sha256 e9406719a72107129a854fc842d8313b70403ae506152433eae06eb881989cb1)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 9 request sites; 1 literal hosts
- secret_env_access: reads 1 credential-like env vars
- Hosts: slack.com (dist/index.js:175)
- Env vars: SLACK_BOT_TOKEN, SLACK_CHANNEL_IDS, SLACK_TEAM_ID
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 1 declared

### @modelcontextprotocol/server-github@2025.4.8

- REA Evidence: ev_1f96aa4dfbc9b28bda6dab1b4f6eb50f75350d20d2dcb43a89ee05d039ec616a (subject sha256 08e0e9c8b68c3bb560c59f745a8eabe9f39598aaeaba859aa20c23bdcd38118d)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 1 request sites; 0 literal hosts; declared dependency: node-fetch
- secret_env_access: reads 1 credential-like env vars
- Env vars: GITHUB_PERSONAL_ACCESS_TOKEN
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 7 declared

### @sentry/mcp-server@0.42.0

- REA Evidence: ev_5cf9a1cf6c65d76cddfcd6d26b50d4806d8ab9b10a015d1f9497c3eefd7aabf9 (subject sha256 f16139aa5fffd67b762c1fd56c7e975e6def03d6f5e3574d431891f0e4732f5c)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: 4 spawn/exec call sites
- filesystem_write: 9 write/delete call sites
- network_egress: 24 request sites; 65 literal hosts; imports network client SDK: @sentry/mcp-core/utils/url-utils, @sentry/mcp-core/skills, @sentry/core, @sentry/core/server, @sentry/node, @sentry/mcp-core/types; declared dependency: @sentry/node, @sentry/core
- dynamic_code: 2 eval/Function/vm sites
- secret_env_access: reads 5 credential-like env vars
- Hosts: ai-gateway.vercel.sh (dist/index.cjs:8949), ai-sdk.dev (dist/index.cjs:11164), api.anthropic.com (dist/index.cjs:24066), api.openai.com (dist/index.cjs:28693), api.vercel.com (dist/token-util-BRoQwIG6.cjs:296), aws.amazon.com (dist/index.cjs:33284), azure.microsoft.com (dist/index.cjs:33284), bosh.io (dist/index.cjs:33406), cicd.example.org (dist/index.cjs:33202), cloud.google.com (dist/index.cjs:33284), connectrpc.com (dist/index.cjs:36389), datatracker.ietf.org (dist/index.cjs:35968), developer.android.com (dist/index.cjs:32485), developer.apple.com (dist/index.cjs:32657), docs.aws.amazon.com (dist/index.cjs:33289), docs.datastax.com (dist/index.cjs:33033), docs.docker.com (dist/index.cjs:33540), docs.openssl.org (dist/index.cjs:36915), docs.oracle.com (dist/index.cjs:34203), docs.sentry.io (dist/index.cjs:40624), example.openai.azure.com (dist/usage-DZ4QDygT.cjs:62), firebase.google.com (dist/index.cjs:32657), git-scm.com (dist/index.cjs:37204), gitlab.com (dist/index.cjs:37194), google.aip.dev (dist/index.cjs:33289), img.shields.io (dist/index.cjs:37029), kubernetes.io (dist/index.cjs:35546), learn.microsoft.com (dist/index.cjs:32886), logtape.org (dist/index.cjs:1616), mcp.sentry.dev (dist/index.cjs:32756), my-org.sentry.io (dist/index.cjs:20375), my-organization.sentry.io (dist/index.cjs:409), nodejs.org (dist/index.cjs:37170), nvlpubs.nist.gov (dist/index.cjs:32820), openfeature.dev (dist/index.cjs:34286), openrouter.ai (dist/index.cjs:28879), opentelemetry.io (dist/index.cjs:36117), publicsuffix.org (dist/index.cjs:37063), raw.githubusercontent.com (dist/index.cjs:55213), redacted (dist/index.cjs:37029), sentry.io (dist/index.cjs:20462), sentry.sentry.io (dist/index.cjs:19696), slsa.dev (dist/index.cjs:32789), standards.ieee.org (dist/index.cjs:34951), support.google.com (dist/index.cjs:37190), svnbook.red-bean.com (dist/index.cjs:37220), tools.ietf.org (dist/index.cjs:35075), us.sentry.io (dist/index.cjs:435), username (dist/index.cjs:37029), v1-32.docs.kubernetes.io (dist/index.cjs:35553), vercel.com (dist/index.cjs:8276), wicg.github.io (dist/index.cjs:32978), wiki.osdev.org (dist/index.cjs:34958), wikipedia.org (dist/index.cjs:33074), www.alibabacloud.com (dist/index.cjs:33284), www.britannica.com (dist/index.cjs:33074), www.foo.bar (dist/index.cjs:37031), www.freedesktop.org (dist/index.cjs:36602), www.iana.org (dist/index.cjs:36826), www.ietf.org (dist/index.cjs:36602), www.iso.org (dist/index.cjs:34197), www.itu.int (dist/index.cjs:35203), www.merriam-webster.com (dist/index.cjs:37218), www.rfc-editor.org (dist/index.cjs:34944), www.tencentcloud.com (dist/index.cjs:33284)
- Env vars: ANTHROPIC_API_KEY, ANTHROPIC_MODEL, EMBEDDED_AGENT_PROVIDER, LOCALAPPDATA, LOG_LEVEL, NODE_ENV, OPENAI_API_KEY, OPENAI_API_VERSION, OPENAI_MODEL, OPENROUTER_API_KEY, OPENROUTER_MODEL, OPENROUTER_REASONING_EFFORT, SENTRY_MCP_AUTH_CACHE, SENTRY_RELEASE, VERCEL_OIDC_TOKEN, XDG_DATA_HOME
- process_spawn: `exec(`template`)` at dist/device-code-flow-mwBASRbi.js:93
- process_spawn: `exec(`template`)` at dist/device-code-flow-mwBASRbi.js:94
- process_spawn: `exec(`template`)` at dist/device-code-flow-mwBASRbi.js:95
- process_spawn: `exec(`template`)` at dist/device-code-flow-mwBASRbi.js:96
- dynamic_code: `Function(…)` at dist/index.cjs:55080
- dynamic_code: `Function(…)` at dist/index.js:55081
- Unknowns: REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 5 declared

### figma-developer-mcp@0.13.2

- REA Evidence: ev_f11bf10f654cbc0651af3787d1d7dce756437a16cd5c7565e0410c75c7cd39f1 (subject sha256 4a7ad2929e0e69c60770090bf7af13ab623af7c7e4d2e178ff28927b95635d3e)
- Tier T2 local-mutating; max authorization L2 conditional; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- filesystem_write: 6 write/delete call sites
- network_egress: 2 request sites; 5 literal hosts; declared dependency: undici
- Hosts: api.figma.com (dist/chunk-BMERTI2I.js:15), developers.figma.com (dist/chunk-BMERTI2I.js:15), proxy:8080 (dist/bin.js:2), us.i.posthog.com (dist/chunk-BMERTI2I.js:1), www.framelink.ai (dist/chunk-BMERTI2I.js:12)
- Env vars: CI, DO_NOT_TRACK, FRAMELINK_TELEMETRY, NODE_ENV
- Unknowns: MINIFIED_SOURCE: 3 files (effect recovery degraded); TRANSITIVE_DEPENDENCIES_UNSCANNED: 16 declared

### @supabase/mcp-server-supabase@0.14.0

- REA Evidence: ev_dca67849738052480fe55496dc13b5a9671b527e87623b22252bb6e5ad8e034b (subject sha256 afaa07fd116b9dcab5076d99b28262f51e1c35b1d77b934d1d7ce569b01f8290)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 4 request sites; 4 literal hosts; imports network client SDK: @supabase/mcp-utils; declared dependency: @supabase/mcp-utils
- secret_env_access: reads 1 credential-like env vars
- Hosts: api.supabase.com (dist/chunk-I7QY5ONI.cjs:49), api.supabase.green (dist/cli.cjs:2), supabase.com (dist/chunk-A3TWEVBP.cjs:12), supabase.green (dist/cli.cjs:2)
- Env vars: SUPABASE_ACCESS_TOKEN, SUPABASE_CONTENT_API_URL
- Unknowns: MINIFIED_SOURCE: 8 files (effect recovery degraded); TRANSITIVE_DEPENDENCIES_UNSCANNED: 7 declared

### @hubspot/mcp-server@0.4.0

- REA Evidence: ev_0dc8878258ae9ed921d4b1e5e3e77b1e1b1c50990eed4e9d19ef585b7cd81ed9 (subject sha256 90adcdc56c0a56f218077edddcd4d49a1da575c821a1cf4298c207a1cef36ea4)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 1 request sites; 2 literal hosts
- secret_env_access: reads 2 credential-like env vars
- Hosts: api.hubspot.com (dist/utils/client.js:7), developers.hubspot.com (dist/tools/links/feedbackLinkTool.js:29)
- Env vars: BASE_URL_OVERRIDE, HUBSPOT_ACCESS_TOKEN, PRIVATE_APP_ACCESS_TOKEN
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 3 declared

### @modelcontextprotocol/server-puppeteer@2025.5.12

- REA Evidence: ev_1f3fe1216003f0ba2b48bd19f26fa5d97729a1b96e503a3f52564c8865a00e04 (subject sha256 b39018cdc5a2ba1f2b86d2dc3f9979fac81232491be82a79b09b293c8b743049)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (CODE_EXECUTION_EFFECTS_REQUIRE_HUMAN_SCOPE)
- browser_automation: imports browser-automation module; declared dependency: puppeteer
- Env vars: ALLOW_DANGEROUS, DOCKER_CONTAINER, PUPPETEER_LAUNCH_OPTIONS
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 2 declared

### @modelcontextprotocol/server-brave-search@0.6.2

- REA Evidence: ev_c317aefd3afd7eedd08d8e0f369ecb5b159220230fe864695735e0ff18a55de8 (subject sha256 8af552ae2b240059666c1b4219b065c897428254adc25746a665d402a5bfdbb3)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 4 request sites; 1 literal hosts
- secret_env_access: reads 1 credential-like env vars
- Hosts: api.search.brave.com (dist/index.js:109)
- Env vars: BRAVE_API_KEY
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 1 declared

### tavily-mcp@0.2.22

- REA Evidence: ev_da29a4bb58450cef8e5cb733366dce4ce6fa3ec1c148ea93c8a10bdfd1dfa369 (subject sha256 741dc1bc844641a576f84d6935ea5ebbb807accc4c6681d7c50e6da5f269ce8f)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 0 request sites; 2 literal hosts; declared dependency: axios
- secret_env_access: reads 1 credential-like env vars
- Hosts: api.tavily.com (build/index.js:21), docs.tavily.com (build/index.js:28)
- Env vars: DEFAULT_PARAMETERS, TAVILY_API_KEY, TAVILY_HUMAN_ID
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 4 declared

### exa-mcp-server@3.4.2

- REA Evidence: ev_614200909078d8d61b4be01eea633e3c7f478b03ae76cddc79b172c43f4f02c2 (subject sha256 f38692bca860632e722fc4475183e4af506f4928b5a090d6130654a5a2507dc4)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- network_egress: 3 request sites; 6 literal hosts; declared dependency: exa-js
- dynamic_code: 1 eval/Function/vm sites
- secret_env_access: reads 1 credential-like env vars
- Hosts: api.agnost.ai (dist/stdio.cjs:40363), api.exa.ai (dist/stdio.cjs:42252), dashboard.exa.ai (dist/stdio.cjs:42835), exa.ai (dist/stdio.cjs:45625), mcp.exa.ai (dist/stdio.cjs:42838), raw.githubusercontent.com (dist/stdio.cjs:3088)
- Env vars: AGNOST_DISABLE_LOGS, AGNOST_LOG_LEVEL, DEBUG, EXA_API_KEY, NO_PROXY, no_proxy
- dynamic_code: `Function(…)` at dist/stdio.cjs:2943
- Declared tools (9): agent_run, company_research_exa, deep_researcher_check, deep_researcher_start, deep_search_exa, get_code_context_exa, linkedin_search_exa, people_search_exa, web_search_advanced_exa
- Unknowns: MINIFIED_SOURCE: 1 files (effect recovery degraded); REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 6 declared

### @stripe/mcp@0.3.3

- REA Evidence: ev_cf38eeb589c129f2ac62f27b32425245700bb82df14e8ba56fdfd7e0e6fe32bd (subject sha256 07de03f4477fe9a3d2337b889f7222cdddc6e8b8db838554086a90f5e51dbe71)
- Tier T2 local-mutating; max authorization L2 conditional; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 0 request sites; 3 literal hosts
- remote_mcp_proxy: uses MCP client SDK (forwards to another server); uses MCP client SDK
- secret_env_access: reads 1 credential-like env vars
- Hosts: dashboard.stripe.com (dist/cli.js:18), docs.stripe.com (dist/cli.js:45), mcp.stripe.com (dist/index.js:11)
- Env vars: STRIPE_SECRET_KEY
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 2 declared

### @apify/actors-mcp-server@0.18.4

- REA Evidence: ev_83a2865b59cc823e707ace725eb593c01a3d5790c16f68c6507c519a56afa6c8 (subject sha256 a76022a80f5db2521abb5bfa2345a20e63592de6b3575dacf8c5f3932af13b94)
- Tier T2 local-mutating; max authorization L2 conditional; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- network_egress: 7 request sites; 29 literal hosts; imports network client SDK: apify-client, @apify/log, @apify/utilities, @sentry/node, @apify/actors-mcp-server/internals.js, @apify/actors-mcp-server/internals/test-kit.js; declared dependency: axios; declared dependency: @apify/datastructures, @apify/log, @apify/utilities, @sentry/node
- remote_mcp_proxy: uses MCP client SDK (forwards to another server); uses MCP client SDK
- secret_env_access: reads 1 credential-like env vars
- Hosts: 916ec26e2f0abda151403acb5d8370c7 (dist/instrument.js:21), api-securitybyobscurity.apify.com (dist/const.js:219), api.apify.com (dist/apify_client.js:17), api.invalid (dist/tools/api/apify_api_blocklist.js:97), apify-image-uploads-prod.s3.amazonaws.com (dist/resources/widgets.js:18), apify-image-uploads-prod.s3.us-east-1.amazonaws.com (dist/resources/widgets.js:17), apify.com (dist/const.js:211), bugs.chromium.org (dist/web/dist/actor-run-widget.js:3711), bugs.webkit.org (dist/web/dist/actor-run-widget.js:3711), bugzilla.mozilla.org (dist/web/dist/actor-run-widget.js:3711), cdn.apify.com (dist/web/dist/actor-run-widget.js:653), console-securitybyobscurity.apify.com (dist/const.js:215), console.apify.com (dist/const.js:213), crawlee.dev (dist/const.js:181), developer.mozilla.org (dist/web/dist/actor-run-widget.js:632), docs.apify.com (dist/const.js:181), fonts.googleapis.com (dist/resources/widgets.js:20), fonts.gstatic.com (dist/resources/widgets.js:21), images.apifyusercontent.com (dist/resources/widgets.js:16), mcp.apify.com (dist/const.js:224), nodejs.org (dist/stdio.js:139), npms.io (dist/web/dist/actor-run-widget.js:9), placeholder (dist/test_kit/cases/registration.cases.js:109), player.vimeo.com (dist/web/dist/actor-run-widget.js:2177), reactjs.org (dist/web/dist/actor-run-widget.js:1), tailwindcss.com (dist/web/dist/actor-run-widget.js:3711), www.ibm.com (dist/web/dist/actor-run-widget.js:1124), www.notion.so (dist/web/dist/actor-run-widget.js:3385), www.youtube.com (dist/web/dist/actor-run-widget.js:2177)
- Env vars: APIFY_API_BASE_URL, APIFY_API_PUBLIC_BASE_URL, APIFY_CONSOLE_BASE_URL, APIFY_IS_AT_HOME, APIFY_TOKEN, HOST, HOSTNAME, PORT, REACT_APP_SC_ATTR, SC_ATTR, SKYFIRE_SELLER_SERVICE_ID, TELEMETRY_ENABLED, TELEMETRY_ENV, UI_MODE
- Unknowns: MINIFIED_SOURCE: 2 files (effect recovery degraded); REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 18 declared

### task-master-ai@0.43.1

- REA Evidence: ev_175645fe98887dd3c09e1f6e912cbfc2beed0859b65be15b2d9d334b23d20665 (subject sha256 962cacd964fba9a81fdcd09ba17154dd4ba64162af5a29ce96a26bc246ed8d74)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: 24 spawn/exec call sites
- filesystem_write: 169 write/delete call sites
- network_egress: 15 request sites; 14 literal hosts; imports network client SDK: ai, @ai-sdk/anthropic, @ai-sdk/perplexity, @ai-sdk/google, @ai-sdk/openai, @ai-sdk/xai; declared dependency: undici; declared dependency: @ai-sdk/amazon-bedrock, @ai-sdk/anthropic, @ai-sdk/azure, @ai-sdk/google
- secret_env_access: reads 11 credential-like env vars
- Hosts: api.perplexity.ai (dist/ai-services-unified-CsFt27lZ.js:1), api.x.ai (dist/ai-services-unified-CsFt27lZ.js:1), api.z.ai (dist/ai-services-unified-CsFt27lZ.js:7), app.tryhamster.com (dist/dependency-manager-BJq6jWA5.js:214), bedrock.us-east-1.amazonaws.com (dist/config-manager-DTKWXIqv.js:270), ce8c03ca1dd0da5b9837c6ba1b3a0f9d (dist/sentry-CZp3yiwv.js:1), docs.kilocode.com (dist/profiles-CvDnJeks.js:3487), kilocode.com (dist/profiles-CvDnJeks.js:3487), opencode.ai (dist/profiles-CvDnJeks.js:3489), raw.githubusercontent.com (dist/profiles-CvDnJeks.js:1393), registry.npmjs.org (dist/profiles-CvDnJeks.js:1393), tryhamster.com (dist/config-manager-DTKWXIqv.js:2), www. (dist/profiles-CvDnJeks.js:3470), x.com (dist/dependency-manager-BJq6jWA5.js:1)
- Env vars: ANTHROPIC_API_KEY, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AZURE_OPENAI_API_KEY, CI, CLAUDE_CODE_API_KEY, CLAUDE_CODE_OAUTH_TOKEN, DEBUG, GOOGLE_API_KEY, GOOGLE_APPLICATION_CREDENTIALS, GROK_CLI_API_KEY, HOME, MCP_MODE, NODE_ENV, NO_COLOR, PROFILE, PSModulePath, SENTRY_DEBUG, SHELL, TASKMASTER_DEBUG, TASKMASTER_LOG_LEVEL, TASKMASTER_ORIGINAL_CWD, TASKMASTER_SKIP_AUTO_UPDATE, TASKMASTER_TAG, TASK_MASTER_ALLOW_METADATA_UPDATES, TASK_MASTER_LOG_LEVEL, TASK_MASTER_MCP, TASK_MASTER_NO_COLOR, TASK_MASTER_PROJECT_ROOT, TASK_MASTER_SILENT, TASK_MASTER_TOOLS, TM_AUTH_CALLBACK_URL, TM_BASE_DOMAIN, TM_DEBUG, TM_HIDE_BANNER, TM_LOG_LEVEL, TM_SILENT, TM_SUPABASE_ANON_KEY, TM_SUPABASE_URL, USERPROFILE, npm_package_version
- process_spawn: `k(claude --version)` at dist/ai-services-unified-CsFt27lZ.js:3
- process_spawn: `A(grok)` at dist/ai-services-unified-CsFt27lZ.js:7
- process_spawn: `A(grok)` at dist/ai-services-unified-CsFt27lZ.js:7
- process_spawn: `k(codex --version)` at dist/ai-services-unified-CsFt27lZ.js:7
- process_spawn: `ue(docker)` at dist/config-manager-DTKWXIqv.js:213
- process_spawn: `ue(docker)` at dist/config-manager-DTKWXIqv.js:213
- process_spawn: `ue(<dynamic>)` at dist/config-manager-DTKWXIqv.js:224
- process_spawn: `le(<dynamic>)` at dist/config-manager-DTKWXIqv.js:224
- Declared tools (44): add_dependency, add_subtask, add_tag, add_task, analyze_project_complexity, autopilot_abort, autopilot_commit, autopilot_complete_phase, autopilot_finalize, autopilot_next, autopilot_resume, autopilot_start, autopilot_status, clear_subtasks, complexity_report, copy_tag, delete_tag, expand_all, expand_task, fix_dependencies, generate, get_task, get_tasks, initialize_project, list_tags, …
- Unknowns: MINIFIED_SOURCE: 6 files (effect recovery degraded); REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 61 declared

### @executeautomation/playwright-mcp-server@1.0.12

- REA Evidence: ev_97a535faee46d98b5c652cd3cb1fd43b970bcf13724092befdf643b391c1a4e5 (subject sha256 1d3da27233d27645704bafef07da5370f7652ff395e2a256787b35848e86802d)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (CODE_EXECUTION_EFFECTS_REQUIRE_HUMAN_SCOPE)
- process_spawn: 1 spawn/exec call sites
- filesystem_write: 9 write/delete call sites
- network_egress: imports network client SDK: @ai-sdk/openai
- browser_automation: imports browser-automation module; declared dependency: @playwright/browser-chromium, @playwright/browser-firefox, @playwright/browser-webkit, @playwright/test
- Env vars: CHROME_EXECUTABLE_PATH, HOME, LOG_FILE_PATH, LOG_FORMAT, LOG_LEVEL, LOG_MAX_FILES, LOG_MAX_FILE_SIZE, LOG_OUTPUTS, npm_package_version
- process_spawn: `spawn(npx)` at dist/toolHandler.js:112
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 10 declared

### @heroku/mcp-server@1.2.12

- REA Evidence: ev_9016a22b750d74b33b0dac73e6f38b8f3effd73fb30c74c3943b7f18942852a5 (subject sha256 4d5e5444cf8131d34e5811d1eb857642dc7739aa42b6b2cf7088738bdeebacde)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (CODE_EXECUTION_EFFECTS_REQUIRE_HUMAN_SCOPE)
- process_spawn: 2 spawn/exec call sites
- filesystem_write: 2 write/delete call sites
- network_egress: 21 request sites; 2 literal hosts; declared dependency: node-fetch; declared dependency: @heroku-cli/schema
- secret_env_access: reads 1 credential-like env vars
- Hosts: api.heroku.com (dist/tools/deploy-to-heroku.js:85), devcenter.heroku.com (dist/resources/dev-center-resource.js:8)
- Env vars: HEROKU_API_KEY, MCP_SERVER_REQUEST_TIMEOUT
- process_spawn: `execSync(`template`)` at dist/tools/deploy-to-heroku.js:247
- process_spawn: `execSync(git ls-files -c -o --exclude-standard)` at dist/utils/tarball.js:62
- Declared tools (37): create_addon, create_app, deploy_one_off_dyno, deploy_to_heroku, get_addon_info, get_app_info, get_app_logs, list_addon_plans, list_addon_services, list_addons, list_ai_available_models, list_apps, list_private_spaces, list_teams, maintenance_off, maintenance_on, make_ai_inference, pg_backups, pg_credentials, pg_info, pg_kill, pg_locks, pg_maintenance, pg_outliers, pg_ps, …
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 8 declared

### @21st-dev/magic@0.2.3

- REA Evidence: ev_4600b5028801a597bb9f3b8ce753fe823f08681b12738b6b24262d86a0530ebc (subject sha256 2c63d15a007e40c1df8e68caca44e56407d53aff85bec25a8fa2f485761e2c40)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 1 request sites; 1 literal hosts
- secret_env_access: reads 3 credential-like env vars
- Hosts: 21st.dev (dist/index.js:18)
- Env vars: API_KEY, API_KEY_21ST, MCP_URL_21ST, TWENTY_FIRST_API_KEY
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 0 declared

### mcp-server-kubernetes@4.1.9

- REA Evidence: ev_898234f7c245e07abb69237559f0503af5568e3ae407dc817a33bc7e2c581db2 (subject sha256 b12cbf9249dffffefc3a7c5d0e2f2a51d2a48ecd478b039ba0932475e0f8f337)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (CODE_EXECUTION_EFFECTS_REQUIRE_HUMAN_SCOPE)
- process_spawn: 2 spawn/exec call sites
- filesystem_write: 21 write/delete call sites
- network_egress: imports network client SDK: @kubernetes/client-node; declared dependency: @kubernetes/client-node
- secret_env_access: reads 2 credential-like env vars
- Env vars: ALLOWED_TOOLS, ALLOW_KUBECTL_UNSAFE_FLAGS, ALLOW_ONLY_NON_DESTRUCTIVE_TOOLS, ALLOW_ONLY_READONLY_TOOLS, DNS_REBINDING_ALLOWED_HOST, DNS_REBINDING_PROTECTION, ENABLE_TELEMETRY, ENABLE_UNSAFE_SSE_TRANSPORT, ENABLE_UNSAFE_STREAMABLE_HTTP_TRANSPORT, HOST, K8S_CA_DATA, K8S_CONTEXT, K8S_NAMESPACE, K8S_SERVER, K8S_SKIP_TLS_VERIFY, K8S_TOKEN, KUBECONFIG, KUBECONFIG_JSON, KUBECONFIG_PATH, KUBECONFIG_YAML, MASK_SECRETS, MCP_AUTH_TOKEN, OTEL_CAPTURE_RESPONSE_METADATA, OTEL_EXPORTER_OTLP_ENDPOINT, OTEL_RESOURCE_ATTRIBUTES, OTEL_SERVICE_NAME, OTEL_SERVICE_VERSION, OTEL_TRACES_SAMPLER, OTEL_TRACES_SAMPLER_ARG, PORT, SPAWN_MAX_BUFFER
- process_spawn: `execFileSync(<dynamic>)` at dist/security/kubectl-flags.js:397
- process_spawn: `spawn(kubectl)` at dist/tools/port_forward.js:12
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 12 declared

### @neondatabase/mcp-server-neon@0.6.5

- REA Evidence: ev_d6c3ecc12d33067b086ff31e9a48a1297e93522708681a1f185f494fa5742faa (subject sha256 a8deaceac2ae08f39e352dc56e6200f4f80dbdaf07dfa5e167202f1a0813296f)
- Tier T2 local-mutating; max authorization L2 conditional; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- filesystem_write: 2 write/delete call sites
- network_egress: 1 request sites; 6 literal hosts; imports network client SDK: @neondatabase/serverless, @sentry/node, @neondatabase/api-client; declared dependency: axios, node-fetch; declared dependency: @neondatabase/api-client, @neondatabase/serverless, @sentry/node
- secret_env_access: reads 4 credential-like env vars
- Hosts: b3564134667aa2dfeaa3992a12d9c12f (dist/constants.js:16), console.neon.tech (dist/constants.js:12), neon.tech (dist/initConfig.js:51), oauth2.neon.tech (dist/constants.js:10), raw.githubusercontent.com (dist/resources.js:3), track.neon.tech (dist/analytics/analytics.js:8)
- Env vars: ANALYTICS_WRITE_KEY, APPDATA, CLIENT_ID, CLIENT_SECRET, COOKIE_SECRET, NEON_API_HOST, NODE_ENV, OAUTH_DATABASE_URL, SENTRY_DSN, SERVER_HOST, UPSTREAM_OAUTH_HOST
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 28 declared

### @pinecone-database/mcp@0.3.0

- REA Evidence: ev_05336e39e4b69132765944034c651b8c0d47db1e74fbe245db300ebd3dc5ecf8 (subject sha256 d829d85c97267ed691110f0a97deaa85e946b0845faa5e80355b3c24c99ccd15)
- Tier T2 local-mutating; max authorization L2 conditional; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 0 request sites; 3 literal hosts; imports network client SDK: @pinecone-database/pinecone; declared dependency: @pinecone-database/pinecone
- remote_mcp_proxy: uses MCP client SDK (forwards to another server); uses MCP client SDK
- secret_env_access: reads 1 credential-like env vars
- Hosts: app.pinecone.io (dist/tools/common/format-error.js:11), docs.pinecone.io (dist/tools/docs/search-docs.js:51), prod-1-data.ke.pinecone.io (dist/constants.js:1)
- Env vars: PINECONE_API_KEY
- Declared tools (1): search-docs
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 3 declared

### @mongodb-js/mongodb-mcp-server@0.0.3

- REA Evidence: ev_3bd7babf2ce4adb68054fb3ae757d7bd01c82757fb19980df8aea7df79817e06 (subject sha256 972c42b59627d1e895cc472a4dd167dd79111284cc744361c6d811ca718b22e3)
- Tier T2 local-mutating; max authorization L2 conditional; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- filesystem_write: 3 write/delete call sites
- network_egress: 2 request sites; 2 literal hosts; imports network client SDK: mongodb; declared dependency: mongodb
- Hosts: cloud.mongodb.com (dist/common/atlas/apiClient.js:38), docs.mongodb.com (dist/tools/mongodb/mongodbTool.js:44)
- Env vars: APPDATA, HOSTNAME, LOCALAPPDATA
- Unknowns: REA_PARSE_FAILURES: 1; TRANSITIVE_DEPENDENCIES_UNSCANNED: 12 declared

### @cyanheads/git-mcp-server@2.15.3

- REA Evidence: ev_a222995781b99c45ff0b875fe5cef3a3941a67c7ce35a4a687a40c14bb2131a7 (subject sha256 cf2f3a40b52f1f870b1ca6dce4759b2553e7638e0ab62488341e6be5828e47d1)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: 2 spawn/exec call sites; declared dependency: cross-spawn
- filesystem_write: 7 write/delete call sites
- network_egress: 19 request sites; 10 literal hosts
- dynamic_code: 1 eval/Function/vm sites
- secret_env_access: reads 2 credential-like env vars
- Hosts: . (dist/index.js:90800), 169.254.169.254 (dist/index.js:56483), caseyjhand.com (dist/index.js:15426), developer.mozilla.org (dist/index.js:127373), grpc.io (dist/index.js:67692), metadata.google.internal. (dist/index.js:56484), opentelemetry.io (dist/index.js:100094), raw.githubusercontent.com (dist/index.js:134448), sqs. (dist/index.js:23931), www.buymeacoffee.com (dist/index.js:15435)
- Env vars: AWS_EXECUTION_ENV, AWS_LAMBDA_FUNCTION_MEMORY_SIZE, AWS_LAMBDA_FUNCTION_NAME, AWS_LAMBDA_FUNCTION_VERSION, AWS_LAMBDA_INITIALIZATION_TYPE, AWS_LAMBDA_LOG_GROUP_NAME, AWS_LAMBDA_LOG_STREAM_NAME, AWS_REGION, CLOUD_RUN_JOB, DEBUG, DEBUG_AUTH, DETECT_GCP_RETRIES, DOTENV_CONFIG_DEBUG, DOTENV_CONFIG_QUIET, DOTENV_KEY, ECS_CONTAINER_METADATA_URI, ECS_CONTAINER_METADATA_URI_V4, FORCE_COLOR, FUNCTION_NAME, GCE_METADATA_HOST, GCE_METADATA_IP, GRPC_DEFAULT_SSL_ROOTS_FILE_PATH, GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION, GRPC_NODE_TRACE, GRPC_NODE_USE_ALTERNATIVE_RESOLVER, GRPC_NODE_VERBOSITY, GRPC_SSL_CIPHER_SUITES, GRPC_TRACE, GRPC_VERBOSITY, HTTPS_PROXY, HTTP_PROXY, IS_SERVERLESS, K_SERVICE, LAMBDA_TASK_ROOT, MCP_DEBUG_TOOL_INPUTS, MCP_DEBUG_VERBOSE, MCP_TRANSPORT_TYPE, METADATA_SERVER_DETECTION, NO_COLOR, NO_PROXY, OSTYPE, OTEL_EXPORTER_OTLP_ENDPOINT, OTEL_EXPORTER_OTLP_HEADERS, OTEL_EXPORTER_OTLP_INSECURE, OTEL_EXPORTER_PROMETHEUS_HOST, OTEL_EXPORTER_PROMETHEUS_PORT, OTEL_NODE_DISABLED_INSTRUMENTATIONS, OTEL_NODE_ENABLED_INSTRUMENTATIONS, OTEL_NODE_RESOURCE_DETECTORS, PATH, PATHEXT, TURBOPACK, VBOX_INSTALL_PATH, VBOX_MSI_INSTALL_PATH, WINDIR, _HANDLER, comspec, grpc_proxy, http_proxy, https_proxy, no_grpc_proxy, no_proxy
- process_spawn: `cp.spawn(<dynamic>)` at dist/index.js:131443
- process_spawn: `cp.spawnSync(<dynamic>)` at dist/index.js:131449
- dynamic_code: `Function(…)` at dist/index.js:134305
- Unknowns: MINIFIED_SOURCE: 1 files (effect recovery degraded); REA_COVERAGE_TRUNCATED; TRANSITIVE_DEPENDENCIES_UNSCANNED: 3 declared

### @cloudflare/mcp-server-cloudflare@0.2.0

- REA Evidence: ev_321f63c4092ad96ede1c35a204bb6e35d9664063e406311753d92e144bb52cfb (subject sha256 45268b790256e1908c197f5eee02e6dcc09362fca2eda68e8c3d5b3d3aa83c14)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (CODE_EXECUTION_EFFECTS_REQUIRE_HUMAN_SCOPE)
- process_spawn: imports a process-spawning module (no resolved call site)
- filesystem_write: 3 write/delete call sites
- network_egress: 2 request sites; 3 literal hosts; declared dependency: undici
- secret_env_access: reads 1 credential-like env vars
- Hosts: api.cloudflare.com (dist/index.js:274), claude.ai (dist/index.js:398), dash.cloudflare.com (dist/index.js:138)
- Env vars: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN, NODE_ENV
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 8 declared

### @openbnb/mcp-server-airbnb@0.3.0

- REA Evidence: ev_cad43770683b3fda4e92569cd31a959f8dca77d23dc186fcf55ddf2e8e8bfc5a (subject sha256 20844a33769f08685684bf1437e5196ba639a87cbea19ff8caf72d4d55cd8c83)
- Tier T2 local-mutating; max authorization L2 conditional; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- filesystem_write: 1 write/delete call sites
- network_egress: 4 request sites; 3 literal hosts; declared dependency: node-fetch
- Hosts: nominatim.openstreetmap.org (dist/index.js:213), photon.komoot.io (dist/index.js:166), www.airbnb.com (dist/index.js:137)
- Env vars: DISABLE_GEOCODING, IGNORE_ROBOTS_TXT, MCP_SERVER_VERSION
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 4 declared

### @elastic/mcp-server-elasticsearch@0.3.1

- REA Evidence: ev_87297dabf112c52c52bf6c2edff7472c5acd7eefc21546b4517cfd312c481bd1 (subject sha256 4b56a2e89fe5a373517b95960b020f69ded9f2ea00075496943a7a6c51584bcc)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: imports network client SDK: @elastic/elasticsearch; declared dependency: @elastic/elasticsearch
- secret_env_access: reads 2 credential-like env vars
- Env vars: ES_API_KEY, ES_CA_CERT, ES_PASSWORD, ES_PATH_PREFIX, ES_SSL_SKIP_VERIFY, ES_URL, ES_USERNAME, ES_VERSION, RUNNING_IN_CONTAINER
- Declared tools (4): get_mappings, get_shards, list_indices, search
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 4 declared

### @browserbasehq/mcp@3.0.0

- REA Evidence: ev_9bfb7d190d86329d6602b0e95613dbfe67017f56b3c4d8f6fcd28f2cb0d17bc5 (subject sha256 23200c2e8e97244a98ec9fe3760a39d623e8e9d4ee338d43cfd4afc3c55fb7f4)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: 0 request sites; 1 literal hosts; declared dependency: @browserbasehq/sdk
- secret_env_access: reads 3 credential-like env vars
- Hosts: www.browserbase.com (dist/sessionManager.js:141)
- Env vars: BROWSERBASE_API_KEY, BROWSERBASE_PROJECT_ID, GEMINI_API_KEY, GOOGLE_API_KEY
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 6 declared

### mcp-linear@0.1.8

- REA Evidence: ev_562c7297610b05e1ed25c3d71b493d324cdbfa7f268c2b6fa8d99ff7dabe6c1b (subject sha256 73943f89032f30c0185e876b74e9789ae25acd95d988e541a3acd4e6f1d38bb8)
- Tier T1 network-bound; max authorization L3 supervised; credential PROVISIONAL (STATIC_SCAN_COMPLETE_AWAITING_MONITORING)
- network_egress: imports network client SDK: @linear/sdk; declared dependency: @linear/sdk
- secret_env_access: reads 1 credential-like env vars
- Env vars: LINEAR_API_KEY
- Unknowns: TRANSITIVE_DEPENDENCIES_UNSCANNED: 4 declared

### mcp-shrimp-task-manager@1.0.21

- REA Evidence: ev_6d5ed2dfffd4e83c2ee2d1cdfff59083b88407016ceae8a16cb9b55336cf67fa (subject sha256 d5de85d8ce61495e5748788521f4e55fde8cbe6652fdc2576fd42a5c6bbbb849)
- Tier T3 code-executing; max authorization L1 advisory; credential RESTRICTED (UNRESOLVED_UNKNOWNS)
- process_spawn: imports a process-spawning module (no resolved call site)
- filesystem_write: 15 write/delete call sites
- network_egress: 6 request sites; 0 literal hosts
- Env vars: DATA_DIR, ENABLE_GUI, ENABLE_THOUGHT_CHAIN, TEMPLATES_USE, WEB_PORT
- Unknowns: REA_PARSE_FAILURES: 1; TRANSITIVE_DEPENDENCIES_UNSCANNED: 7 declared

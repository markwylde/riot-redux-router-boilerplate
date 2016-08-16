SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "riot-redux-router-boilerplate/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "riot-redux-router-boilerplate": {
      "main": "riot-redux-router-boilerplate.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.css": { 
          "loader": "css" 
        },
        "*.html": { 
          "loader": "tag" 
        },
        "*.tag": { 
          "loader": "tag" 
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "cluster": "github:jspm/nodelibs-cluster@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.26",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "fsevents": "npm:fsevents@1.0.14",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "redux": "npm:redux@3.5.2",
    "riot": "npm:riot@3.0.0-alpha.5",
    "riot-router-tag": "npm:riot-router-tag@1.0.2",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tag": "npm:jspm-riot@2.0.0",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "tweetnacl": "npm:tweetnacl@0.13.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "npm:jspm-riot@2.0.0": {
      "map": {
        "riot-compiler": "npm:riot-compiler@3.0.0-alpha.1"
      }
    },
    "npm:riot@3.0.0-alpha.5": {
      "map": {
        "riot-compiler": "npm:riot-compiler@3.0.0-alpha.1",
        "riot-tmpl": "npm:riot-tmpl@2.4.0",
        "simple-dom": "npm:simple-dom@0.3.0",
        "simple-html-tokenizer": "npm:simple-html-tokenizer@0.2.5",
        "riot-cli": "npm:riot-cli@2.6.1",
        "riot-observable": "npm:riot-observable@3.0.0-alpha.2"
      }
    },
    "npm:riot-cli@2.6.1": {
      "map": {
        "riot-compiler": "npm:riot-compiler@2.5.3",
        "optionator": "npm:optionator@0.8.1",
        "chalk": "npm:chalk@1.1.3",
        "chokidar": "npm:chokidar@1.6.0",
        "co": "npm:co@4.6.0",
        "rollup": "npm:rollup@0.32.4",
        "shelljs": "npm:shelljs@0.7.3"
      }
    },
    "npm:optionator@0.8.1": {
      "map": {
        "fast-levenshtein": "npm:fast-levenshtein@1.1.4",
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2",
        "wordwrap": "npm:wordwrap@1.0.0",
        "levn": "npm:levn@0.3.0",
        "deep-is": "npm:deep-is@0.1.3"
      }
    },
    "npm:rollup@0.32.4": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.2"
      }
    },
    "npm:chokidar@1.6.0": {
      "map": {
        "anymatch": "npm:anymatch@1.3.0",
        "async-each": "npm:async-each@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "glob-parent": "npm:glob-parent@2.0.0",
        "readdirp": "npm:readdirp@2.1.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:shelljs@0.7.3": {
      "map": {
        "interpret": "npm:interpret@1.0.1",
        "rechoir": "npm:rechoir@0.6.2",
        "glob": "npm:glob@7.0.5"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:glob@7.0.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "minimatch": "npm:minimatch@3.0.3",
        "inflight": "npm:inflight@1.0.5",
        "once": "npm:once@1.3.3",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:fsevents@1.0.14": {
      "map": {
        "nan": "npm:nan@2.4.0",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.29"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "minimatch": "npm:minimatch@3.0.3",
        "readable-stream": "npm:readable-stream@2.1.4",
        "graceful-fs": "npm:graceful-fs@4.1.5",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.5.0"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "arrify": "npm:arrify@1.0.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:source-map-support@0.4.2": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:node-pre-gyp@0.6.29": {
      "map": {
        "npmlog": "npm:npmlog@3.1.2",
        "rimraf": "npm:rimraf@2.5.4",
        "request": "npm:request@2.74.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@3.0.6",
        "tar-pack": "npm:tar-pack@3.1.4",
        "rc": "npm:rc@1.1.6",
        "tar": "npm:tar@2.2.1",
        "semver": "npm:semver@5.2.0"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.0.5"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:tar-pack@3.1.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "readable-stream": "npm:readable-stream@2.1.4",
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "debug": "npm:debug@2.2.0",
        "fstream": "npm:fstream@1.0.10",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "uid-number": "npm:uid-number@0.0.6"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "arr-diff": "npm:arr-diff@2.0.0",
        "filename-regex": "npm:filename-regex@2.0.0",
        "extglob": "npm:extglob@0.3.2",
        "braces": "npm:braces@1.8.5",
        "kind-of": "npm:kind-of@3.0.4",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "array-unique": "npm:array-unique@0.2.1",
        "normalize-path": "npm:normalize-path@2.0.1",
        "object.omit": "npm:object.omit@2.0.0",
        "regex-cache": "npm:regex-cache@0.4.3",
        "parse-glob": "npm:parse-glob@3.0.4"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "fstream": "npm:fstream@1.0.10",
        "block-stream": "npm:block-stream@0.0.9"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:npmlog@3.1.2": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@2.6.0"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:request@2.74.0": {
      "map": {
        "bl": "npm:bl@1.1.2",
        "aws4": "npm:aws4@1.4.1",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "har-validator": "npm:har-validator@2.0.6",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "caseless": "npm:caseless@0.11.0",
        "qs": "npm:qs@6.2.1",
        "isstream": "npm:isstream@0.1.2",
        "extend": "npm:extend@3.0.0",
        "stringstream": "npm:stringstream@0.0.5",
        "http-signature": "npm:http-signature@1.1.1",
        "combined-stream": "npm:combined-stream@1.0.5",
        "hawk": "npm:hawk@3.1.3",
        "tough-cookie": "npm:tough-cookie@2.3.1",
        "forever-agent": "npm:forever-agent@0.6.1",
        "mime-types": "npm:mime-types@2.1.11",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "form-data": "npm:form-data@1.0.0-rc4",
        "node-uuid": "npm:node-uuid@1.4.7"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "graceful-fs": "npm:graceful-fs@4.1.5",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.1",
        "minimist": "npm:minimist@1.2.0",
        "ini": "npm:ini@1.3.4",
        "strip-json-comments": "npm:strip-json-comments@1.0.4"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:gauge@2.6.0": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "has-unicode": "npm:has-unicode@2.0.1",
        "wide-align": "npm:wide-align@1.1.0",
        "string-width": "npm:string-width@1.0.2",
        "has-color": "npm:has-color@0.1.7",
        "aproba": "npm:aproba@1.0.4",
        "signal-exit": "npm:signal-exit@3.0.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:kind-of@3.0.4": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "fstream": "npm:fstream@1.0.10",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:bl@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "is-dotfile": "npm:is-dotfile@1.0.2",
        "glob-base": "npm:glob-base@0.3.0"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "preserve": "npm:preserve@0.2.0",
        "expand-range": "npm:expand-range@1.8.2",
        "repeat-element": "npm:repeat-element@1.1.2"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.3.0",
        "assert-plus": "npm:assert-plus@0.2.0",
        "sshpk": "npm:sshpk@1.9.2"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:mime-types@2.1.11": {
      "map": {
        "mime-db": "npm:mime-db@1.23.0"
      }
    },
    "npm:form-data@1.0.0-rc4": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.11",
        "async": "npm:async@1.5.2"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:object.omit@2.0.0": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1",
        "for-own": "npm:for-own@0.1.4"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:sshpk@1.9.2": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.0",
        "getpass": "npm:getpass@0.1.6"
      }
    },
    "npm:jsprim@1.3.0": {
      "map": {
        "json-schema": "npm:json-schema@0.2.2",
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:dashdash@1.14.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.5"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "repeat-string": "npm:repeat-string@1.5.4",
        "isobject": "npm:isobject@2.1.0",
        "is-number": "npm:is-number@2.1.0",
        "randomatic": "npm:randomatic@1.1.5"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:code-point-at@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:is-my-json-valid@2.13.1": {
      "map": {
        "generate-function": "npm:generate-function@2.0.0",
        "jsonpointer": "npm:jsonpointer@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.0.4"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:randomatic@1.1.5": {
      "map": {
        "is-number": "npm:is-number@2.1.0",
        "kind-of": "npm:kind-of@3.0.4"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "pako": "npm:pako@0.2.9"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:buffer@4.9.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "brorand": "npm:brorand@1.0.5",
        "bn.js": "npm:bn.js@4.11.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "brorand": "npm:brorand@1.0.5",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:redux@3.5.2": {
      "map": {
        "symbol-observable": "npm:symbol-observable@0.2.4",
        "loose-envify": "npm:loose-envify@1.2.0",
        "lodash": "npm:lodash@4.15.0",
        "lodash-es": "npm:lodash-es@4.15.0"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    }
  }
});

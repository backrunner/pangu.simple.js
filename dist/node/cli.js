#!/usr/bin/env node
"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var pangu = require('.');

var usage = "\nusage: pangu [-h] [-v] [-t] [-f] text_or_path\n\npangu.js -- Paranoid text spacing for good readability, to automatically\ninsert whitespace between CJK and half-width characters (alphabetical letters,\nnumerical digits and symbols).\n\npositional arguments:\n  text_or_path   the text or file path to apply spacing\n\noptional arguments:\n  -h, --help     show this help message and exit\n  -v, --version  show program's version number and exit\n  -t, --text     specify the input value is a text\n  -f, --file     specify the input value is a file path\n".trim();

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

function printSpacingText(text) {
  if (typeof text === 'string') {
    console.log(pangu.spacing(text));
  } else {
    console.log(usage);
    process.exit(1);
  }
}

function printSpacingFile(path) {
  if (typeof path === 'string') {
    console.log(pangu.spacingFileSync(path));
  } else {
    console.log(usage);
    process.exit(1);
  }
}

if (args.length === 0) {
  console.log(usage);
} else {
  switch (args[0]) {
    case '-h':
    case '--help':
      console.log(usage);
      break;

    case '-v':
    case '--version':
      console.log(pangu.version);
      break;

    case '-t':
      printSpacingText(args[1]);
      break;

    case '-f':
      printSpacingFile(args[1]);
      break;

    default:
      printSpacingText(args[0]);
  }
}

process.exit(0);
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

require("./attributes/files-attribute");

function configure(aurelia) {
    aurelia.globalResources("./attributes/files-attribute");
}
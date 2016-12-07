define(["exports", "./attributes/files-attribute"], function (exports, _attributesFilesAttribute) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.globalResources("./attributes/files-attribute");
    }
});
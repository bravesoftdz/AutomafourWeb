var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var CrudCad_PessoaService = (function (_super) {
            __extends(CrudCad_PessoaService, _super);

            function CrudCad_PessoaService($q, api, $rootScope) {
                _super.apply(this, arguments);
            }

            Object.defineProperty(CrudCad_PessoaService.prototype, "baseEntity", {
                /// @override
                get: function () {
                    return 'CAD_Pessoa';
                },
                enumerable: true,
                configurable: true
            });

            return CrudCad_PessoaService;
        })(Services.CrudBaseService);
        Services.CrudCad_PessoaService = CrudCad_PessoaService;
        App.modules.Services
            .service('CrudCad_PessoaService', CrudCad_PessoaService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=services.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const parse = __importStar(require("../modules/api/parser"));
class Service {
    constructor(req, res, v) {
        this.routes = function () {
            if (this.request.body.data) {
                let data = new parse.Parser();
                // @ts-ignore
                data = data.validate(this.request.body.data, this.version);
                this.response.status(200).end(JSON.stringify({ statusCode: 200, data }));
            }
            else {
                this.response.status(422).end(JSON.stringify({ statusCode: 422, Message: "Missing parameters" }));
            }
        };
        this.request = req;
        this.response = res;
        this.version = v;
    }
}
exports.Service = Service;
// module.exports = service;
//# sourceMappingURL=services.js.map
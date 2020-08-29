"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
class Parser {
    constructor() {
        this.validate = (val, version) => {
            /* tslint:disable-next-line */
            const valArr = val.split(/0/);
            /* tslint:disable-next-line */
            function firstversion(val) {
                const final = val.filter((e) => { return e; });
                const data = { firstName: "",
                    lastName: "",
                    clientId: "" };
                data.firstName = final[0] + '0000';
                data.lastName = final[1] + '000';
                data.clientId = final[2];
                return data;
            }
            /* tslint:disable-next-line */
            function secondversion(val) {
                const final = val.filter((e) => { return e; });
                const data = { firstName: "",
                    lastName: "",
                    clientId: "" };
                const index = 3;
                const value = "-";
                data.firstName = final[0];
                data.lastName = final[1];
                data.clientId = final[2].substr(0, index) + value + final[2].substr(index);
                ;
                return data;
            }
            return version === 'v1' ? firstversion(valArr) : secondversion(valArr);
        };
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map
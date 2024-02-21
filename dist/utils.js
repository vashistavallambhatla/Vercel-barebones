"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const MAX_LENGTH = 5;
function generate() {
    const str = "1234567890qwertyuiopasdfghjklzxcvbnm";
    let ans = "";
    for (let i = 0; i < MAX_LENGTH; i++) {
        ans += str[Math.floor(Math.random() * str.length)];
    }
    return ans;
}
exports.generate = generate;

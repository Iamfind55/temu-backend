"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultStaff = createDefaultStaff;
const typeorm_1 = require("typeorm");
const staff_1 = require("../modules/staff");
const helper_1 = require("./helper");
const baseType_1 = require("./base/baseType");
function createDefaultStaff() {
    return __awaiter(this, void 0, void 0, function* () {
        const staffRepository = (0, typeorm_1.getRepository)(staff_1.Staff);
        const existingStaff = yield staffRepository.findOne({
            where: { username: "admin", is_active: true },
        });
        if (!existingStaff) {
            const defaultPassword = yield (0, helper_1.hashPassword)("12345678");
            const twentyYearsAgo = new Date();
            twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
            const defaultStaff = staffRepository.create({
                username: "admin",
                email: "admin@gmail.com",
                password: defaultPassword,
                firstName: "admin",
                is_active: true,
                role: "SUPER_ADMIN",
                status: baseType_1.BaseStatus.ACTIVE,
                dob: twentyYearsAgo,
            });
            yield staffRepository.save(defaultStaff);
        }
    });
}

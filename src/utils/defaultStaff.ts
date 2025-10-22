import { getRepository } from "typeorm";
import { Staff } from "../modules/staff";
import { hashPassword } from "./helper";
import { BaseStatus } from "./base/baseType";

export async function createDefaultStaff() {
  const staffRepository = getRepository(Staff);

  const existingStaff = await staffRepository.findOne({
    where: { username: "admin", is_active: true },
  });

  if (!existingStaff) {
    const defaultPassword = await hashPassword("12345678");
    const twentyYearsAgo = new Date();
    twentyYearsAgo.setFullYear(twentyYearsAgo.getFullYear() - 20);
    const defaultStaff = staffRepository.create({
      username: "admin",
      email: "admin@gmail.com",
      password: defaultPassword,
      firstName: "admin",
      is_active:true,
      role: "SUPER_ADMIN",
      status: BaseStatus.ACTIVE,
      dob: twentyYearsAgo,
    });

    await staffRepository.save(defaultStaff);
  }
}

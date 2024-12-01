import { user, admin, name, age, role } from "./scriptHW4";

describe("tests hw 4", () => {
  it("object user with property name: John created", () => {
    expect(typeof user).toEqual("object");
    expect(user).toHaveProperty("name");
    expect(user.name).toBe("John");
  });
  it("object admin assign user", () => {
    expect(typeof admin).toEqual("object");
    expect(admin).toHaveProperty("name");
    expect(admin).toHaveProperty("role");
    expect(admin.role).toBe("admin");
    expect(admin.name).toEqual(user.name);
    expect(user).not.toHaveProperty("role");
  });
  it("destruct admin to name", () => {
    expect(name).toBe("John");
  });
  it("destruct admin to age", () => {
    expect(age).toBe(56);
  });
  it("destruct admin to role", () => {
    expect(role).toBe("admin");
  });
});

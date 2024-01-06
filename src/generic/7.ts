export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleName = Record<UserRole, string>;

const RoleDescription: UserRoleName = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

export { RoleDescription };

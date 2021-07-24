export interface UserInterface {
  fullname: string;
  phoneNumber: string;
  username: string;
  email: string;
  age: number;
  gender: string;
  status: string;
  role: {
    _id?: string;
    roleName?: string;
    roleCode?: string;
    permission?: {
      _id?: string;
      groupCode?: string;
      groupName?: string;
      permissionCode?: string;
      permissionName?: string;
    }[];
  };
  authorize: string[];
}

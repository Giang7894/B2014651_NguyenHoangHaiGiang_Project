import employeeService from "@/services/employee.service";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isloggined: 0,
  }),

  actions: {
    async signIn(account, password) {
      const body = JSON.stringify({ account, password });
      const res = await employeeService.login(body);
      this.user = res;
      this.isloggined = 1;
    },
    Logout() {
      this.isloggined = 0;
      this.user = null;
    }
  },
});
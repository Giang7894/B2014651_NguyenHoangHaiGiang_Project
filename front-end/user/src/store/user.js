import readerService from "@/services/reader.service";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isloggined: 0,
  }),

  actions: {
    async signIn(email, password) {
      const body = JSON.stringify({ email, password });
      const res = await readerService.login(body);
      this.user = res;
      this.isloggined = 1;
    },
    async signUp(name,address,sex,birth,phone,email, password) {
      const body = JSON.stringify({ name, address, sex, birth, phone, email, password });
      const res = await readerService.register(body);
      const user = await res.json();
      this.user = user;
    },
    Logout() {
      this.isloggined = 0;
      this.user = null;
    }
  },
});
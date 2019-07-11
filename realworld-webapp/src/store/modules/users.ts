import { Profile, UserSubmit } from "./../modules.d";
import {
  VuexModule,
  Module,
  getModule,
  MutationAction,
  Mutation,
  Action
} from "vuex-module-decorators";
import store from "@/store";
import { User } from "../modules";
import { loginUser } from "../api";

@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  user: User | null = null;
  profile: Profile | null = null;

  /*muatation action automatically store the users 
        which are return from request and
        also store it in user Variable of User type 
        And async is singletone means it accessed by single by 
        each component and onther are awaited*/
  @Mutation
  setUser(user: User) {
    this.user = user;
  }

  @Action({ commit: "setUser" })
  async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    return user;
  }
}

export default getModule(UsersModule);

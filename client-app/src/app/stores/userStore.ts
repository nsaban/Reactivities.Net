import agent from "app/api/agent";
import { User, UserFormValues } from "app/models/user";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store";
import { router } from "app/router/routes";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get IsLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        const user = await agent.Account.login(creds);
        store.commonStore.setToken(user.token)
        runInAction(() => this.user = user);
        router.navigate('/activities');
        store.modalStore.closeModal();
    }

    register = async (creds: UserFormValues) => {
        const user = await agent.Account.register(creds);
        store.commonStore.setToken(user.token)
        runInAction(() => this.user = user);
        router.navigate('/activities');
        store.modalStore.closeModal();
    }

    logout = () => {
        store.commonStore.setToken(null);
        this.user = null;
        router.navigate('/');
    }

    getUser =async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }
    }
}
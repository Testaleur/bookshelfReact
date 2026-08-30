import ApiHelper from "../api/apihelper.js";

export default class UtilStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.apiHelper = new ApiHelper();
    }
}
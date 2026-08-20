'use strict';

import UiStore from './uistore.js';
import PrefStore from './prefstore.js';


export default class RootStore {
    constructor() {
        this.uiStore = new UiStore(this);
        this.prefStore = new PrefStore(this);
    }
}
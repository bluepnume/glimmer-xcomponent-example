import Component, { tracked } from "@glimmer/component";

export default class MyApp extends Component {

    @tracked loggedIn: boolean = false;
    @tracked email: string = '';

    constructor() {
        super();

        this.prefilledEmail = 'foo@bar.com';

        this.onLogin = (email) => {
            this.loggedIn = true;
            this.email = email;
        };
    }
}

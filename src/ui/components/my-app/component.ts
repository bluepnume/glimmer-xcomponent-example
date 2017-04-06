import Component, { tracked } from "@glimmer/component";

export default class MyApp extends Component {

    @tracked loggedIn = false;
    @tracked email = '';

    @tracked prefilledEmail = 'foo@bar.com';

    onLogin(email) {
        this.loggedIn = true;
        this.email = email;
    }
}

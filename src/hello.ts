export default class Hello {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    public sayHello(elem: HTMLElement | null) {
        if (elem) {
            elem.innerHTML = this.message
        }
    }

}
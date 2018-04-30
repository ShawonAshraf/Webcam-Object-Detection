export var responseObject = (welcomeMessage, pageTitle) => {
    return {
        welcomeMessage,
        pageTitle,
        currentYear: new Date().getFullYear(),
        currentServerTime: new Date()
    };
};

export class ResponseObject {
    constructor(welcomeMessage, pageTitle) {
        this.welcomeMessage = welcomeMessage;
        this.pageTitle = pageTitle;
        this.currentYear = new Date().getFullYear();
        this.currentServerTime = new Date();

        this.createResponseObject = () => {
            return {
                welcomeMessage: this.welcomeMessage,
                pageTitle: this.pageTitle,
                currentYear: this.currentYear,
                currentServerTime: this.currentServerTime
            };
        };
    }
}
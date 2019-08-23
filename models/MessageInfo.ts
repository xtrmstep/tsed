export class MessageInfo {
    DateOfWeek: string;
    Version: string;
    CurrentDateTime: string;
    Ticks: number;

    constructor() {
        let date = new Date();
        var weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"];
        this.DateOfWeek = weekday[date.getDay()];
        this.Version = "1";
        this.CurrentDateTime = date.toDateString();
        this.Ticks = 1;
    }
}
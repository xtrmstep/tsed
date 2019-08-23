import { Controller, Inject, Get } from "@tsed/common";
import { MessageInfo } from "../models/MessageInfo";
import { Config } from '../types/Config';

@Controller("/api/info")
export class InfoController {

    private _config: Config;

    constructor(@Inject() config: Config) {
        this._config = config;
    }

    @Get("/info")
    public async GetInfo(): Promise<MessageInfo> {
        let message = new MessageInfo();
        message.Version = this._config.Version;
        return message;
    }
}
import {Hello} from "./hello/Hello.js";
import {appConfig} from "./instances/app-config/appConfig.js";
const hello = new Hello(appConfig.helloMessage);
console.log(hello.getMessage());

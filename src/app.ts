import "./polyfills";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
const styles = require("./app.css");

platformBrowserDynamic().bootstrapModule(AppModule);
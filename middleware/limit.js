import {rateLimit} from "express-rate-limit";

export let configGET= ()=>{
    return rateLimit({
    windowsMs: 30 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeader: false,
    message:{status: 416, message:"Ya se acabo tu tiempo"}
    });
}
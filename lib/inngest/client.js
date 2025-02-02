import {Inngest} from "inngest"

export const inngest=new Inngest({ id:"vidyacoach", name:"Vidya Coach",
credentials:{
    gemini:{
    apiKey: process.env.GEMINI_API_KEY,
    },
}
})
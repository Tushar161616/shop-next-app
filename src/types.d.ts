import mongoose from "mongoose"

declare global{
   var mongoose : {
    con : typeof mongoose | null
    promise: Promise<mongoose> | null
    }
}

export {}
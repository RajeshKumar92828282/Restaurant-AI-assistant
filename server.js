const express = require("express");
import dotenv from "dotenv";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {AgentExecutor, createToolCallingAgent} from "langchain/agents";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { GoogleCalendarCreateTool } from "@langchain/community/tools/google_calendar";








dotenv.config();



const app=express();
app.use=(express.json());

app.get('/',(req,res)=>{
    return res.send("hello world");
})



//chat models

const model= new ChatGoogleGenerativeAI({
    model:
})


const port=3000;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
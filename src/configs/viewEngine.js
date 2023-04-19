import express from "express";

const configViewEngine = (app) => {
    app.set("View engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;
// место старта нашего приложения

import express from "express";

export const app = express();

export const PORT = 3004;

app.listen(PORT, () => {
    console.log(`Данный порт: ${PORT} успешно запущен!`)
});

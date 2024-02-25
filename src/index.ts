// место старта нашего приложения
import {SETTINGS} from "./settings";
import {app} from "./app";

app.listen(SETTINGS.PORT, () => {
    console.log(`Данный порт: ${SETTINGS.PORT} успешно запущен!`)
});



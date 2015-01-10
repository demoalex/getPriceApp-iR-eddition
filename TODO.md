
# Ближайшие шаги

## Step 1  _2h_
* сообрать все компоненты angular в дирректории _10m_
* /login для админа -- перебрасывает в другой апп -- пользовательский _15m_
* в пользовательском приложении получаем ссылки на актуальные для пользователя прайсы _1h10m_
* git init _20m_

## Step 2
* сделать базовый REST API
* замутить привязку к БД

## Step 3
* запустить в продакшн на домене get-price.reanimator.ru
* привязать к рассылке Mailchimp

## Step 50
* доделать views
* * переделать элементы на ui.bootstrap
* * $modal заложить в $state? 
* * Решить, будет ли санкционировано удаление\редактирование пользователей
* * pagination для пользователей и прайсов
* * фильтрация для пользователей

* собираем статистику:
- кто и сколько скачал
- с каких устройств

## Step 51
* написать тесты
* привязать к Travis.yml


## Authentication
### Passport
http://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
http://habrahabr.ru/post/201206/

protect specific request
http://stackoverflow.com/questions/21335868/how-to-protect-static-folder-in-express-with-passport

## File upload
https://www.npmjs.com/package/angular-file-upload
http://stackoverflow.com/questions/23114374/file-uploading-with-express-4-0-req-files-undefined

## File download
Use encodeURI() for file name


# Bugs

----
/admin передывает на #/admin/pricelists циклично несколько раз 
и только после этого на страницу / -> #/login
----

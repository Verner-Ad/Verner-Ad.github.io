<?php

// теперь уже идет валидация посредством PHP
// $_POST - один из суперглобальных массивов, инициализирован всегда
if (empty($_POST['name'])) {
    // создаем HTTP header
    header("HTTP/1.1 400 Name is not set");
    // exit() завершает выполнение скрипта
    exit();
}
// встроенная в php функция для валидации email
if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    header("HTTP/1.1 400 Mail is not set or is invalid");
    exit();
}
if (empty($_POST['year'])) {
    header("HTTP/1.1 400 Year is not set");
    exit();
}
if (empty($_POST['limbs'])) {
    header("HTTP/1.1 400 Limbs number is not set");
    exit();
}
// здесь применяем isset (проверка на NULL), т.к. empty выдаст true на '0', а у нас gender = {0, 1}
if (!isset($_POST['gender']) || ($_POST['gender'] != 0 && $_POST['gender'] != 1)) {
    header("HTTP/1.1 400 Gender is not set or is invalid");
    exit();
}

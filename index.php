<?php

/**
 * ! https://api.telegram.org/bot5281876368:AAGFfiXGDOWkZaL8CmknzLW3G4Q5suwghDg/getUpdates */


    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $token = "5281876368:AAGFfiXGDOWkZaL8CmknzLW3G4Q5suwghDg";
    $chat_id = "-675862698";
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $phone,
        'Почта: ' => $email
    );


    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
    &parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        // echo "Thank you";
        header('Location: index.html');
    } else{
        echo "Error";
    }

    $names = $_POST['names'];
    $tel = $_POST['tel'];
    // $token = "5281876368:AAGFfiXGDOWkZaL8CmknzLW3G4Q5suwghDg";
    // $chat_id = "-675862698";
    $array = array(
        'Имя: ' => $names,
        'Номер: ' => $tel
    );

    foreach($array as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
    &parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        // echo "Thank you";
        header('Location: index.html');
    } else{
        echo "Error";
    }

?>

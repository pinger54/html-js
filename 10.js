function task() {
    let name = prompt("Введите Ваше имя: ", "Иван");
    let surname = prompt("Введите Вашу фамилию: ", "Иванов");
    let patronymic = prompt("Введите Ваше отчество: ", "Иванович");

    name = name[0].toUpperCase();
    surname = surname.toUpperCase();
    patronymic = patronymic[0].toUpperCase();

    document.write(`Добрый день, ${surname} ${name}.${patronymic}. Мы рады приветствовать Вас на сайте ${document.title}<br/>`);
}
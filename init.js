document.getElementById('generation').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('firstNameOutput').innerText = 'Имя ,';
    document.getElementById('surnameOutput').innerText = 'Фамилия ,';
    document.getElementById('genderOutput').innerText = 'Пол ,';
    document.getElementById('birthYearOutput').innerText = 'Год рождения ,';
    document.getElementById('professionOutput').innerText = 'Профессия , ';
    document.getElementById('patronymicOutput').innerText = 'Отчество';
    document.getElementById('birthDayOutput').innerText = 'Число, ';
    document.getElementById('birthMonthOutput').innerText = 'Месяц, ';





})

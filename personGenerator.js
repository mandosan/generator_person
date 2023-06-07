const mon = Math.floor(Math.random() * 3);
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Анна",
            "id_3": "Полина",
            "id_4": "Елена",
            "id_5": "Наталья",
            "id_6": "Ольга",
            "id_7": "Светлана",
            "id_8": "Юлия",
            "id_9": "Людмила",
            "id_10": "Татьяна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Сантехник",
            "id_2": "Пожарный",
            "id_3": "Полицейский",
            "id_4": "Военный",
            "id_5": "Строитель",
            "id_6": "Инженер",
            "id_7": "Режисер",
            "id_8": "Летчик",
            "id_9": "Электрик",
            "id_10": "Программист"
        }    
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Няня",
            "id_3": "Учительница",
            "id_4": "Бухгалтер",
            "id_5": "Парикмахер",
            "id_6": "Косметолог",
            "id_7": "Визажист",
            "id_8": "Дизайнер",
            "id_9": "Актриса",
            "id_10": "SMM – менеджер"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Иванов",
            "id_2": "Петров",
            "id_3": "Сергеев",
            "id_4": "Павлов",
            "id_5": "Дмитриев",
            "id_6": "Андреев",
            "id_7": "Владимиров",
            "id_8": "Денисов",
            "id_9": "Алексеев",
            "id_10": "Михайлов"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function () {
    return Math.floor (Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() { 
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
     randomSurname: function() {
       if (this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.surnameJson);
       } else {
        return this.randomValue(this.surnameJson) + "a";
       }
    },
    randomBirthYear: function (min,max) {
        min = 1950;
        max = 2000; 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }, 

    randomProfession: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else { 
           return this.randomValue(this.professionFemaleJson); 
        } 
    },
    randomPatronymic: function() { 
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },
    randomMonth31: function randomMonth() { 
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { 
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { 
		let month = `февраля`
		return month;
	},


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); 
        }
        return this.person;
    
    }
};

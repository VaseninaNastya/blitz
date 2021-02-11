function School(name, minYears) {
  //добавила отрицание !name.trim().
  if (!name || !name.trim()) {
    //добавила new
    throw new Error("Не указано название школы");
  }
  //добавила отрицание !parseInt(minYears)
  if (!minYears || !parseInt(minYears)) {
    throw new Error("Не указано минимальное количество лет");
  }
  this.MIN_YEARS = minYears;
  this.SCHOOL_NAME = name;

  this.checkAge = function (age) {
    //заменила self на this
    //убрала знак "=", тк в условии говорится, что возраст может быть равен this.MIN_YEARS
    if (age < this.MIN_YEARS) {
      return {
        result: false,
        //заменила self на this
        message: `Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше`,
      };
      //заменила self на this
      //убрала if (age === this.MIN_YEARS)
    } else {
      return {
        result: true,
        //исправила кавычки
        //заменила self на this
        //убрала слеши
        //убрала ${name}, тк он передается ниже
        message: `Добро пожаловать в автошколу "${this.SCHOOL_NAME}"`,
      };
    }
  };

  this.getTeacherList = function () {
    //изменила на массив
    return ["А. С. Иванов", "В. С. Петров", "И. А. Сидоров"];
  };

  this.getTeacher = function (id) {
    //заменила self на this
    //заменила && на ||
    // убрала var
    id = id || Math.floor(Math.random() * this.getTeacherList().length);
    //заменила self на this
    return this.getTeacherList()[id];
  };

  this.welcome = function (name, years) {
    const SCHOOL_ADDRESS = "Санкт-Петербург, ул. Пушкина, дом 23";
    //заменила && на ||
    name = name || prompt("Как вас зовут?");
    if (!name) {
      //убрала self(name, years)
      return alert("Вы не указали имя!");
    }
    //опечатка в названии функции prompt
    //заменила && на ||
    //parseFloat заменила на parseInt, тк тут логично проверять количество полных лет.
    years = years || Math.abs(parseInt(prompt("Укажите ваш возраст")));
    //добавила отрицание years
    if (!years) {
      //убрала self(name, years)
      return alert("Вы не указали возраст!");
    }
    //заменила self на this
    if (this.checkAge(years).result) {
      //поменяла кавычки
      //заменила self на this
      alert(`${this.checkAge(years).message}, ${name}`);
      //заменила self на this
      //убрала if (!this.checkAge(years).result)
    } else {
      //заменила self на this
      return alert(this.checkAge(years).message);
    }
    //добавила this
    const TEACHER_NAME = this.getTeacher();
    //заменила кавычки
    alert(
      `Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`
    );
    return;
  };
  //убрала return. welcome является методом функции-конструктора, не надо его возвращать
  /*  return {
        welcome: this.welcome
        };*/
}

var autoSchool = new School("Парус", 18);

autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);

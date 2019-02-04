import './lesson.scss';

const container_ID = 'lesson';
const NUM = 10;

class Task {

    constructor(level, index = 0) {

        switch (level) {
            case 1:
                this.a = random(0, 9);
                this.b = random(0, 9);
                this.answer = this.a + this.b;
                this.query = `${this.a} + ${ Math.abs(this.b)} = `;
                break;
            case 2:
                this.a = random(1, 20);
                this.b = random(1, 20);
                this.answer = this.a + this.b;
                this.query = `${this.a} + ${ Math.abs(this.b)} = `;
                break;
            case 3:
                this.a = random(10, 99);
                this.b = random(10, 99);
                this.answer = this.a + this.b;
                this.query = `${this.a} + ${ Math.abs(this.b)} = `;
                break;
            case 4:
                this.a = random(100, 999);
                this.b = random(100, 999);
                this.answer = this.a + this.b;
                this.query = `${this.a} + ${ Math.abs(this.b)} = `;
                break;
            case 5:
                this.a = random(1, 9) * randomMinusPlusOne();
                this.b = random(1, 9) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a + this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 6:
                this.a = random(10, 99) * randomMinusPlusOne();
                this.b = random(10, 99) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a + this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 7:
                this.a = random(100, 999) * randomMinusPlusOne();
                this.b = random(100, 999) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a + this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 8:
                this.a = random(1, 9);
                this.b = random(1, 9);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 9:
                this.a = random(2, 9);
                this.b = random(2, 9);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 10:
                this.a = random(2, 20);
                this.b = random(2, 20);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 11:
                this.a = random(10, 20);
                this.b = random(10, 20);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 12:
                this.a = random(10, 99);
                this.b = random(10, 99);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 13:
                this.a = random(2, 999);
                this.b = random(2, 999);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 14:
                this.a = random(10, 999);
                this.b = random(10, 999);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 15:
                this.a = random(100, 999);
                this.b = random(100, 999);
                this.answer = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `&middot; ${this.b}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 16:
                this.a = random(2, 9) * randomMinusPlusOne();
                this.b = random(2, 9) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 17:
                this.a = random(2, 20) * randomMinusPlusOne();
                this.b = random(2, 20) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 18:
                this.a = random(2, 99) * randomMinusPlusOne();
                this.b = random(2, 99) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 19:
                this.a = random(10, 99) * randomMinusPlusOne();
                this.b = random(10, 99) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 20:
                this.a = random(2, 999) * randomMinusPlusOne();
                this.b = random(2, 999) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 21:
                this.a = random(10, 999) * randomMinusPlusOne();
                this.b = random(10, 999) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 22:
                this.a = random(100, 999) * randomMinusPlusOne();
                this.b = random(100, 999) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 23:
                this.a = random(1, 9);
                this.b = random(1, 9);
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `: ${Math.abs(this.b)}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 24:
                this.a = random(2, 9);
                this.b = random(2, 9);
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `: ${Math.abs(this.b)}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 25:
                this.a = random(10, 99);
                this.b = random(10, 99);
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a;
                var gueryB = `: ${Math.abs(this.b)}`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 26:
                this.a = random(2, 9) * randomMinusPlusOne();
                this.b = random(2, 9) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `: ${this.b}` : `: (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 27:
                this.a = random(2, 20) * randomMinusPlusOne();
                this.b = random(2, 20) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `: ${this.b}` : `: (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 28:
                this.a = random(10, 20) * randomMinusPlusOne();
                this.b = random(10, 20) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `: ${this.b}` : `: (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 29:
                this.a = random(10, 99) * randomMinusPlusOne();
                this.b = random(10, 99) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `: ${this.b}` : `: (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 30:
                this.a = random(100, 999) * randomMinusPlusOne();
                this.b = random(100, 999) * (this.a > 0 ? -1 : randomMinusPlusOne());
                this.answer = this.a;
                this.a = this.a * this.b;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `: ${this.b}` : `: (&ndash; ${Math.abs(this.b)})`;
                this.query = `${gueryA} ${gueryB} = `;
                break;
            case 31:
                this.a = random(1, 9);
                this.b = random(1, 9);
                this.c = random(1, 9);
                this.answer = this.a + this.b + this.c;
                var gueryA = this.a;
                var gueryB = `+ ${this.b}`;
                var gueryC = `+ ${this.c}`;
                this.query = `${gueryA} ${gueryB} ${gueryC} = `;
                break;
            case 32:
                this.a = random(10, 99);
                this.b = random(10, 99);
                this.c = random(10, 99);
                this.answer = this.a + this.b + this.c;
                var gueryA = this.a;
                var gueryB = `+ ${this.b}`;
                var gueryC = `+ ${this.c}`;
                this.query = `${gueryA} ${gueryB} ${gueryC} = `;
                break;
            case 33:
                this.a = random(100, 999);
                this.b = random(100, 999);
                this.c = random(100, 999);
                this.answer = this.a + this.b + this.c;
                var gueryA = this.a;
                var gueryB = `+ ${this.b}`;
                var gueryC = `+ ${this.c}`;
                this.query = `${gueryA} ${gueryB} ${gueryC} = `;
                break;
            case 34:
                this.a = random(1, 9) * randomMinusPlusOne();
                this.b = random(1, 9) * randomMinusPlusOne();
                this.c = random(1, 9) * ((this.a > 0 && this.b > 0) ? -1 : randomMinusPlusOne());
                this.answer = this.a + this.b + this.c;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
                var gueryC = this.c > 0 ? `+ ${this.c}` : `&ndash; ${Math.abs(this.c)}`;
                this.query = `${gueryA} ${gueryB} ${gueryC} = `;
                break;
            case 35:
                this.a = random(10, 99) * randomMinusPlusOne();
                this.b = random(10, 99) * randomMinusPlusOne();
                this.c = random(10, 99) * ((this.a > 0 && this.b > 0) ? -1 : randomMinusPlusOne());
                this.answer = this.a + this.b + this.c;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
                var gueryC = this.c > 0 ? `+ ${this.c}` : `&ndash; ${Math.abs(this.c)}`;
                this.query = `${gueryA} ${gueryB} ${gueryC} = `;
                break;
            case 36:
                this.a = random(100, 999) * randomMinusPlusOne();
                this.b = random(100, 999) * randomMinusPlusOne();
                this.c = random(100, 999) * ((this.a > 0 && this.b > 0) ? -1 : randomMinusPlusOne());
                this.answer = this.a + this.b + this.c;
                var gueryA = this.a > 0 ? this.a : `&ndash; ${Math.abs(this.a)}`;
                var gueryB = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
                var gueryC = this.c > 0 ? `+ ${this.c}` : `&ndash; ${Math.abs(this.c)}`;
                this.query = `${gueryA} ${gueryB} ${gueryC} = `;
                break;
            default:
                this.a = random(0, 9);
                this.b = random(0, 9);
                this.answer = this.a + this.b;
                this.query = `${this.a} + ${ Math.abs(this.b)} = `;
        }

        // if (level === 5) {
        //     this.a = random(10, 99) * randomMinusPlusOne();
        //     this.b = random(10, 99) * randomMinusPlusOne();
        //     this.action_1 = this.a > 0 ? '' : '&ndash;';
        //     this.action_2 = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash;${Math.abs(this.b)})`;
        //     this.answer = this.a * this.b;
        // }else if (level === 4) {
        //     this.a = random(1, 9) * randomMinusPlusOne();
        //     this.b = random(1, 9) * randomMinusPlusOne();
        //     this.action_1 = this.a > 0 ? '' : '&ndash;';
        //     this.action_2 = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash;${Math.abs(this.b)})`;
        //     this.answer = this.a * this.b;
        // }else if (level === 3) {
        //     this.a = random(100, 999) * randomMinusPlusOne();
        //     this.b = random(100, 999) * randomMinusPlusOne();
        //     this.action_1 = this.a > 0 ? '' : '&ndash;';
        //     this.action_2 = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
        //     this.answer = this.a + this.b;
        // } else if (level === 2) {
        //     this.a = random(10, 99) * randomMinusPlusOne();
        //     this.b = random(10, 99) * randomMinusPlusOne();
        //     this.action_1 = this.a > 0 ? '' : '&ndash;';
        //     this.action_2 = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
        //     this.answer = this.a + this.b;
        // } else {
        //     this.a = random(1, 9) * randomMinusPlusOne();
        //     this.b = random(1, 9) * randomMinusPlusOne();
        //     this.action_1 = this.a > 0 ? '' : '&ndash;';
        //     this.action_2 = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
        //     this.answer = this.a + this.b;
        // }


        this.userAnswer = null;

        this.view = document.createElement('div');
        this.view.setAttribute('class', 'task');

        this.wrapperView = document.createElement('div');
        this.wrapperView.setAttribute('class', 'task__wrapper');

        this.titleView = document.createElement('label');
        this.titleView.setAttribute('class', 'task__text');
        this.titleView.setAttribute('for', `task-input-${index}`);
        this.titleView.innerHTML = this.query;

        this.inputView = document.createElement('input');
        this.inputView.setAttribute('class', 'task__input');
        this.inputView.setAttribute('id', `task-input-${index}`);
        this.inputView.setAttribute('type', 'number');
        this.inputView.addEventListener('input', this.eventInput.bind(this), false);

        this.wrapperView.appendChild(this.titleView);
        this.wrapperView.appendChild(this.inputView);

        this.messageView = document.createElement('div');
        this.messageView.setAttribute('class', 'task__message');

        this.view.appendChild(this.wrapperView);
        this.view.appendChild(this.messageView);


    }

    eventInput(event) {
        this.userAnswer = parseInt(event.target.value);
    }

    getView() {
        return this.view;
    }

    showAnswer() {

        this.messageView.classList.remove('task__message_error');
        if (this.userAnswer === null) {
            this.messageView.classList.add('task__message_error');
            this.messageView.innerHTML = `Ошибка! Правильный ответ: ${this.answer}`;
        } else if (this.userAnswer !== this.answer) {
            this.messageView.classList.add('task__message_error');
            this.messageView.innerHTML = `Ошибка! Правильный ответ: ${this.answer}`;
        } else {
            this.messageView.innerHTML = `Правильно!`;
        }
    }
}

class CheckButton {

    constructor() {
        this.view = document.createElement('a');
        this.view.setAttribute('href', '#');
        this.view.setAttribute('class', 'lesson__button');
        this.view.innerHTML = 'Проверить';
    }

    getView() {
        return this.view;
    }

    setTitle(title) {
        this.view.innerHTML = title;
    }
}

class Lesson {


    constructor() {
        this.containerView = document.getElementById(container_ID);
        this.level = parseInt(this.containerView.getAttribute('data-level'));
        this.button = new CheckButton();
    }

    init() {

        if (this.containerView) {
            this.containerView.innerHTML = '';
            this.tasks = initTasks(this.level);

            for (let task of this.tasks) {
                this.containerView.appendChild(task.getView());
            }

            let buttonView = this.button.getView();
            buttonView.onclick = this.checkLesson.bind(this);
            this.containerView.appendChild(buttonView);
        }

        return '';
    }

    checkLesson(event) {
        event.preventDefault();

        for (let task of this.tasks) {
            task.showAnswer();
        }

        let buttonView = this.button.getView();
        buttonView.onclick = this.reInit.bind(this);

        let resultView = document.createElement('p');
        resultView.setAttribute('class', 'lesson__result');
        resultView.innerHTML = `Оценка: ${this.getMark()}`;
        this.containerView.appendChild(resultView);
        this.button.setTitle('Пройти тест еще раз?');
    }

    reInit(event) {
        event.preventDefault();
        this.button.setTitle('Проверить');
        this.init();

    }

    getMark() {
        let mark = 0;
        for (let task of this.tasks) {
            if (task.answer === task.userAnswer) {
                mark++;
            }
        }
        return mark;
    }
}


function initTasks(level) {

    let tasks = [];

    for (let i = 0; i < NUM; i++) {
        tasks.push(new Task(level, i));
    }

    return tasks;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomMinusPlusOne() {
    return random(0, 1) === 1 ? 1 : -1;
}


let lesson = new Lesson();
lesson.init();



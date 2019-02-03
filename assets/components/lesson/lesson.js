import './lesson.scss';

const container_ID = 'lesson';
const NUM = 10;

class Task {

    constructor(level, index = 0) {
        if (level === 5) {
            this.a = random(10, 99) * randomMinusPlusOne();
            this.b = random(10, 99) * randomMinusPlusOne();
            this.action_1 = this.a > 0 ? '' : '&ndash;';
            this.action_2 = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash;${Math.abs(this.b)})`;
            this.answer = this.a * this.b;
        }else if (level === 4) {
            this.a = random(1, 9) * randomMinusPlusOne();
            this.b = random(1, 9) * randomMinusPlusOne();
            this.action_1 = this.a > 0 ? '' : '&ndash;';
            this.action_2 = this.b > 0 ? `&middot; ${this.b}` : `&middot; (&ndash;${Math.abs(this.b)})`;
            this.answer = this.a * this.b;
        }else if (level === 3) {
            this.a = random(100, 999) * randomMinusPlusOne();
            this.b = random(100, 999) * randomMinusPlusOne();
            this.action_1 = this.a > 0 ? '' : '&ndash;';
            this.action_2 = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
            this.answer = this.a + this.b;
        } else if (level === 2) {
            this.a = random(10, 99) * randomMinusPlusOne();
            this.b = random(10, 99) * randomMinusPlusOne();
            this.action_1 = this.a > 0 ? '' : '&ndash;';
            this.action_2 = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
            this.answer = this.a + this.b;
        } else {
            this.a = random(1, 9) * randomMinusPlusOne();
            this.b = random(1, 9) * randomMinusPlusOne();
            this.action_1 = this.a > 0 ? '' : '&ndash;';
            this.action_2 = this.b > 0 ? `+ ${this.b}` : `&ndash; ${Math.abs(this.b)}`;
            this.answer = this.a + this.b;
        }


        this.userAnswer = null;

        this.view = document.createElement('div');
        this.view.setAttribute('class', 'task');

        this.wrapperView = document.createElement('div');
        this.wrapperView.setAttribute('class', 'task__wrapper');

        this.titleView = document.createElement('label');
        this.titleView.setAttribute('class', 'task__text');
        this.titleView.setAttribute('for', `task-input-${index}`);
        this.titleView.innerHTML = `${this.action_1} ${ Math.abs(this.a)} ${this.action_2} = `;

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
        } else if (this.userAnswer != this.answer) {
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

    checkLesson() {

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



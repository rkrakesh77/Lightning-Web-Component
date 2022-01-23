import addTodo from '@salesforce/apex/ToDoController.addTodo';
import getCurrentToDo from '@salesforce/apex/ToDoController.getCurrentToDo';
import { LightningElement, track } from 'lwc';



export default class ToDoManager extends LightningElement {

    @track time = "20:10 PM";
    @track greeting = "Good Evening";
    @track toDos = [];

    connectedCallback() {
        this.getTime();
        // this.populateTodos();

        //Get Data from Salesforce
        this.fetchToDos();
        setInterval(() => {
            this.getTime();
            //console.log("Set Interval Called");
        }), 10000 * 600
    }

    getTime() {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();

        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)}:${sec} ${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }
    setGreeting(hour) {
        if (hour < 12)
            this.greeting = "Good Morning";
        else if (hour >= 12 && hour < 18)
            this.greeting = "Good Afternoon";
        else
            this.greeting = "Good Evening";
    }
    getHour(hour) {
        return hour === 0 ? 12 : hour > 12 ? (hour - 12) : hour;
    }
    getMidDay(hour) {
        return hour >= 12 ? "PM" : "AM";
    }
    getDoubleDigit(digit) {
        return digit < 10 ? "0" + digit : digit;
    }

    addToDoHandler() {
        const inputBox = this.template.querySelector("lightning-input");
        const todo = {
            // todoId: this.toDos.length,
            todoName: inputBox.value,
            done: false,
            // todoDate: new Date()
        }

        addTodo({ payload: JSON.stringify(todo) }).then(response => {
            console.log("Successfull");
            this.fetchToDos();
        }).catch(error => {
            console.log("Error in AddToDo", error);
        })

        // this.toDos.push(todo);

        inputBox.value = "";
    }

    get upcomingTasks() {
        return this.toDos && this.toDos.length ? this.toDos.filter(i => !i.done) : [];
    }

    get completedTasks() {
        return this.toDos && this.toDos.length ? this.toDos.filter(todo => todo.done) : [];
    }

    populateTodos() {
        console.log("It's Running")
        const todos = [{
            todoId: 0,
            todoName: "Feed the Dog",
            done: false,
            todoDate: new Date()
        },
        {
            todoId: 1,
            todoName: "Feed the Cat",
            done: false,
            todoDate: new Date()
        }, {
            todoId: 2,
            todoName: "Test",
            done: true,
            todoDate: new Date()
        }]
        this.toDos = todos;
    }

    fetchToDos() {
        getCurrentToDo().then(result => {
            if (result) {
                console.log("Retreived ToDos from Salesforce");
                this.toDos = result;
            }
        }).catch(error => {
            console.log("Error in getting all ToDos", error);
        })
    }
    updateHandler() {
        this.fetchToDos();
    }
    deleteHandler() {
        this.fetchToDos();
    }

}
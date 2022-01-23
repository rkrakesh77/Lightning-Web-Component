import deleteToDo from '@salesforce/apex/ToDoController.deleteToDo';
import updateTodo from '@salesforce/apex/ToDoController.updateTodo';
import { api, LightningElement } from 'lwc';

export default class ToDoItem extends LightningElement {
    @api todoId;
    @api todoName;
    @api done = false;

    get containerClass() {
        return this.done ? "todo completed" : "todo upcoming";
    }

    get iconName() {
        return this.done ? "utility:add" : "utility:check";
    }
    updateHandler() {
        const todo = {
            todoId: this.todoId,
            todoName: this.todoName,
            done: !this.done
        };
        updateTodo({ payload: JSON.stringify(todo) }).then(result => {
            console.log("Updated Successfully");

            const UpdateEvent = new CustomEvent('update', { detail: 'ItemUpdated' });
            this.dispatchEvent(UpdateEvent);
        }).catch(error => {
            console.log("Error in Updating Todo", error);
        })
    }
    deleteHandler() {
        deleteToDo({ todoId: this.todoId }).then(result => {
            console.log("Deleted ToDo");
            const deleteEvent = new CustomEvent('delete', { detail: 'ItemUpdated' });
            this.dispatchEvent(deleteEvent);
        }).catch(error => {
            console.log("error in Deleting Todo");
        })
    }
}
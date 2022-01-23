public with sharing class ToDoController {
    @AuraEnabled
    public static string addTodo(String payload){
        ToDo payloadObject=(ToDO)JSON.deserialize(payload, ToDo.class);

        SObject tsk=(SObject)Type.forName('ToDo__c').newInstance();
        tsk.put('Name', payloadObject.todoName);
        tsk.put('Done__c', payloadObject.done);
        insert tsk;

        return String.valueOf(tsk.Id);
    }

    @AuraEnabled
    public static void updateTodo(String payload){
        ToDo payloadObject=(ToDO)JSON.deserialize(payload, ToDo.class);

        SObject tsk=(SObject)Type.forName('ToDo__c').newInstance();
        tsk.put('Name', payloadObject.todoName);
        tsk.put('Done__c', payloadObject.done);
        tsk.put('Id', payloadObject.todoId);
        update tsk;

       // return String.valueOf(tsk.Id);
    }

    @AuraEnabled
    public static void deleteToDo(String todoId){
        SObject tsk = (SObject)Type.forName('ToDo__c').newInstance();
        tsk.put('Id', todoId);

        delete tsk;
    }

    @AuraEnabled
    public static List<Todo> getAllTodos(){
        List<SObject> tsks=Database.query(
            'SELECT Id, Name,CreatedDate, Done__c from ToDo__c where CreatedDate= LAST_N_DAYS:7 ORDER BY CreatedDate DESC');

        return getToDos(tsks);
    }

    @AuraEnabled
    public static List<ToDo> getCurrentToDo(){
        List<SObject> tsks=Database.query(
            'SELECT Id, Name,CreatedDate, Done__c from ToDo__c where CreatedDate= TODAY ORDER BY CreatedDate DESC'
            );
        return getToDos(tsks);
    }

    @AuraEnabled
    public static List<ToDo> getToDos(List<SObject> tsks){
        List<ToDo> todos=new List<ToDo>();
        for (SObject tsk : tsks) {
            ToDo todo=new ToDo();
            todo.todoId=tsk.Id;
            todo.todoName=String.valueOf(tsk.get('Name'));
            todo.todoDate=Date.valueOf(tsk.get('CreatedDate'));
            todo.done=Boolean.valueOf(tsk.get('Done__c'));
            todos.add(todo);
        }
        return todos;
    }

    Class ToDo{
        @AuraEnabled
        public String todoId;
        @AuraEnabled
        public String todoName;
        @AuraEnabled
        public Date todoDate;
        @AuraEnabled
        public Boolean done;
        }
    
}

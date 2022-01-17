public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            //Integer i=1/0;
            return [select id,FirstName,LastName,Email from contact
            WITH SECURITY_ENFORCED
            order by FirstName];
        } catch (Exception e) {
            throw new AuraHandledException('Forced error');
        }
    }
    
}
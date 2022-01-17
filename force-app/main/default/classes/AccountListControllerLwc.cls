public with sharing class AccountListControllerLwc {
    @AuraEnabled(cacheable=true)
    public static List<account> queryAccountsByEmployeeNumber(Integer numberOfEmployees){
        try {
            return [select name from Account where NumberOfEmployees >=:numberOfEmployees];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        try {
            return [select Name from Account where annualRevenue>=:annualRevenue];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
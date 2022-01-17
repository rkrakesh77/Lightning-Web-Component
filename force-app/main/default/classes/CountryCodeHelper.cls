public class CountryCodeHelper {
    public static String getCountryCode(String country){
        Country_Code__mdt countryCode = [
      SELECT Id, MasterLabel, Country_Code__c
      FROM Country_Code__mdt
      WHERE MasterLabel = :country
      LIMIT 1
    ];
  Country_Code__mdt cc=Country_Code__mdt.getinstance('canada');
        System.debug(cc);
    return countryCode.Country_Code__c;
    }
}
global class PSRecordSearchController {
	public PSRecordSearchController() {
		
	}

	@AuraEnabled
    public static String descSearchField(String objtype, String searchField) {

        return(PSMetaUtils.getSingleFieldDesc(objtype, searchField));
    }

    @AuraEnabled
    public static List<SObject> query(String queryStr) {
        System.debug('queryStr=' + queryStr);

        return Database.query(queryStr);
    }
}
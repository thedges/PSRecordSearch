global class PSRecordSearchController {
	public PSRecordSearchController() {
		
	}

    @AuraEnabled
    public static List<SObject> query(String queryStr) {
        System.debug('queryStr=' + queryStr);

        return Database.query(queryStr);
    }
}
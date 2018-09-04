function createDataset(fields, constraints, sortFields) {
   
	
	var newDataset = DatasetBuilder.newDataset();
    
    //var myQuery = findConstraint('SQL', constraints);
    
    var nome = findConstraint("FULL_NAME",constraints,"");
    //var papel = "qualidade"; 
    log.info("**** Contraint SQL : "+nome);
    
    var myQuery = "SELECT  UT.USER_CODE, U.FULL_NAME AS FULL_NAME "+
        ",CASE UT.USER_STATE " +
        	"WHEN 1 " +
        		"THEN 'true' " +
        	"ELSE 'false' " +
        "END AS active   "+
        
        " FROM FDN_USER U  JOIN FDN_USERTENANT UT ON U.USER_ID = UT.USER_ID AND UT.TENANT_ID = 1  "+
        
       " WHERE UT.TENANT_ID = 1 AND UT.USER_STATE = 1 AND U.USER_TYPE <> '2' AND   U.FULL_NAME LIKE '%"+nome+"%' " +
       " ORDER BY U.FULL_NAME ASC";

    log.info("##### My Query: "+myQuery);

    var dataSource = "/jdbc/FluigDS";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    
    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        var columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()) {
            if (!created) {
                for (var i = 1; i <= columnCount; i++) {
                    newDataset.addColumn(rs.getMetaData().getColumnName(i));
                }
                created = true;
            }
            var Arr = new Array();
            for (var i = 1; i <= columnCount; i++) {
                var obj = rs.getObject(rs.getMetaData().getColumnName(i));
                if (null != obj) {
                    Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
                } else {
                    Arr[i - 1] = "null";
                }
            }
            newDataset.addRow(Arr);
        }
    } catch (e) {
    	newDataset.addColumn("ERRO");
    	newDataset.addRow([e.message]);
        log.error("ERRO==============> " + e.message);
    } finally {
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return newDataset;
}

function findConstraint(fieldName, constraints, defaultValue) {
	 if (constraints != null) {
	  
	  for (var i=0; i<constraints.length; i++){
	   log.info("***CONSTRAN : " + constraints[i].fieldName );
	   log.info("***CONSTRAN2 : " + constraints[i].initialValue);
	   if (constraints[i].fieldName == fieldName){
	    return constraints[i].initialValue;
	   }
	  }
	 }
	 return defaultValue;
	}
$(document).ready(function() {

    // Load LO contrib table

    $('#locontrib').DataTable( {
        "ajax": "data/locontrib.json",
	"lengthMenu": [[15, 20, -1], [15, 20, "All"]],
	"order" : [[0, "desc"], [3, "asc"]],
        "columns": [
            { "data": "date" },
            { "data": "description" },
            { "data": "type" },
            {
		"data": "tdfid",
		"render": function ( data, type, row ) {  // data is just the bug id number
		    if( data == "0" )
			return 'N.A.';
		    return '<a href="https://bugs.documentfoundation.org/show_bug.cgi?id=' + data + '">tdf#' + data + '</a>';
		}
	    },
            {
		"data": "gerritid",
		"render": function ( data, type, row ) {  // data is just the gerrit id number
		    if( data == "0" )
			return 'N.A.';
		    return '<a href="https://gerrit.libreoffice.org/#/c/' + data + '/">gerrit#' + data + '</a>';
		}
	    },
            { "data": "status" }
        ]
    } );

    // Load FOSS contrib table

    $('#fosscontrib').DataTable( {
        "ajax": "data/fosscontrib.json",
	"lengthMenu": [[15, 20, -1], [15, 20, "All"]],
	"order" : [[0, "desc"], [ 1, "asc" ]],
        "columns": [
            { "data": "date" },
	    { "data": "name" },
            { "data": "description" },
            {
		"data": "ghname",
		"render": function ( data, type, row ) {  // data is just the github project name
		    return '<a href="https://github.com/LDCS/' + data + '">' + data + '</a>';
		}
	    }
	]
    } );
} );

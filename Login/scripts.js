/*
=======================================================================
HTML TARGETS
    Login
        $('#uname')
        $('#upass')
        $('#uentrysubmit')
    Signup
        $('#unameentry')
        $('#upassentry')
        $('#ucredsubmit')
$('#')

ONCLICK METHOD
    $('#').on('click',function(){

})
=======================================================================
*/
//  FIREBASE CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyAQSWHrrXes_C3tMYqhF_dia7C3jI2wMkc",
    authDomain: "starterfka.firebaseapp.com",
    databaseURL: "https://starterfka.firebaseio.com",
    projectId: "starterfka",
    storageBucket: "",
    messagingSenderId: "584403285589",
    appId: "1:584403285589:web:12f58acc15bb74cd6f46dc"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
//=======================================================================
//  INITIALIZE VARIABLES
var uattemptname = '';                  //  TRACKS UNAME INPUT FOR LOGIN
var uattemptpass = '';                  //  TRACKS UPASS INPUT FOR LOGIN
var unewname = '';                      //  TRACKS UNEWNAME INPUT FOR SIGNUP
var unewpass = '';                      //  TRACKS UNEWPASS INPUT FOR SIGNUP
var match = 0;                          //  TRACKS MATCHES WITH PREVIOUS UNEWNAME ENTRIES
var usersarray = [['admin','pass'],];   //  STORES USERS AND PASSWORDS IN ARRAY
//=======================================================================
//  WHEN USERS SUBMIT (IN)VALID USERNAME + PASSWORD
$('#ucredsubmit').on('click',function(){
    //  SET UATTEMPT TO ENTERED VALUES
    uattemptname = $('#uname').val().trim()
    uattemptpass = $('#upass').val().trim()
    //  CLEAR INPUT FIELDS
    $('#uname').val('');
    $('#upass').val('');
    //  VERIFY NAME/PASS COLLECTED
    console.log(uattemptname,uattemptpass)
    //  LOOP USER ARRAY FOR USER NAME
    for (var i=0; i<usersarray.length; i++) {
        //  CHECK MATCHING USERNAME FOR MATCHING PASSWORD
        console.log("Attmept: ",i)
        if (uattemptname==usersarray[i][0]) {
            if (uattemptpass==usersarray[i][1]) {
                console.log('Passed Verification')
                //  GO TO MAIN PAGE
                window.location.href = '../index.html'
            }
        } else {
            console.log("failed Verification")
            //  GO TO ERROR PAGE
            window.location.href = './error.html'
        }
    }
//  END OF UCREDSUBMIT ONCLICK FUNCTION
})
//=======================================================================
//  WHEN USERS SUBMIT NEW USERNAME + PASSWORD
$('#uentrysubmit').on('click',function() {
    //  SET UENTRIES TO ENTERED VALUES
    unewname = $('#unameentry').val().trim()
    unewpass = $('#upassentry').val().trim()
    //  VERIFY NAME/PASS COLLECTED
    console.log(unewname,unewpass)
    //  CLEAR INPUT FIELDS
    $('#unameentry').val('')
    $('#upassentry').val('')
    //  VERIFY USERNAME AND PASSWORD LENGTH > 6
    if (unewname.length>5 || unewpass.length>5) {
        //  CHECK FOR ILLEGAL CHARACTERS
        if (!unewname.includes('<'||'>'||'!'||'$'||'{'||'}')) {
            // CHECK USERSARRAY FOR REUSED USERNAME
            for (var j=0; j<usersarray.length; j++) {
                if (unewname==usersarray[j][0]) {
                    console.log(`Match found: @ ${usersarray[j][0]} with ${unewname} `);
                    $('#submissionissues').text(`Username: ${unewname} is not available`);
                    match += 1;
                }
            };    
            //  IF NO MATCHES FOUND IN ARRAY, ADD USER/PASS TO USERSARRAY
            if (match==0) {
                usersarray.push([unewname,unewpass]);
                console.log(`User: ${unewname} added.`)
                database.ref().push({
                    user:{
                        name:unewname,
                        pass:unewpass,
                        dateAdded: firebase.database.ServerValue.TIMESTAMP,
                    }
                })
                unewname, unewpass = '', '';
                window.location.href = './login.html'
            } else {
                match = 0;
                illchar = 0;
                window.location.href ='./signup.html'
            }
        // IF ILLEGAL CHARACTERS USED
        } else {
            $('#submissionissues').text('You Used An Illegal Character, Try Again');           
        }
    //  IF USER NAME OR PASSWORD < 6    
    } else {
        unewname, unewpass = '', '';
        $('#submissionissues').text('USER NAME and PASSWORD must have at least 6 characters each, Try Again');
    }
//  END OF UENTRYSUBMIT ONCLICK FUNCTION    
});
//=======================================================================


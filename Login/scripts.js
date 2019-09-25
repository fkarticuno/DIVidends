/*
Targets
    Login
        $('#uname')
        $('#upass')
        $('#uentrysubmit')
    Signup
        $('#unameentry')
        $('#upassentry')
        $('#ucredsubmit')
$('#')

onclick
    $('#').on('click',function(){

})

*/
//  INITIALIZE VARIABLES
var uattemptname = '';
var uattemptpass = '';
var unewname = '';
var unewpass = '';
var usersarray = [['admin','pass'],];

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
                console.log('Passed')
                //  GO TO MAIN PAGE
                window.location.href = '../index.html'
            }
        } else {
            console.log("failed")
            //  GO TO ERROR PAGE
            window.location.href = './error.html'
        }
        
    }
})

//  WHEN USERS SUBMIT NEW USERNAME + PASSWORD
$('#uentrysubmit').on('click',function(){
    //  SET UENTRIES TO ENTERED VALUES
    unewname = $('#unameentry').val().trim()
    unewpass = $('#upassentry').val().trim()
    //  VERIFY NAME/PASS COLLECTED
    console.log(unewname,unewpass)
    //  CLEAR INPUT FIELDS
    $('#unameentry').val('')
    $('#upassentry').val('')
    // CHECK USERSARRAY FOR REUSED USERNAME
        // Broken
    for (var j=0; j<usersarray.length; j++) {
        if (unewname==usersarray[j][0]) {
            console.log('Match found');
            $('#submissionissues').text(`Username: ${unewname} is not available`);
        } else if (unewname.includes('/'||'<'||'>'||'!'||'$'||'{'||'}')) {
            $('#submissionissues').text('You Used An Illegal Character, try again');
            } 
        else usersarray.push([unewname,unewpass]);
        
    };
    
});
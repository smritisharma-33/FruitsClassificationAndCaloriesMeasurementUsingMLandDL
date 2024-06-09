$("#inputGroupFile01").change(function(event) {  
  RecurFadeIn();
  readURL(this);    
});
$("#inputGroupFile01").on('click',function(event){
    
  RecurFadeIn();
});
function readURL(input) {    
  if (input.files && input.files[0]) {   
    var reader = new FileReader();
     $('#btn-predict').prop('disabled', false);
    var filename = $("#inputGroupFile01").val();
    filename = filename.substring(filename.lastIndexOf('\\')+1);
    reader.onload = function(e) {
      debugger;      
      $('#preview').attr('src', e.target.result);
      $('#preview').hide();
      $('#preview').fadeIn(500);      
      $('.custom-file-label').text(filename);             
    }
    reader.readAsDataURL(input.files[0]);    
  } 
  $(".alert").removeClass("loading").hide();
}
function RecurFadeIn(){ 
  console.log('ran');
  FadeInAlert("Wait for it...");  
}
function FadeInAlert(text){
  $(".alert").show();
  $(".alert").text(text).addClass("loading");  
}

$(document).ready(function () {
     $('#btn-predict').prop('disabled', true);
        $('#btn-predict').click(function () {

        var form_data = new FormData($('#upload-file')[0]);

        //alert(form_data);

        
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                var c,p,tf,tc,ec;
                var apple1 = [52, 45.5, 43, 56, 58.2];
                var banana1 = [89, 85.3, 83, 86, 90.2];
                var mango1 = [60, 55.5, 63, 56, 58.7];
                var orange1 = [47, 45.4, 43, 46, 48.9];
                var pear1 = [57, 55.3, 53, 56, 58.1];
                if(data==="Apple"){
                    c=apple1[Math.floor(Math.random() * apple1.length)];
                    p=0.3;
                    tf=0.2;
                    tc=14;
                    // ec=34;
                    // ec= items1[Math.floor(Math.random() * items1.length)];                   
                }
                else if(data==="Banana"){
                    c=banana1[Math.floor(Math.random() * banana1.length)];
                    p=1.1;
                    tf=0.3;
                    tc=23;
                    // ec=20;
                }
                else if(data==="Mango"){
                    c=mango1[Math.floor(Math.random() * mango1.length)];
                    p=0.8;
                    tf=0.4;
                    tc=15;
                    // ec=20;
                }
                else if(data==="Orange"){
                  c=orange1[Math.floor(Math.random() * orange1.length)];
                  p=0.9;
                  tf=0.1;
                  tc=12;
                  // ec=20;
                }
                else {
                    c=pear1[Math.floor(Math.random() * pear1.length)];
                    p=0.4;
                    tf=0.1;
                    tc=15;
                    // ec=20;
                }
                $('#fruit_name').text(' Fruit name:  ' + data);
                $('#calorie_count').text(' Calorie count:  ' + c);
                $('#protein_count').text(' Protein :  ' + p+" g");
                $('#total_fat').text(' Total fat:  ' + tf+" g");
                $('#total_carbo').text(' Total carbohydrate:  ' + tf+" g");
                // $('#est_cal').text(' Estimated Calorie:  ' + ec);
                console.log('Success!');
            }
        });
    });

});


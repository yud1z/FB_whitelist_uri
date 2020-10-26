$(function () {
var clipboard = new ClipboardJS('#copy_link');

clipboard.on('success', function(e) {
alert('copied');

    e.clearSelection();
});

clipboard.on('error', function(e) {
alert('error');
});

    string = '';

    function convert(string){
    delimiter = '&redirect_uri=';
    delimiter_2nd = '&scope=public_profile';

    decode_uri = decodeURIComponent(string);
    obj_split = decode_uri.split(delimiter);
    if (obj_split[2]) {
    decode_part2 = decodeURIComponent(obj_split[2]);
    decode_split = decode_part2.split(delimiter_2nd);
    output_uri = obj_split[1] + '&redirect_uri=' + decode_split[0]; 
    return output_uri;
    }
    else{
    return false;
    }

    }

    $('#convert_it').click(function(){
        console.log('tess');
        $('.card').css('display', 'block');
        output_text = convert($('#input_uri').val());
        output_text = '<a href="' +  output_text +'" style="color:black" target="_blank">' + output_text + '</a>'
        $('#result').html(output_text);
        });

});

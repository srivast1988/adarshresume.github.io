var d = new Date();
var dayOfWeek = d.getDay();
var hour = d.getHours();
var mins = d.getMinutes();
var status = 'open';

if (dayOfWeek == 4 &&  hour >= 13 && hour < 14){
    if (hour=='13' && mins < '30'){
        status = 'closed';
    }else{
        status = 'open';
    }
}else{
    status = 'closed';
}

if (status=='open') {
    $('.batch1').show();
    $('.batch2').hide();
}else{
    $('.batch1').hide();
    $('.batch2').show();
}

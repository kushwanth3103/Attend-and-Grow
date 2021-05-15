$(document).ready(function(){
    $.ajax('/events',
    {
        type:'GET',
        dataType:'json',
        success:function(data,status,xhr)
        {
            for(var i=0;i<data.length;i++){
                var div="<div id=eventitem class=row>"
                var image="<img src='data:image/<%=data[i].img.contentType%>;base64,<%=data[i].img.data.toString('base64')%>' class='col-sm-2'>"
                var tags="<div id=desc class=col-sm-8><br>"
                var arr_strings=data[i].tags
                var arr=arr_strings.split(',')
                for(var j=0;j<arr.length;j++)
                {
                    tags=tags+"<span class=eventtag>"+arr[j]+"</span>"
                }
                var title="<br><p style=padding-top:10px>"+data[i].name+"</p>"
                var club="<p>"+data[i].name+"</p>"
                var desc="<p>"+data[i].description+"</p></div>"
                var button="<div class=col-sm-2 ><a><button style=background-color:#023E8A;color:#FFFFFF>View More</button></a></div></div>"
                $("#eventslist").append(div+image+tags+title+club+desc+button);
            }
        },

    });
    
});
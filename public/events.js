$(document).ready(function(){
    $(".but").click(function(){
        console.log("hello")
        $.ajax('/events_det',{
            type:'POST',
            dataType:'text',
            data:$("but").val(),
            success:function(data,status,xhr)
            {
                console.log("hurray")
            }
        
        });
    });
    $.ajax('/events',
    {
        type:'GET',
        dataType:'json',
        success:function(data1,status,xhr)
        {
            for(var i=0;i<data1.length;i++){
                console.log(data1[i]._id)
                var div="<div id=eventitem class=row>"
                var image=""
                var tags="<div id=desc class=col-sm-8><br>"
                var arr_strings=data1[i].tags
                var arr=arr_strings.split(',')
                for(var j=0;j<arr.length;j++)
                {
                    tags=tags+"<span class=eventtag>"+arr[j]+"</span>"
                }
                var title="<br><p style=padding-top:10px>"+data1[i].name+"</p>"
                var club="<p>"+data1[i].name+"</p>"
                var desc="<p>"+data1[i].description+"</p></div>"
                var button="<div class=col-sm-2 ><a><button style=background-color:#023E8A;color:#FFFFFF class='but' value='"+data1[i]._id+"'>View More</button></a></div></div>"
                $("#eventslist").append(div+image+tags+title+club+desc+button);
            }
        },

    });
    
});
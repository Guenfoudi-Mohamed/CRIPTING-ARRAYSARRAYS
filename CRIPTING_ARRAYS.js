/*crypting for << ARRAYS*/ 

var m="425",maj="516",dim="5454"
var list_1 = ["P","E","T","E","R","U","S","A"];
var list_2 = [m,maj,dim];
var v2="";
function list(n1,n2){
    if(!isNaN(n1) && !isNaN(n2)){
        if((n1 > 0 && n1 <= list_1.length) && (n2 > 0 && n2 <= list_2.length)){
            n1-=1;
            n2-=1; 
            if(!isNaN(list_2[n2])){
                for(var t1 = 0;t1 < list_2[n2].length ;t1++){
                    for(var v1 = 0;v1 < list_2[n2][t1];v1++){
                        if(list_1[n1] == list_1[list_1.lenght-1]){
                            n1=0;
                        }
                        v2 +=list_1[n1];
                        n1+=1;
                    }
                }
                document.write("<mark style=font-family:'consolas';font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);TEXT-ALIGN:CENTER;>",v2,"</mark>");
            }
            else{
                document.write("<Mark style=font-family:'consolas';font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);>INCORECT variable n2 is not a nomber >> list[n2] TRY AGAINE!!</mark>");    
            }
        }
        else{
            document.write("<Mark style=font-family:'consolas';font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;>INCORECT n2={1,2,3} || n1={1,2,...,8} TRY AGAINE!!</mark>");
        }
    }
    else{
        document.write("<Mark style=font-family:'consolas';font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;>INCORECT LIST TRY AGAINE!!</mark>");
    }
}
list(1,3);    /*enter here a number list(num,num);*/
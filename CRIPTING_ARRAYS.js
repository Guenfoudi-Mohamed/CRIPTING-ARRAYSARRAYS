                                                                            /*crypting for << ARRAYS*/ 

var m="044340",maj="043",dim="0454"
var list_1 = ["M-","O-","H-","A-","M-","E-","D-","G-","U","E-","F-","O-","U-","D-","I-"];
var list_2 = [m,maj,dim];
var v2="";var v1;

var list = function(n1,n2){                                                          /*<<< function expression*/
    if(!isNaN(n1) & !isNaN(n2)){
        if((n1 > 0 && n1 <= list_1.length) && (n2 > 0 && n2 <= list_2.length)){
            n1-=1;
            n2-=1; 
            if(!isNaN(list_2[n2])){
                if(list_2[n2][0] == 0){
                    var o1 = -1;
                    for(var t1 = 0;t1 < list_2[n2].length ;t1++){
                        for(v1 = o1;v1 < list_2[n2][t1];v1++){
                            if(list_1[n1] == list_1[list_1.lenght-1]){
                                v2 +=list_1[n1];    
                                n1=0;
                                continue;
                            }
                            v2 +=list_1[n1];
                            n1+=1;   
                        }
                        break;
                    }
                }
                var o1 = 0;
                for(var t1 = 0;t1 < list_2[n2].length ;t1++){
                    for(v1 = o1;v1 < list_2[n2][t1];v1++){
                        if(list_1[n1] == list_1[list_1.length-1]){
                            v2 +=list_1[n1];    
                            n1=0;
                            continue;
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
            document.write("<Mark style=font-family:'consolas';font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;>INCORECT n2={list2.length} || n1={list_1.length} TRY AGAINE!!</mark>");
        }
    }
    else{
        document.write("<Mark style=font-family:'consolas';font-size:20px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;>INCORECT n1 or n2 is not a nomber TRY AGAINE!!</mark>");
    }
}
list(1,1);    /*enter here a number list(num,num);*/

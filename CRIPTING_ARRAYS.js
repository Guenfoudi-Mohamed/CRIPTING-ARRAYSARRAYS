var m="043",maj="034",dim="555"
    var list_1 = [" A"," A#"," B"," C"," C#"," D"," D#"," E"," F"," F#"," G"," G#"];
    var list_2 = [m,maj,dim];
    var v2="";var v1;
    var list = function(n1,n2){                                                          /*<<< function expression*/
        if(!isNaN(n1) & !isNaN(n2)){
            if((n1 > 0 && n1 <= list_1.length) && (n2 > 0 && n2 <= list_2.length)){
                n1-=1;
                n2-=1; 
                if(!isNaN(list_2[n2])){
                    // IF list_2[n2][0] == 0 
                    if(list_2[n2][0] == 0){
                        var o1 = -1;
                        for(var t1 = 0;t1 < list_2[n2].length ;t1++){
                            for(v1 = o1;v1 < list_2[n2][t1];v1++){
                                if(n1 == list_1.length-1){
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
                            var m1 = list_2[n2][t1];
                            var m2 = m1-1;
                            if(list_1[n1] == list_1[list_1.length-1]){
                                if(v1 == m2){v2 +=list_1[n1];}    
                                n1=0;
                                continue;
                            }
                            if(v1 == m2){v2 +=list_1[n1];}
                            n1+=1;   
                        }
                    }
                    document.write(v2);
                }
                else{
                    document.write("INCORECT variable n2 is not a nomber >> list[n2] TRY AGAINE!!");    
                }
            }
            else{
                document.write("INCORECT n2={list2.length} || n1={list_1.length} TRY AGAINE!!");
            }
        }
        else{
            document.write("INCORECT n1 or n2 is not a nomber TRY AGAINE!!");
        }
    }
    list(12,1);    /*enter here a number list(Starting_station,Mobility_values);*/

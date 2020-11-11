
function getSchedule(){
    var g = document.getElementById("gender").value;
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;

    
    if(g=="1"){
        //Height 1 
        if(h=="1"){
            {
                //Weight
                if(w=="1"||w=="2"){
                    window.open("Plan.html");
                }
                else{                   
                    if(w=="3"||w=="4"||w=="5"){
                        window.open("B1.html");
                    }
                    else{
                        window.open("B2.html");
                    }
                }
            }
            
        }
        else{
            //Height 2
            if(h=="2"){
                if(w=="1"){
                    window.open("Plan.html");
                }
                //Weight
                else{
                    if(w=="2"){
                        window.open("B2.html");
                    }
                    else{
                        
                        if(w=="3"||w=="4"||w=="5"){
                            window.open("B1.html");
                        }                        
                        else{
                            window.open("Plan.html");
                        }
                    }                                    
                }
            }

            else{
                //Height 3
                if(h=="3"){
                    if(w=="1"||w=="2"){
                        window.open("B2.html");
                    }
                    //Weight
                    else{
                        if(w=="3"){
                            window.open("B5.html");
                        }
                        else{
                            if(w=="4"||w=="5"){
                                window.open("B4.html");
                            }
                            else{
                                window.open("B1.html");
                            }
                        }
                    }                            
                }

                //Height 4
                else{
                    if(w=="1"||w=="2"){
                        window.open("B2.html");
                    }
                    //Weight
                    else{
                        if(w=="3"){
                            window.open("B5.html");
                        }
                        else{
                            if(w=="4"||w=="5"||w=="6"){
                                window.open("B4.html");
                            }
                            
                            else{
                                window.open("B6.html");
                            }
                        }
                    }          
                }                
            }        
        }
    }


    /*-------------------------------------------------------- */
    
    //For Girls
    else{
        //Height 1 
        if(h=="1"){
            {
                //Weight
                if(w=="1"||w=="2"){
                    window.open("G1.html");
                }
                else{
                    if(w=="3"){
                        window.open("G2.html");
                    }
                    else if(w=="4"||w=="5"){
                        window.open("G3.html");
                    }
                    else{
                        window.open("G4.html");
                    }
                }
            }
            
        }
        else{
            //Height 2 
            if(h=="2"){
                if(w=="1"||w=="2"||w=="3"){
                    window.open("G1.html");
                }
                else{
                    if(w=="4"||w=="5"){
                        window.open("G2.html");
                    }
                    else{
                        window.open("G4.html");
                    }
                }
            }

            else{
                //Height 3
                if(h=="3"){
                    if(w=="1"||w=="2"||w=="3"){
                        window.open("G1.html");
                    }
                    else{
                        if(w=="4"||w=="5"){
                            window.open("G3.html");
                        }
                        else{
                            window.open("G4.html");
                        }
                    }             
                }
               
                //Height 4
                else{
                    if(w=="1"){
                        window.open("G1.html");
                    }
                    else{
                        if(w=="2"||w=="3"||w=="4"){
                            window.open("G3.html");
                        }
                        else{
                            window.open("G4.html");
                        }
                    }
                }                
            }        
        }
    } 
    
} 



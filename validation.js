function Validation(){
    this.kiemtraRong=function(value,errorId,mess){ 
        if(value===""){
            getEle(errorId).innerHTML=mess;
            getEle(errorId).style.display="inline-block";
            return false;
        };
        getEle(errorId).innerHTML="";
        getEle(errorId).style.display="none";
        return true;    
    };
    this.kiemtraCV=function(selectId,errorId,mess){ 
        if(getEle(selectId).selectedIndex!==0){
            getEle(errorId).innerHTML="";
            getEle(errorId).style.display="none";
            return true;
        }
        getEle(errorId).innerHTML=mess;
        getEle(errorId).style.display="inline-block";
        return false;
    };
    this.ktDodaikitu=function(value,errorId,min,max,mess){
        if(value.trim().length>=min && value.trim().length<=max){
            //true
            getEle(errorId).innerHTML="";
            getEle(errorId).style.display="none";
            return true;
        }
        //false
        getEle(errorId).innerHTML=mess;
        getEle(errorId).style.display="inline-block";
        return false;
    };
    this.kiemtraSoluong=function(value,errorId,min,max,mess){
        if(value >= min && value<=max){
             //true
             getEle(errorId).innerHTML="";
             getEle(errorId).style.display="none";
             return true;
        }
        getEle(errorId).innerHTML=mess;
        getEle(errorId).style.display="inline-block";
        return false;
    }
} 
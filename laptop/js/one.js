function go(){
    document.getElementsByClassName("go")[0].value = "알겠어. 오늘 바로 사줄께~!!";
    document.getElementById("now").style.visibility = "visible";
}

function next(){
    // 현재: 2021-03-24
    var now = new Date();
    
    var year = now.getFullYear();   // 연도
    var month = now.getMonth()+1;   // 월    
    var day = now.getDate();        // 일
    
    var stDate = new Date(2022, 12, 25);
    var endDate = new Date(year, month, day);
    
    var btMs = endDate.getTime() - stDate.getTime() ;
    var btDay = btMs / (1000*60*60*24) ;
    let x = document.getElementsByClassName("xmas_text")[0];
    x.innerText = "크리스마스로부터 " + btDay + "일 지났네용... 언제쯤..";
}



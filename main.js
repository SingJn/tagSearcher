var combinationDB = [
    ["뱅가드", "서포트", "★5 지마"],
    ["코스트+", "서포트", "★5 지마"],
    ["뱅가드", "군중제어", "★5 텍서스"],
    ["코스트+", "군중제어", "★5 텍서스"],
    ["누커", "★5 파이어워치"],
    ["범위공격", "디버프", "★5 메테오리테"],
    ["메딕", "서포트", "★5 프릴, 와파린"],
    ["서포트", "힐링", "★5 프릴, 와파린"],
    ["서포트", "원거리", "★5 프릴, 와파린"],
    ["디펜더", "생존형", "★5 불칸"],
    ["방어형", "생존형", "★5 불칸"],
    ["방어형", "딜러", "★5 불칸, 리스캄"],
    ["디펜더", "강제이동", "★5 크루아상"],
    ["방어형", "강제이동", "★5 크루아상"],
    ["디버프", "서포터", "★5 프라마닉스"],
    ["딜러", "서포터", "★5 이스티나"],
    ["소환", "★5 메이어"],
    ["서포터" ,"군중제어", "★5 메이어"],
    ["원거리", "군중제어", "★5 메이어"],
    ["군중제어", "쾌속부활", "★5 레드"],
    ["군중제어", "스페셜리스트", "★5 레드"],
    ["스페셜리스트", "딜러", "★5 만티코어, 클리프하트"],
    ["스페셜리스트", "생존형", "★5 만티코어, 클리프하트"],
    ["스페셜리스트", "감속", "★5 에프이터"],
    ["감속", "강제이동", "★5 에포이터"],
    ["강제이동", "딜러", "★5 클리프하트"],
    ["군중제어", "★5 레드, 텍사스, 메이어"],
    ["군중제어", "근거리", "★5 텍사스, 레드"],
    ["범위공격", "스나이퍼", "★4 이상 메테오리테, 시라유키"],
    ["범위공격", "감속", "★4 이상 시라유키"],
    ["생존형", "스나이퍼", "★4 이상 제시카"],
    ["생존형", "원거리", "★4 이상 제시카"],
    ["디버프", "스나이퍼", "★4 이상 메테오리테, 메테오"],
    ["디버프", "캐스트", "★4 이상 헤이즈"],
    ["서포트", "가드", "★4 이상 도베르만"],
    ["서포트", "딜러" ,"★4 이상 도베르만"],
    ["범위공격", "가드", "★4 이상 스펙터, 에스텔"],
    ["범위공격", "생존형", "★4 이상 스펙터, 에스텔"],
    ["범위공격", "근거리", "★4 이상 스펙터, 에스텔"],
    ["감속", "가드", "★4 이상 프로스트리프"],
    ["힐링", "방어형", "★4 이상 니어, 굼"],
    ["힐링", "디펜더", "★4 이상 니어, 굼"],
    ["힐링", "근거리", "★4 이상 니어, 굼"],
    ["방어형", "남성대원", "★4 이상 마터호른"],
    ["남성대원", "디펜더", "★4 이상 마터호른"],
    ["남성대원", "근거리", "★4 이상 마터호른"],
    ["스페셜리스트", "★4 이상 레드, 만티코어, 클리프하트, 에픵터, 쇼, 로프, 그라벨"],
    ["쾌속부활", "★4 이상 그라벨, 레드"],
    ["스페셜리스트", "방어형", "★4 그라벨"],
    ["쾌속부활", "방어형", "★4 이상 그라벨"],
    ["스페셜리스트", "강제이동", "★4 이상 클리프하트, 에프이터, 로프, 쇼"],
    ["강제이동", "★4 이상 클리프하트, 에프이터, 로프, 쇼, 크루아상"],
    ["서포트", "★4 이상 지마, 프틸롭시스, 와파린, 도베르만"],
    ["디버프", "★4 이상 메테오리테, 프라마닉스, 헤이즈, 메테오"],
    ["디버프", "딜러", "★4 이상 헤이즈, 메테오"],
    ["감속", "근거리", "★4 이상 프로스트리프, 에프이터"],
    ["감속", "딜러", "★4 이상 이스티나, 프로스트리프"],
    ["서포트", "근거리", "★4 이상 도베르만, 지마"],
    ["경력대원", "★5 확률증가"],
    ["고급경력대원", "★6 확정"],
    ["신입", "★1~2 확률증가"]
];
var combinationListDB = []
var tagInput = [];
var tagInputCount = 0;

/* make condition array */
for (i=0; i<combinationDB.length; i++) {
    for (j=0; j<combinationDB[i].length-1; j++) {
        if (combinationListDB.indexOf(combinationDB[i][j]) == -1) {
            combinationListDB.push(combinationDB[i][j]);
        }
    }
}
combinationListDB = combinationListDB.sort();

/* make button from combinationListDB */
/* 입력 태그 개수 추가 */
function getButtonValue(i) {
    if(tagInput.indexOf(i) == -1) {
        tagInput.push(i);
        tagInputCount += 1;
    } else {
        tagInput.splice(tagInput.indexOf(i), 1);
        tagInputCount -= 1;
    }
    /* 입력 태그 개수가 5개가 되면 검색 함수 실행*/
    if(tagInputCount >= 5) {
        search();
    }
}
for (i=0; i<combinationListDB.length; i++) {
    /* combinationListDB의 요소를 id로 가진 버튼 만들기 */
    var tagButton = document.createElement("button");
    tagButton.innerHTML = combinationListDB[i];
    tagButton.id = combinationListDB[i];
    var body = document.getElementsByClassName("input")[0];
    body.appendChild(tagButton);
    /* 해당 버튼 누를 시, tagInput에 push or splice 그리고 태그 변화 */
    tagButton.addEventListener ("click", function () {
        getButtonValue(this.id)
        /* add tags to Result from tagInput array every button click*/
        document.getElementById("tags").innerHTML = "태그 : ";
        for(i =0; i<tagInput.length; i++) {
            inputValue = tagInput[i];
            Result = document.getElementById("tags").innerHTML;
            document.getElementById("tags").innerHTML = Result + " " + inputValue;
        }
    });
}


function search() {
    var tagSearchResult = ""
    for (conditionArray in combinationDB) {
        var countCondition = 0;
        for (tag in tagInput) {
            if (combinationDB[conditionArray][countCondition] == tagInput[tag]) {
                countCondition += 1;
                if (countCondition + 1 == combinationDB[conditionArray].length) {
                    tagSearchResult = combinationDB[conditionArray];
                    outputText = document.getElementById("outputArea").innerHTML;
                    document.getElementById("outputArea").innerHTML = outputText + tagSearchResult + "\n";
                }
                for (tag in tagInput) {
                    if (combinationDB[conditionArray][countCondition] == tagInput[tag]) {
                        countCondition += 1;
                        if (countCondition + 1 == combinationDB[conditionArray].length) {
                            tagSearchResult = combinationDB[conditionArray];
                            outputText = document.getElementById("outputArea").innerHTML;
                            document.getElementById("outputArea").innerHTML = outputText + tagSearchResult + "\n";
                        }
                    }
                }
            }
        }
    }
    if (tagSearchResult == "") {
        document.getElementById("outputArea").innerHTML = "쟌넨";
    }
}
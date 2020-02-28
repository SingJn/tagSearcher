
/* 맨뒤 숫자는 2 = 6성 1 = 5성, 0 = 1~4성 */
let combinationDBkr = [
    ["6", "시즈", ["뱅가드", "근거리", "코스트+", "딜러", "고급특별채용"]],
    ["6", "샤이닝", ["메딕", "원거리", "서포트", "힐링", "고급특별채용"]],
    ["6", "나이팅게일", ["메딕", "원거리", "힐링", "서포트", "고급특별채용"]],
    ["6", "이프리트", ["캐스터", "원거리", "범위공격", "디버프", "고급특별채용"]],
    ["6", "엑시아", ["스나이퍼", "원거리", "딜러", "고급특별채용"]],
    ["6", "실버애쉬", ["가드", "근거리", "딜러", "서포트", "고급특별채용"]],
    ["6", "호시구마", ["디펜더", "근거리", "딜러", "방어형", "고급특별채용"]],
    ["6", "사리아", ["디펜더", "근거리", "서포트", "방어형", "힐링", "고급특별채용"]],
    ["5", "텍사스", ["뱅가드", "제어형", "근거리", "코스트+", "특별채용"]],
    ["5", "지마", ["뱅가드", "서포트", "근거리", "코스트+", "특별채용"]],
    ["5", "프틸롭시스", ["메딕", "원거리", "힐링", "서포트", "특별채용"]],
    ["5", "사일런스", ["메딕", "원거리", "힐링", "특별채용"]],
    ["5", "와파린", ["메딕", "원거리", "힐링", "서포트", "특별채용"]],
    ["5", "레드", ["스페셜리스트", "근거리", "제어형", "쾌속부활", "특별채용"]],
    ["5", "맨티코어", ["스페셜리스트", "생존형", "근거리", "딜러", "특별채용"]],
    ["5", "클리프하트", ["스페셜리스트", "딜러", "근거리", "강제이동", "특별채용"]],
    ["5", "에프이터", ["스페셜리스트", "감속", "근거리", "강제이동", "특별채용"]],
    ["5", "프로방스", ["스나이퍼", "원거리", "딜러", "특별채용"]],
    ["5", "블루포이즌", ["스나이퍼", "원거리", "딜러", "특별채용"]],
    ["5", "파이어워치", ["스나이퍼", "원거리", "딜러", "누커", "특별채용"]],
    ["5", "메테오라이트", ["스나이퍼", "원거리", "범위공격", "디버프", "특별채용"]],
    ["5", "플래티넘", ["스나이퍼", "원거리", "딜러", "특별채용"]],
    ["5", "프라마닉스", ["서포터", "원거리", "디버프", "특별채용"]],
    ["5", "이스티나", ["서포터", "원거리", "감속", "딜러", "특별채용"]],
    ["5", "메이어", ["서포터", "원거리", "소환", "제어형", "특별채용"]],
    ["5", "스펙터", ["가드", "근거리", "범위공격", "생존형", "특별채용"]],
    ["5", "인드라", ["가드", "근거리", "딜러", "생존형", "특별채용"]],
    ["5", "니어", ["디펜더", "근거리", "방어형", "힐링", "특별채용"]],
    ["5", "리스캄", ["디펜더", "근거리", "방어형", "딜러", "특별채용"]],
    ["5", "벌컨", ["디펜더", "근거리", "딜러", "방어형", "생존형", "특별채용"]],
    ["5", "크루아상", ["디펜더", "근거리", "강제이동", "방어형", "특별채용"]],
    ["4", "스캐빈저", ["뱅가드", "근거리", "코스트+", "딜러"]],
    ["4", "비그나", ["뱅가드", "근거리", "딜러", "코스트+"]],
    ["4", "미르", ["메딕", "원거리", "힐링"]],
    ["4", "퍼퓨머", ["메딕", "원거리", "힐링"]],
    ["4", "헤이즈", ["캐스터", "디버프", "원거리", "딜러"]],
    ["4", "기타노", ["캐스터", "원거리", "범위공격"]],
    ["4", "그라벨", ["스페셜리스트", "근거리", "쾌속부활", "방어형"]],
    ["4", "로프", ["스페셜리스트", "근거리", "강제이동"]],
    ["4", "쇼", ["스페셜리스트", "근거리", "강제이동"]],
    ["4", "시라유키", ["스나이퍼", "원거리", "범위공격", "감속"]],
    ["4", "메테오", ["스나이퍼", "원거리", "딜러", "디버프"]],
    ["4", "제시카", ["스나이퍼", "원거리", "딜러", "생존형"]],
    ["4", "어스스피릿", ["서포터", "원거리", "감속"]],
    ["4", "도베르만", ["가드", "근거리", "서포트", "딜러"]],
    ["4", "에스텔", ["가드", "근거리", "범위공격", "생존형"]],
    ["4", "무스", ["가드", "근거리", "딜러"]],
    ["4", "프로스트리프", ["가드", "근거리", "감속", "딜러"]],
    ["4", "마토이마루", ["가드", "딜러", "근거리", "생존형"]],
    ["4", "쿠오라", ["디펜더", "근거리", "방어형"]],
    ["4", "굼", ["디펜더", "근거리", "방어형", "힐링"]],
    ["4", "마터호른", ["디펜더", "근거리", "방어형"]],
    ["3", "팽", ["뱅가드", "근거리", "코스트+"]],
    ["3", "바닐라", ["뱅가드", "근거리", "코스트+"]],
    ["3", "플룸", ["뱅가드", "근거리", "딜러", "코스트+"]],
    ["3", "히비스커스", ["메딕", "원거리", "힐링"]],
    ["3", "안셀", ["메딕", "원거리", "힐링"]],
    ["3", "라바", ["캐스터", "원거리", "범위공격"]],
    ["3", "스튜어드", ["캐스터", "원거리", "딜러"]],
    ["3", "크루스", ["스나이퍼", "원거리", "딜러"]],
    ["3", "아드나키엘", ["스나이퍼", "원거리", "딜러"]],
    ["3", "오키드", ["서포터", "원거리", "감속"]],
    ["3", "멜란사", ["가드", "근거리", "딜러", "생존형"]],
    ["3", "비글", ["디펜더", "근거리", "방어형"]],
    ["2", "야토", ["뱅가드", "근거리", "신입"]],
    ["2", "듀린", ["캐스터", "원거리", "신입"]],
    ["2", "12F", ["캐스터", "원거리", "신입"]],
    ["2", "레인저", ["스나이퍼", "원거리", "신입"]],
    ["2", "느와르", ["디펜더", "근거리", "신입"]],
    ["1", "Lancet-2", ["메딕", "원거리", "힐링", "로봇"]],
    ["1", "Castle-3", ["가드", "근거리", "서포트", "로봇"]]
];
let combinationDBjp = [
    ["6", "시즈", ["先鋒タイプ", "近距離", "COST回復", "火力", "上級エリート"]],
    ["6", "샤이닝", ["医療タイプ", "遠距離", "支援", "治療", "上級エリート"]],
    ["6", "나이팅게일", ["医療タイプ", "遠距離", "治療", "支援", "上級エリート"]],
    ["6", "이프리트", ["術師タイプ", "遠距離", "範囲攻撃", "弱化", "上級エリート"]],
    ["6", "엑시아", ["狙撃タイプ", "遠距離", "火力", "上級エリート"]],
    ["6", "실버애쉬", ["前衛タイプ", "近距離", "火力", "支援", "上級エリート"]],
    ["6", "호시구마", ["重装タイプ", "近距離", "火力", "防御", "上級エリート"]],
    ["6", "사리아", ["重装タイプ", "近距離", "支援", "防御", "治療", "上級エリート"]],
    ["5", "텍사스", ["先鋒タイプ", "牽制", "近距離", "COST回復", "エリート"]],
    ["5", "지마", ["先鋒タイプ", "支援", "近距離", "COST回復", "エリート"]],
    ["5", "프틸롭시스", ["医療タイプ", "遠距離", "治療", "支援", "エリート"]],
    ["5", "사일런스", ["医療タイプ", "遠距離", "治療", "エリート"]],
    ["5", "와파린", ["医療タイプ", "遠距離", "治療", "支援", "エリート"]],
    ["5", "레드", ["特殊タイプ", "近距離", "牽制", "高速再配置", "エリート"]],
    ["5", "맨티코어", ["特殊タイプ", "生存", "近距離", "火力", "エリート"]],
    ["5", "클리프하트", ["特殊タイプ", "火力", "近距離", "強制移動", "エリート"]],
    ["5", "에프이터", ["特殊タイプ", "減速", "近距離", "強制移動", "エリート"]],
    ["5", "프로방스", ["狙撃タイプ", "遠距離", "火力", "エリート"]],
    ["5", "블루포이즌", ["狙撃タイプ", "遠距離", "火力", "エリート"]],
    ["5", "파이어워치", ["狙撃タイプ", "遠距離", "火力", "爆発力", "エリート"]],
    ["5", "메테오라이트", ["狙撃タイプ", "遠距離", "範囲攻撃", "弱化", "エリート"]],
    ["5", "플래티넘", ["狙撃タイプ", "遠距離", "火力", "エリート"]],
    ["5", "프라마닉스", ["補助タイプ", "遠距離", "弱化", "エリート"]],
    ["5", "이스티나", ["補助タイプ", "遠距離", "減速", "火力", "エリート"]],
    ["5", "메이어", ["補助タイプ", "遠距離", "召喚", "牽制", "エリート"]],
    ["5", "스펙터", ["前衛タイプ", "近距離", "範囲攻撃", "生存", "エリート"]],
    ["5", "인드라", ["前衛タイプ", "近距離", "火力", "生存", "エリート"]],
    ["5", "니어", ["重装タイプ", "近距離", "防御", "治療", "エリート"]],
    ["5", "리스캄", ["重装タイプ", "近距離", "防御", "火力", "エリート"]],
    ["5", "벌컨", ["重装タイプ", "近距離", "火力", "防御", "生存", "エリート"]],
    ["5", "크루아상", ["重装タイプ", "近距離", "強制移動", "防御", "エリート"]],
    ["4", "스캐빈저", ["先鋒タイプ", "近距離", "COST回復", "火力"]],
    ["4", "비그나", ["先鋒タイプ", "近距離", "火力", "COST回復"]],
    ["4", "미르", ["医療タイプ", "遠距離", "治療"]],
    ["4", "퍼퓨머", ["医療タイプ", "遠距離", "治療"]],
    ["4", "헤이즈", ["術師タイプ", "弱化", "遠距離", "火力"]],
    ["4", "기타노", ["術師タイプ", "遠距離", "範囲攻撃"]],
    ["4", "그라벨", ["特殊タイプ", "近距離", "高速再配置", "防御"]],
    ["4", "로프", ["特殊タイプ", "近距離", "強制移動"]],
    ["4", "쇼", ["特殊タイプ", "近距離", "強制移動"]],
    ["4", "시라유키", ["狙撃タイプ", "遠距離", "範囲攻撃", "減速"]],
    ["4", "메테오", ["狙撃タイプ", "遠距離", "火力", "弱化"]],
    ["4", "제시카", ["狙撃タイプ", "遠距離", "火力", "生存"]],
    ["4", "어스스피릿", ["補助タイプ", "遠距離", "減速"]],
    ["4", "도베르만", ["前衛タイプ", "近距離", "支援", "火力"]],
    ["4", "에스텔", ["前衛タイプ", "近距離", "範囲攻撃", "生存"]],
    ["4", "무스", ["前衛タイプ", "近距離", "火力"]],
    ["4", "프로스트리프", ["前衛タイプ", "近距離", "減速", "火力"]],
    ["4", "마토이마루", ["前衛タイプ", "火力", "近距離", "生存"]],
    ["4", "쿠오라", ["重装タイプ", "近距離", "防御"]],
    ["4", "굼", ["重装タイプ", "近距離", "防御", "治療"]],
    ["4", "마터호른", ["重装タイプ", "近距離", "防御"]],
    ["3", "팽", ["뱅前衛タイプ", "近距離", "COST回復"]],
    ["3", "바닐라", ["뱅前衛タイプ", "近距離", "COST回復"]],
    ["3", "플룸", ["뱅前衛タイプ", "近距離", "火力", "COST回復"]],
    ["3", "히비스커스", ["医療タイプ", "遠距離", "治療"]],
    ["3", "안셀", ["医療タイプ", "遠距離", "治療"]],
    ["3", "라바", ["術師タイプ", "遠距離", "範囲攻撃"]],
    ["3", "스튜어드", ["術師タイプ", "遠距離", "火力"]],
    ["3", "크루스", ["狙撃タイプ", "遠距離", "火力"]],
    ["3", "아드나키엘", ["狙撃タイプ", "遠距離", "火力"]],
    ["3", "오키드", ["補助タイプ", "遠距離", "減速"]],
    ["3", "멜란사", ["前衛タイプ", "近距離", "火力", "生存"]],
    ["3", "비글", ["重装タイプ", "近距離", "防御"]],
    ["2", "야토", ["뱅前衛タイプ", "近距離", "初期"]],
    ["2", "듀린", ["術師タイプ", "遠距離", "初期"]],
    ["2", "12F", ["術師タイプ", "遠距離", "初期"]],
    ["2", "레인저", ["狙撃タイプ", "遠距離", "初期"]],
    ["2", "느와르", ["重装タイプ", "近距離", "初期"]],
    ["1", "Lancet-2", ["医療タイプ", "遠距離", "治療", "ロボット"]],
    ["1", "Castle-3", ["前衛タイプ", "近距離", "支援", "ロボット"]]
];
var resultArray = [];
var array1 = [[]];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];

/* default DB로 kr 적용*/
var combinationDB = combinationDBkr;
var languageList = ["jp", "kr"];
var combinationListDB = [];
/* tag 선택시 저장할 배열 */
var tagInput = [];
/* 태그를 몇 개 선택했는지 저장하는 변수 */
var tagInputCount = 0;

/* 언어선택 */
document.getElementById("kr").onclick = function() {
    for(i=0; i<combinationListDB.length; i++) {
        document.getElementById(combinationListDB[i]).remove();
    }
    combinationDB = combinationDBkr;
    document.getElementById("kr").style.fontWeight = "bold";
    document.getElementById("kr").style.opacity = "0.8";
    document.getElementById("jp").style.fontWeight = "400";
    document.getElementById("jp").style.opacity = "0.3";
    conditionArrayMaker();
    buttonMaker();
    refresh();
};
document.getElementById("jp").onclick = function() {
    for(i=0; i<combinationListDB.length; i++) {
        document.getElementById(combinationListDB[i]).remove();
    }
    combinationDB = combinationDBjp;
    document.getElementById("jp").style.fontWeight = "bold";
    document.getElementById("jp").style.opacity = "0.8";
    document.getElementById("kr").style.fontWeight = "400";
    document.getElementById("kr").style.opacity = "0.3";
    conditionArrayMaker();
    buttonMaker();
    refresh();
};

function languageSelecter() {
    for(i=0; i<languageList; i++) {
        document.getElementById(languageList[i]).onclick = function() {
            for(i=0; i<combinationListDB.length; i++) {
                document.getElementById(combinationListDB[i]).remove();
            }
            combinationDB = combinationDBkr; /* 동적변수명을 사용하여 지정할것  combinationDB + lagnuageList[i]*/
            document.getElementById(languageList[i]).style.fontWeight = "bold";
            document.getElementById(languageList[i]).style.opacity = "0.8";
            for(j=0; j<languageList; j++) {
                if(i != j ) {
                    document.getElementById(languageList[j]).style.fontWeight = "400";
                    document.getElementById(languageList[j]).style.opacity = "0.3";
                }
            }    
            conditionArrayMaker();
            buttonMaker();
            refresh();
        };
    }
}

/* make condition array 그리고 가나다순 정렬*/
function conditionArrayMaker() {
combinationListDB = [];
    for (i=0; i<combinationDB.length; i++) {
        for (j=0; j<combinationDB[i][2].length; j++) {
            if (combinationListDB.indexOf(combinationDB[i][2][j]) == -1) {
                combinationListDB.push(combinationDB[i][2][j]);
            }
        }
    }
    combinationListDB = combinationListDB.sort();
}
conditionArrayMaker();//801

/* 입력 태그 개수 추가 */
function inputListMaker(i) {
    if(tagInput.indexOf(i) == -1) {
        tagInput.push(i);
        tagInputCount += 1;
    } else {
        tagInput.splice(tagInput.indexOf(i), 1);
        tagInputCount -= 1;
    }
}

function tagInputCountChecker() {
    /* 입력 태그 개수가 5개가 되면 검색 함수 실행*/
    if(tagInputCount >= 1) {
        searchWithTags();
        document.getElementById("outputArea").style.visibility = "visible";
    } else {
        document.getElementById("outputArea").innerHTML = "";
        document.getElementById("outputArea").style.visibility = "hidden";
    }
    if(tagInputCount >= 1) {
        document.getElementById("refreshButton").style.display = "block";
    }
}

/* outputTextarea update */
function outputUpdate() {
    const parent = document.getElementsByClassName("tags")[0];
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for(i =0; i<tagInput.length; i++) {
        var inputSpan = document.createElement("button");
        inputSpan.className = "inputSpan";
        // inputSpan.id = taginput[i];
        inputSpan.innerHTML = tagInput[i] + "<span id=\"delete\"> X </span>";
        var tagBody = document.getElementsByClassName("tags")[0];
        tagBody.appendChild(inputSpan);
        inputSpan.addEventListener ("click", function () {
            document.getElementById("outputArea").style.visibility = "hidden";
            innerH = this.innerHTML.slice(0, -28);
            inputListMaker(innerH)
            tagInputCountChecker();
            outputUpdate();
            buttonStatusChanger();
            if(tagInputCount == 0) {
                refresh();
            }
        });
    }
    
}

/* 버튼 활성화, 비활성화 */
function buttonStatusChanger() {
    for(j=0; j<combinationListDB.length; j++) {
        buttonStyler();
    }
    for(i=0; i<tagInput.length; i++) {
        var lowestStar = 6;
        for(l in combinationDB) {
            if (combinationDB[l][2].indexOf(tagInput[i]) != -1) {
                if (combinationDB[l][0] < lowestStar) {
                    lowestStar = combinationDB[l][0];
                }
            }
        }
        document.getElementById(tagInput[i]).style.boxShadow = "none"
        document.getElementById(tagInput[i]).style.backgroundColor = "rgb(40, 40, 40)"
        switch(Number(lowestStar)) {
            case 1:
                document.getElementById(tagInput[i]).style.color = "#FFF";
                break;
            case 2:
                document.getElementById(tagInput[i]).style.color = "rgb(157, 255, 17)";
                break;
            case 3:
                document.getElementById(tagInput[i]).style.color = "rgb(86, 142, 255)"; 
                break;
            case 4:
                document.getElementById(tagInput[i]).style.color = "rgb(199, 90, 255)"; 
                break;
            case 5:
                document.getElementById(tagInput[i]).style.color = "rgb(255, 210, 17)";
                break;
            case 6:
                document.getElementById(tagInput[i]).style.color = "rgb(255, 78, 17)"; 
                break;
        }
    }
}
/* 버튼 만들기 */
function buttonMaker() {
    for (i=0; i<combinationListDB.length; i++) {
        /* combinationListDB의 요소를 id로 가진 버튼 만들기 */
        var tagButton = document.createElement("button");
        tagButton.innerHTML = combinationListDB[i];
        tagButton.id = combinationListDB[i];
        var body = document.getElementsByClassName("input")[0];
        body.appendChild(tagButton);
        var lowestStar = 6;
        for(l in combinationDB) {
            if (combinationDB[l][2].indexOf(combinationListDB[i]) != -1) {
                if (combinationDB[l][0] < lowestStar) {
                    lowestStar = combinationDB[l][0];
                }
            }
        }
        switch(Number(lowestStar)) {
            case 1:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #b5b5b5"
                document.getElementById(combinationListDB[i]).style.color = "#333"
                break;
            case 2:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(157, 255, 17)";
                document.getElementById(combinationListDB[i]).style.color = "#333"
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #26bf23" 
                break;
            case 3:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(86, 142, 255)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #0270c5" 
                document.getElementById(combinationListDB[i]).style.color = "#FFF"
                break;
            case 4:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(199, 90, 255)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #7e00b2" 
                document.getElementById(combinationListDB[i]).style.color = "#FFF"
                break;
            case 5:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(255, 210, 17)";
                document.getElementById(combinationListDB[i]).style.color = "#333"
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #c18f01" 
                break;
            case 6:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(255, 78, 17)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #7d2e00"
                document.getElementById(combinationListDB[i]).style.color = "#FFF" 
                break;
        }
        /* 해당 버튼 누를 시, tagInput에 push or splice 그리고 태그 변화 */
        tagButton.addEventListener ("click", function () {
            document.getElementById("outputArea").style.visibility = "hidden";
            inputListMaker(this.id);
            tagInputCountChecker();
            outputUpdate();
            buttonStyler();
            buttonStatusChanger();
            if(tagInputCount == 0) {
                refresh();
            }
        });
    }
}
buttonMaker();

function buttonStyler() {
    for(i in combinationListDB) {
        var lowestStar = 6;
        for(l in combinationDB) {
            if (combinationDB[l][2].indexOf(combinationListDB[i]) != -1) {
                if (combinationDB[l][0] < lowestStar) {
                    lowestStar = combinationDB[l][0];
                }
            }
        }
        switch(Number(lowestStar)) {
            case 1:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #b5b5b5"
                document.getElementById(combinationListDB[i]).style.color = "#333"
                break;
            case 2:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(157, 255, 17)";
                document.getElementById(combinationListDB[i]).style.color = "#333"
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #26bf23" 
                break;
            case 3:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(86, 142, 255)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #0270c5" 
                document.getElementById(combinationListDB[i]).style.color = "#FFF"
                break;
            case 4:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(199, 90, 255)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #7e00b2" 
                document.getElementById(combinationListDB[i]).style.color = "#FFF"
                break;
            case 5:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(255, 210, 17)";
                document.getElementById(combinationListDB[i]).style.color = "#333"
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #c18f01" 
                break;
            case 6:
                document.getElementById(combinationListDB[i]).style.backgroundColor = "rgb(255, 78, 17)";
                document.getElementById(combinationListDB[i]).style.boxShadow = "0 2px #7d2e00"
                document.getElementById(combinationListDB[i]).style.color = "#FFF" 
                break;
        }
    }
}


function refresh() {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    tagInput = [];
    tagInputCount = 0;
    buttonStatusChanger();
    outputUpdate();
    buttonStyler();
    var inputSpan = document.createElement("span");
    inputSpan.id = "placeholder";
    inputSpan.innerHTML = "상단에서 5개의 태그를 선택해주세요"; 
    var tagBody = document.getElementsByClassName("tags")[0];
    tagBody.appendChild(inputSpan);
    document.getElementById("outputArea").innerHTML = "";
    document.getElementById("outputArea").style.visibility = "hidden";
    document.getElementById("refreshButton").style.display = "none";
}

document.getElementById("refreshButton").onclick = function() {
    refresh();
};

// input 태그로 combinationDB와 비교 실행
function searchWithTags() {
    sameTagArray = [];
    resultArray = [];
    document.getElementById("outputArea").innerHTML = "";
    for (j in combinationDB) {
        var flag = 1;
        var tArray = [[], []];
        for (tag in tagInput) {
            var conditionArray = combinationDB[j];
            for (i=0; i<conditionArray[2].length; i++) {
                var charStar = conditionArray[0];
                var charName = conditionArray[1];
                var tagInDB = conditionArray[2][i];
                if (tagInDB == tagInput[tag]) {
                    if(sameTagArray.indexOf(tagInput[tag]) == -1) {
                        sameTagArray.push(tagInput[tag]);
                    }
                    if(flag) {
                        tArray[0].push(charStar);
                        tArray[0].push(charName);
                        tArray[1].push(tagInDB);
                        flag = 0;
                    } else {
                        tArray[1].push(tagInDB)
                    }
                }
            }
        }
        if(!flag) {
            if(!(tArray[0][0] == 6 && tArray[1].indexOf("고급특별채용") == -1)) {
                resultArray.push(tArray);
            }
        }
    }
    var mixArray = [];
    switch(sameTagArray.length) {
        case 5:
            for(g = 0; g < sameTagArray.length-4; g++) {
                for(h = g+1; h < sameTagArray.length-3; h++) {
                    for (k = h+1; k < sameTagArray.length-2; k++) {
                        for (i = k+1; i < sameTagArray.length-1; i++) {
                            for (j = i+1; j < sameTagArray.length; j++) {
                                var buffer = [[]];
                                buffer[0].push(sameTagArray[g]);
                                buffer[0].push(sameTagArray[h]);
                                buffer[0].push(sameTagArray[k]);
                                buffer[0].push(sameTagArray[i]);
                                buffer[0].push(sameTagArray[j]);
                                mixArray.push(buffer[0]);
                            }
                        }
                    }
                }    
            }
        case 4:
            for(h = 0; h < sameTagArray.length-3; h++) {
                for (k = h+1; k < sameTagArray.length-2; k++) {
                    for (i = k+1; i < sameTagArray.length-1; i++) {
                        for (j = i+1; j < sameTagArray.length; j++) {
                            var buffer = [[]];
                            buffer[0].push(sameTagArray[h]);
                            buffer[0].push(sameTagArray[k]);
                            buffer[0].push(sameTagArray[i]);
                            buffer[0].push(sameTagArray[j]);
                            mixArray.push(buffer[0]);
                        }
                    }
                }
            } 
        case 3:
            for (k = 0; k < sameTagArray.length-2; k++) {
                for (i = k+1; i < sameTagArray.length-1; i++) {
                    for (j = i+1; j < sameTagArray.length; j++) {
                        var buffer = [[]];
                        buffer[0].push(sameTagArray[k]);
                        buffer[0].push(sameTagArray[i]);
                        buffer[0].push(sameTagArray[j]);
                        mixArray.push(buffer[0]);
                    }
                }
            }
        case 2:
            for (i = 0; i < sameTagArray.length-1; i++) {
                for (j = i+1; j < sameTagArray.length; j++) {
                    var buffer = [[]];
                    buffer[0].push(sameTagArray[i]);
                    buffer[0].push(sameTagArray[j]);
                    mixArray.push(buffer[0]);
                }
            }
        case 1:
            //1
            for (i in sameTagArray) {
                var buffer = [[]];
                buffer[0].push(sameTagArray[i]);
                mixArray.push(buffer[0]);
            }
        case 0:
            //쟌넨
    }
    var mixArray3 = [];
    for(i in mixArray) {
        var flag2 = 0;
        var buffer = [[]];
        var mixArray2 = [[]];
        for(j in resultArray) {
            for(l in mixArray[i]) {
                if(resultArray[j][1].indexOf(mixArray[i][l]) == -1) {
                    break;
                }
                if(mixArray[i].length == Number(l)+1) {
                    buffer[0].push(resultArray[j][0][1]);
                    flag2 += 1;
                } 
            }
        }
        if(flag2) {
            mixArray2[0].push(mixArray[i]);

            //buffer[0]을 캐릭터 등급으로 분리

            mixArray2[0].push(buffer[0]);
            mixArray3.push(mixArray2[0]);
        }

    }
    makeOutputDiv(mixArray3);
}

function charStar(charName) {
    for(z in combinationDB) {
        if(combinationDB[z][1] == charName) {
            return combinationDB[z][0];
        }
    } 
}

function makeOutputDiv(array) {
    for(i in array) {
        var arrayIndex = i;

        /* 껍데기 만들기*/
        var outputDiv = document.createElement("div");
        outputDiv.className = "outputDiv" + arrayIndex;
        outputDiv.style.display = "flex";
        outputDiv.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        outputDiv.style.borderRadius = "11px";
        outputDiv.style.paddingTop = "12px";
        outputDiv.style.paddingBottom = "12px";
        outputDiv.style.flexDirection = "column";
        outputDiv.style.textAlign = "left";
        outputDiv.style.paddingLeft = "15px";
        outputDiv.style.paddingRight = "15px";
        outputDiv.style.marginBottom = "12px";
        var body = document.getElementById("outputArea");
        body.appendChild(outputDiv);

        var CondDiv = document.createElement("div");
        CondDiv.className = "CondDiv" + arrayIndex;
        var body = document.getElementsByClassName("outputDiv" + arrayIndex)[0];
        body.appendChild(CondDiv);

        var CondResultDiv = document.createElement("div");
        CondResultDiv.className = "CondResultDiv" + arrayIndex;
        CondResultDiv.style.display = "flex";
        CondResultDiv.style.flexWrap = "wrap";
        var body = document.getElementsByClassName("outputDiv" + arrayIndex)[0];
        body.appendChild(CondResultDiv);


        /* 조건(제목) 넣어주기 */
        for(j=0; j<array[i][0].length; j++) {
            var outputCond = document.createElement("span");
            outputCond.className = ("outputCond" + arrayIndex);
            outputCond.innerHTML = array[i][0][j];
            outputCond.style.paddingRight = "8px";
            outputCond.style.opacity = "0.6";
            var body = document.getElementsByClassName("CondDiv" + arrayIndex)[0];
            body.appendChild(outputCond);
        }

        /* 결과(내용) 넣어주기 */
        for(j=0; j<array[i][1].length; j++) {
            var outputResult = document.createElement("span");
            outputResult.className = ("outputResult" + arrayIndex);
            outputResult.innerHTML = array[i][1][j];
            var charStar2 = charStar(array[i][1][j]);
            switch(Number(charStar2)) {
                case 1:
                    outputResult.style.color = "rgb(255, 255, 255)";
                    break;
                case 2:
                    outputResult.style.color = "rgb(157, 255, 17)";
                    break;
                case 3:
                    outputResult.style.color = "rgb(86, 142, 255)";
                    break;
                case 4:
                    outputResult.style.color = "rgb(199, 90, 255)";
                    break;
                case 5:
                    outputResult.style.color = "rgb(255, 210, 17)";
                    break;
                case 6:
                    outputResult.style.color = "rgb(255, 78, 17)";
                    break;
            }
            outputResult.style.fontSize = "17px";
            outputResult.style.fontWeight = "bold";
            outputResult.style.paddingRight = "8px";
            var body = document.getElementsByClassName("CondResultDiv" + arrayIndex)[0];
            body.appendChild(outputResult);
        }
    }
}
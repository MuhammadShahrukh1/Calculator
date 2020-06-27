function getnum(num) {
    var result = document.getElementById('result')
    result.value += num
}
function clearone(){
    var result = document.getElementById('result')
    result.value = (result.value).slice(0, (result.value).length - 1)
}
function clearall(){
    var result = document.getElementById('result')
    result.value = ''
}
function compute() {
    var getresult = document.getElementById('result')
    result.value = eval(getresult.value)
}
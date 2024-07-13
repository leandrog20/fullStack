function show(){
    let element = document.querySelector("#name")
    let phone = document.getElementsByName("phone")
    console.log(element.value)
    console.log(phone[0].value)
    console.log(phone[1].value)
}
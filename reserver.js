window.onload = function () {
    let btn = document.querySelector(".btn")
    let box = document.querySelector(".reserver-container")
    const over = document.getElementById('over');
    btn.addEventListener("click", function () {
        box.classList.remove("reserverno");
        over.classList.add("active");
    })
    over.addEventListener("click", function () {
        box.classList.add("reserverno");
        over.classList.remove("active");
    })

    let btngo = document.querySelector(".reserver-btn");
    let name = document.querySelector(".name");
    let phone = document.querySelector(".phone");
    let em = document.querySelector(".em");
    let phone2 = document.querySelector(".phone2");
    let animal = document.querySelector(".ptname");
    let pbreed = document.querySelector(".pbreed");
    let ptage = document.querySelector(".ptage");
    let input = document.querySelector(".disease-input")
    let input2 =document.querySelector(".disease-input2");
    let date = document.querySelector(".date");
    let checkbox = document.querySelector(".checkbox");

    btngo.addEventListener("click", function () {
        
        const namePattern = /^[A-Za-z\u4e00-\u9fa5]+$/; //只能輸入中文或英文
        if (name.value.trim() === "" || !namePattern.test(name.value)) {
            alert("請輸入全名");
            return false;
        }

        if (phone.value === "" || phone.value.length <10 || !/^\d+$/.test(phone.value)) {
            alert("請輸入正確的電話號碼（至少 10 位數，且只能是數字）");//.test用正則表達式去測試字串是否符合規則
            return false;
        }
        if (em.value === "" || !em.value.includes("@")) {
            alert("請輸入正確的電子郵件格式(包含@)");
            return false;
        }

        // if (phone2.value === "" || phone2.value.length < 10 || !/^\d+$/.test(phone.value)) {
        //     alert("請輸入正確的電話號碼（至少 10 位數，且只能是數字）");
        //     return false;
        // }
        
        if(animal.value.trim() ===""){
            alert("請輸入寵物名字");
            return false;
        }
        
        // const breedPattern = /^[A-Za-z\u4e00-\u9fa5]+$/; 
         const breedPattern =/^[\p{Script=Han}]+$/u;
        if(pbreed.value.trim() ==="" || !breedPattern.test(pbreed.value)){
            alert("請輸入寵物品種");
        return false;
        }
        

        if(ptage.value.trim()==="" || !/^\d+$/.test(ptage.value) ){
            alert("請輸入寵物年齡");
        return false;
        }


        if(input.value.trim()===""){
            alert("假如沒有重大疾病請輸入無");
            return false;
        }

        if(input2.value.trim()===""){
            alert("假如沒有服用慢性藥物請輸入無");
            return false;
        }
        
        //alert(date.value);

        if(date.value ===""){
            alert("請選擇想預約的日期");
            return false;
        }

        if(!checkbox.checked){
            alert("提醒事項閱讀完請打勾");
            return false;  
        } 
          // ✅ 驗證全部通過後才執行
    box.classList.add("reserverno");
    alert("表單已送出")
    // 清空所有欄位
    name.value = "";
    phone.value = "";
    em.value = "";
    phone2.value = "";
    animal.value = "";
    pbreed.value = "";
    ptage.value = "";
    input.value = "";
    input2.value = "";
    date.value = "";
    checkbox.checked = false;
    return true;
    });
    
}
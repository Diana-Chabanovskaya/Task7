let question_arr = ["Каков объем мозга у современных людей?","Назовите жанр произведения М.Ю. Лермонтова Герой нашего времени","В каком слове на месте пропуска не пишется Ь?","Как М.Ю. Лермонтов называет поэта в стихотворении \"Смерть поэта\"?","Какой залив Северной Америки моряки называют \"мешок со льдом\"?"]
let a1_arr = ["900 см3","Трагедия","Невтерпёж..","Бедняга","Гудзонов"]
let a2_arr = ["1100 см3","Поэма","Наотмаш..","Несчастный гений","Аляскинский"]
let a3_arr = ["1600 см3","Повесть","Настеж..","Невольник чести","Мексиканский"]
let a4_arr = ["2400 см3","Роман","Вскач..","Великий талант","Калифорнийский"]
let answer_arr = ["1600 см3","Роман","Невтерпёж","Невольник чести","Гудзонов"]
let n_right_answer_arr = [3,4,1,3,1]
let n_right_answer = 1;
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    console.log(y4.checked);

    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    console.log(n_a);

    if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
    }
    else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }
}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question)
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];

    n_right_answer =n_right_answer_arr[n_question.value];

}
const commentButton = document.querySelectorAll('.commentButton')
const commentContainer = document.querySelectorAll('.commentContainer')
const commentInput = document.querySelectorAll('.commentInput')

//--------------------댓글 구현-------------------//
commentButton.forEach((btn,idx)=>btn.addEventListener('click', () => commentAdd(idx)))

commentInput.forEach((input,idx)=>input.addEventListener('keyup', (key) => {
    if (key.key === 'Enter') commentAdd(idx)
    commentButtonStyle(idx)
}))

function commentButtonStyle(idx){
    if (commentInput[idx].value.length>0) {
        console.log(commentInput[idx].value.length,'true')
        commentButton[idx].style.color = '#0095F6'
        commentButton[idx].style.fontWeight = 'bold'
    } else{
        console.log(commentInput[idx].value.length,'false')
        commentButton[idx].style='';
    }
}

function commentAdd(idx) {
    if(commentInput[idx].value=='') return;
    const commentBoxDiv = document.createElement('div')
    const commentDiv = document.createElement('div')
    const userNameSpan = document.createElement('span')
    const meEngName = document.querySelector(".meEngName")
    const imgTag = document.createElement('img')

    commentBoxDiv.classList.add('commentBox')
    commentDiv.classList.add('comment')
    userNameSpan.classList.add('userName')
    imgTag.src = './img/heart.png'
    userNameSpan.innerText = meEngName.innerText

    commentDiv.appendChild(userNameSpan)
    commentBoxDiv.appendChild(commentDiv)
    commentBoxDiv.appendChild(imgTag)

    commentDiv.innerHTML += commentInput[idx].value
    commentContainer[idx].appendChild(commentBoxDiv);
    commentInput[idx].value = '';

    commentButtonStyle(idx)
    /* 함수가 실행되면 아래와 같은 폼이 됨
    <div class="commentBox">
        <div class="comment">
            <span class="userName">${meEngName}</span>${commentInput.value}
        </div>
        <img src="./img/heart.png">
    </div> 
    */
}

















////여기 부터 수정ss
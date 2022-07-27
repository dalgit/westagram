const commentButton = document.querySelectorAll('.commentButton')
const commentContainer = document.querySelectorAll('.commentContainer')
const commentInput = document.querySelectorAll('.commentInput')[0]

//--------------------댓글 구현-------------------//
commentButton[0].addEventListener('click', commentAdd);

commentInput.addEventListener('keyup', (key) => {
    if (key.key === 'Enter') commentAdd()
    commentButtonStyle()
})

function commentButtonStyle(){
    if (commentInput.value>1) {
        commentButton[0].style.color = '#0095F6'
        commentButton[0].style.fontWeight = 'bold'
    } else{
        commentButton[0].style='';
        console.log(commentButton[0])
    }
}


function commentAdd() {
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

    commentDiv.innerHTML += commentInput.value
    commentContainer[0].appendChild(commentBoxDiv);
    commentInput.value = '';

    commentButtonStyle()
    /* 함수가 실행되면 아래와 같은 폼이 됨
    <div class="commentBox">
        <div class="comment">
            <span class="userName">${meEngName}</span>${commentInput.value}
        </div>
        <img src="./img/heart.png">
    </div> 
    */
}

















////여기 부터 수정 임미다.
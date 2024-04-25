//import { ChatGPTToLogseq } from './chatgpt_to_logseq.js';

document.getElementById('button').addEventListener('click', function(){
    let text_input = document.getElementById('text1');
    let text_output = document.getElementById('text2');
    text_output.value = ChatGPTToLogseq(text_input.value);
});

function ChatGPTToLogseq(text) {

    text = text.replace(/\\\[([\s\S]*?)\\\]/g, function(match, p1) { // 匹配单行公式
        return '$$' + p1.trim() + '$$'; 
    });
    text = text.replace(/^( *)- /gm, '$1  - '); // 在别的添加 - 操作之前
    text = text.replace(/^### \d+\. ?(.*)/gm, '- ### $1 \nlogseq.order-list-type:: number');
    text = text.replace(/^### (.*)/gm, '- ### $1');
    text = text.replace(/^( *)\d+\. ?(.*)/gm, '$1  - $2\nlogseq.order-list-type:: number');
    
    //替换所有代码块，删除空白行后再替换回来
    let codeMap = {};
    let codeIndex = 0;
    text = text.replace(/```([\s\S]*?)```/g, function(match, p1) {
        codeMap[codeIndex] = p1;
        return '```' + codeIndex++ + '```';
    });
    text = text.replace(/\n\s*\n( *- )?/g, function(match, p1) {
        if(match.match(/- $/)){
            return '\n'+ p1;
        }
        else{
            return '\n- ';
        }
    });
    text = text.replace(/```(\d+)```/g, function(match, p1) {
        return '```' + codeMap[p1] + '```';
    });
    return text;
}

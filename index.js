//import { ChatGPTToLogseq } from './chatgpt_to_logseq.js';

document.getElementById('button').addEventListener('click', function(){
    let text_input = document.getElementById('text1');
    let text_output = document.getElementById('text2');
    text_output.value = ChatGPTToLogseq(text_input.value);
});

function ChatGPTToLogseq(text) {

    text = text.replace(/\\\[([\s\S]*?)\\\]/g, function(match, p1) {
        return '$$' + p1.trim() + '$$'; // 使用函数替换以确保正确处理特殊字符
    });
    text = text.replace(/^( *)- /gm, '$1  - ');
    text = text.replace(/^### ?\d\. ?(.*)/gm, '- ### $1 \nlogseq.order-list-type:: number');
    text = text.replace(/^### (.*)/gm, '- ### $1');
    text = text.replace(/^( *)\d+\. ?(.*)/gm, '$1  - $2\nlogseq.order-list-type:: number');
    
    //替换所有代码块，删除空白后再替换回来
    let codeMap = {};
    let codeIndex = 0;
    text = text.replace(/```([\s\S]*?)```/g, function(match, p1) {
        codeMap[codeIndex] = p1;
        return '```' + codeIndex++ + '```';
    });
    text = text.replace(/\n\n/g, '\n');
    text = text.replace(/```(\d+)```/g, function(match, p1) {
        return '```' + codeMap[p1] + '```';
    });
    
    return text;
    // text = text.replace(/\n\n/g, '\n');
    // let lines = text.split('\n');
    // let output = '';
    // for(let i=0; i<lines.length; i++) {
    //     if(lines[i].match(/^#/)) // 匹配标题
    //     {
    //         if(lines[i].match(/^### \d+\./)) // 匹配有序列表
    //         {
    //             lines[i] = lines[i].replace(/^### (\d+\.) /, '### ');
    //             lines[i] = lines[i] + '\n' + 'logseq.order-list-type:: number';
    //         }
    //         lines[i] = '- ' + lines[i];
    //     }
    //     else if(lines[i].match(/^\d+\./)) // 匹配有序列表
    //     {
    //         lines[i] = lines[i].replace(/^\d+\. /, '');
    //         lines[i] = '    - ' + lines[i] + '\n' + 'logseq.order-list-type:: number';
    //     }
    //     else if (lines[i].match(/^- /)) // 匹配无序列表
    //     {
    //         lines[i] = lines[i].replace(/^- /, '    - ');
    //     }

    //     if(lines[i].trim() !== '')
    //     {
    //         if(i == lines.length - 1 && !lines[i].match(/^- /))
    //             output += '- ' + lines[i] + '\n';
    //         else
    //             output += lines[i] + '\n';
    //     }
    // }
    // return output;
}

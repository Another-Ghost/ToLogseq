//import { ChatGPTToLogseq } from './chatgpt_to_logseq.js';

document.getElementById('button').addEventListener('click', function(){
    let text_input = document.getElementById('text1');
    let text_output = document.getElementById('text2');
    text_output.value = ChatGPTToLogseq(text_input.value);
});

function ChatGPTToLogseq(text) {
        
    let lines = text.split('\n');
    text = text.replace(/\n\n/g, '\n');
    let output = '';
    //let bNewBlock = false;
    //let bCode = false;
    for(let i=0; i<lines.length; i++) {
        // if(!bCode){
        //     if(lines[i].includes('```'))
        //     {
        //         bCode = !bCode;
        //     }
        if(lines[i].match(/^#/))
        {
            if(lines[i].match(/^### \d\./))
            {
                lines[i] = lines[i].replace(/^### (\d\.) /, '### ');
                lines[i] = lines[i] + '\n' + 'logseq.order-list-type:: number';
            }
            lines[i] = '- ' + lines[i];
        }
        else if(lines[i].match(/^\d+\./))
        {
            lines[i] = lines[i].replace(/^\d+\. /, '');
            lines[i] = '    - ' + lines[i] + '\n' + 'logseq.order-list-type:: number';
        }
        else if (lines[i].match(/^- /))
        {
            lines[i] = lines[i].replace(/^- /, '    - ');
        }
        // else if(bNewBlock)
        // {
        //     lines[i] = '    - ' + lines[i];
        //     bNewBlock = false;
        // }

        if(lines[i].trim().match(/^\\\[/) && lines[i].trim().match(/\\\]$/))
        {
            lines[i] = lines[i].trim().replace(/^\\\[ ?/, "$$$").replace(/\\\] ?$/, "$$$");
        }
        else if(lines[i].trim().match(/^\\\(/) && lines[i].trim().match(/\\\)$/))
        {
            lines[i] = lines[i].trim().replace(/^\\\(/, "$$").replace(/\\\)$/, "$$");
        }

        if(lines[i].trim() !== '')
        {
            if(i == lines.length - 1 && !lines[i].match(/^- /))
                output += '- ' + lines[i] + '\n';
            else
                output += lines[i] + '\n';
        }
        // else
        // {
        //     bNewBlock = true;
        // }
        // }
        // else{
        //     output += lines[i] + '\n';
        // }
    }
    //output += "- " + lines[lines.length - 1] + '\n';
    return output;
}

document.getElementById('button').addEventListener('click', function(){
    let text_input = document.getElementById('text1');
    let text_output = document.getElementById('text2');
    text_output.value = ChatGPTToLogseq(text_input.value);
});

function ChatGPTToLogseq(text) {
    let lines = text.split('\n');
    let output = '';
    for(let i=0; i<lines.length; i++) {
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
        if(lines[i].trim().match(/^\\\(/) && lines[i].trim().match(/\\\)$/))
        {
            lines[i] = lines[i].trim().replace(/^\\\(/, '$$').replace(/\\\)$/, '$$');
        }
        if(lines[i].trim() !== '')
        {
            output += lines[i] + '\n';
        }
    }
    return output;
}
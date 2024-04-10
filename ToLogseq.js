// ==UserScript==
// @name         ToLogseq Format Converter for ChatGPT
// @name:zh-CN   ToLogseq Markdown格式转换器 for ChatGPT
// @namespace    http://tampermonkey.net/
// @version      0.1.11
// @description  Convert markdown text to Logseq formatted Markdown text, which is available for ChatGPT and other similar tools using md format.
// @description:zh-cn 将 Markdown 文本转换为 Logseq 格式的 Markdown 文本，可用于 ChatGPT 和其他使用 md 格式的类似工具。
// @author       Another_Ghost
// @match        https://*chat.openai.com/*
// @icon         https://img.icons8.com/?size=50&id=1759&format=png
// @grant         GM_registerMenuCommand
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/491986/ToLogseq%20Format%20Converter%20for%20ChatGPT.user.js
// @updateURL https://update.greasyfork.org/scripts/491986/ToLogseq%20Format%20Converter%20for%20ChatGPT.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // Create the button element
    const button = document.createElement('button');
    button.textContent = 'ToLogseq'; // Text displayed on the button
    button.style.position = 'fixed'; // Make button position fixed
    button.style.bottom = '95px';    // Distance from the bottom of the viewport
    button.style.right = '20px';     // Distance from the right of the viewport
    button.style.zIndex = '1000';    // Ensure the button is on top of other elements

    // Button click event
    button.onclick = ConvertCopy;

    // Append the button to the page
    document.body.appendChild(button);

    async function ConvertCopy() {
        try {
            let mark = "<!--Converted by ToLogseq-->";
            const clipboardText = await navigator.clipboard.readText(); // Read text from clipboard
            if(clipboardText.includes(mark))
            {
                showAlert('Already converted to Logseq!', 'orange');
            }
            else
            {
                let newText = ChatGPTToLogseq(clipboardText);
                newText = newText + "<!--Converted by ToLogseq-->";
                await navigator.clipboard.writeText(newText); // Write new text back to clipboard
                showAlert('Converted to Logseq!');
            }
        } catch (err) {
            console.error('Error converting to logseq:', err);
            showAlert('Failed to access clipboard', 'lightcoral');
        }
    }

    function showAlert(message, backgroundColor = 'lightgreen') {
        const alertBox = document.createElement('div');
        alertBox.textContent = message;
        alertBox.style.position = 'fixed';
        alertBox.style.bottom = '130px';
        alertBox.style.right = '20px';
        alertBox.style.backgroundColor = backgroundColor;
        alertBox.style.padding = '10px';
        alertBox.style.borderRadius = '5px';
        alertBox.style.zIndex = '1001';

        document.body.appendChild(alertBox);

        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 3000); // Alert box will disappear after 3 seconds
    }
})();

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
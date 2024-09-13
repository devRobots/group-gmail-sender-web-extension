import "../components/trigger/Switch.css"
import { createRoot } from 'react-dom/client';
import SwitchExtension from '../components/trigger/Switch';
import { GroupHeader, GroupTable } from '../components/group/Sender';

function waitForElements(selector) {
    return new Promise(resolve => {
        if (document.querySelectorAll(selector).length != 0) {
            return resolve(document.querySelectorAll(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelectorAll(selector).length != 0) {
                observer.disconnect();
                resolve(document.querySelectorAll(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElements('.nM').then($mainBox => {
    let $toggleBox = document.createElement('div');
    $toggleBox.className = 'aAw fix space';

    const root = createRoot($toggleBox);
    root.render(SwitchExtension());

    $mainBox[0].prepend($toggleBox);
});

waitForElements('div.Cp > div > table > tbody > tr').then(_ => {
    let $sections = document.querySelectorAll('div.ae4.aDM > div.Cp');

    $sections.forEach($section => {
        let items = new Map();
        let $items = $section.querySelectorAll('div > table > tbody > tr');

        $items.forEach($email => {
            let $emailInfo = $email.querySelector('span.zF')
            $emailInfo = $emailInfo ?? $email.querySelector('span.yP')

            let senderEmail = $emailInfo.getAttribute('email');
            let senderName = $emailInfo.getAttribute('name');

            if (items.has(senderEmail)) {
                let item = items.get(senderEmail);
                item.count++;
                item.elements.push($email);
                items.set(senderEmail, item);
            } else {
                items.set(senderEmail, {
                    elements: [$email],
                    sender: senderName,
                    count: 1
                });
            }
        });

        $section.innerHTML = '';
        items.forEach(item => {
            let $emailHeader = document.createElement('div');
            const header = createRoot($emailHeader);
            header.render(GroupHeader({ sender: item.sender, count: item.count }));
            $section.appendChild($emailHeader);

            let $emailList = document.createElement('div');
            const list = createRoot($emailList);
            list.render(GroupTable({ items: item.elements }));
            $section.appendChild($emailList);
        });
    });
})
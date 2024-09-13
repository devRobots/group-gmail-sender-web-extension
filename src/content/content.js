import "../components/trigger/Switch.css"
import { createRoot } from 'react-dom/client';
import SwitchExtension from '../components/trigger/Switch';

function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElement('.nM').then($mainBox => {
    let $toggleBox = document.createElement('div');
    $toggleBox.className = 'aAw fix space';

    const root = createRoot($toggleBox);
    root.render(SwitchExtension());

    $mainBox.prepend($toggleBox);
});
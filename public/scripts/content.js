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

function addSwitch() {
    let $title = document.createElement('span');
    $title.className = "aAv";
    $title.innerText = "📑 Group Senders";

    let $switch = document.createElement('input');
    $switch.type = "checkbox";
    $switch.id = "switch";
    $switch.checked = true;
    $switch.addEventListener('change', () => {

    });

    let $menuBox = document.createElement('div');
    $menuBox.className = "aAw";
    $menuBox.appendChild($title);
    $menuBox.appendChild($switch);

    waitForElement('.nM').then($mainBox => {
        $mainBox.prepend($menuBox);
    });
}

addSwitch();
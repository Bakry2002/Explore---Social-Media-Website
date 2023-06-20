// Side bar 
const menuItems = document.querySelectorAll('.menu-item');

//messages 
const messagesnotification = document.querySelector('#messages-notifications');
const messagesBox = document.querySelector('.messages');
const message = messagesBox.querySelectorAll('.message');
const messageSearch = document.querySelector('#meassage-search');

// Theme Customization
const root = document.querySelector(':root'); 
const main = document.querySelector('.main');
const themeItem = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span'); 
const colors = document.querySelectorAll('.choose-color span'); 
const bgColor = document.querySelectorAll('.choose-bg div') 


// Remove active class 
function removeActive() {
    menuItems.forEach((item) => {
        item.classList.remove('active');
    })
}

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = "none";
        } else {
            document.querySelector('.notifications-popup').
                style.display = "block";
            document.querySelector('.notification-count').
                style.display = 'none';
        }
    })
})

// ----------- Messages ----------- //

// trigger when releasing a key in the input field 
messageSearch.addEventListener('keyup', searchMessage);

// Search meassge function
function searchMessage() {
    const inputValue = messageSearch.value.toLowerCase();
    message.forEach((user) => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(inputValue) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })

}

// highlight the messages container when the message button is clicked 
messagesnotification.addEventListener('click', () => {
    messagesBox.style.boxShadow = '0 0 1rem var(--primary-clr)';
    document.querySelector('#messages-notifications .notification-count').
        style.display = 'none';
    setTimeout(() => {
        messagesBox.style.boxShadow = 'none';
    }, 1000);
})

// -------------- Theme Customization -------------- 

// Open Theme model
function openThemeModel() {
    themeModel.style.display = 'grid';
}

// Close the theme model
const closeThemeModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        e.target.style.display = 'none'; 
        document.querySelector('#theme').classList.remove('active'); 
    }
}

themeModel.addEventListener('click', closeThemeModel)
themeItem.addEventListener('click', openThemeModel)


// ----------- Font size Customize ----------- //

// Remove size Selector 
function removeSizeSelector () {
    fontSizes.forEach((size) => {
        size.classList.remove('active');
    })
} 

fontSizes.forEach((size) => {
    size.addEventListener('click' , ()=> {
        removeSizeSelector() ;

        let fontSize ; 

        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px'; 
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px'; 
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px'; 
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px'; 
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px'; 
            root.style.setProperty('--sticky-top-left', '-10rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }

        // Change the main html size 
        document.querySelector('html').style.fontSize = fontSize ;
    })

})

// ----------- Color Customize ----------- //

// Remove size Selector 
function removeColorSelector () {
    colors.forEach((color) => {
        color.classList.remove('active');
    })
} 
colors.forEach((color) => {
    color.addEventListener('click', () => {
        removeColorSelector(); 
        let primary; 
        color.classList.toggle('active');
        
        if (color.classList.contains('color-1')) {
            primary = '#6b4ce6'
        }
        else if (color.classList.contains('color-2')) {
            primary = '#e6d14c'
        }
        else if (color.classList.contains('color-3')) {
            primary = '#e64c61'
        }
        else if (color.classList.contains('color-4')) {
            primary = '#4ce69e'
        }
        else if (color.classList.contains('color-5')) {
            primary = '#4cade6'
        }

        root.style.setProperty('--primary-clr', primary) ;
    })
})

// ----------- Background color Customize ----------- //

// Remove size Selector 
function removeBgColorSelector () {
    bgColor.forEach((bgcolor) => {
        bgcolor.classList.remove('active');
    })
} 

bgColor.forEach((bgcolor) => {
    bgcolor.addEventListener('click', () => {
        removeBgColorSelector(); 

        let bgClr ;

        bgcolor.classList.toggle('active');
        
        if (bgcolor.classList.contains('bg-1')) {
            bgClr = '#f0eef6' ;
        }
        else if (bgcolor.classList.contains('bg-2')) {
            bgClr = "#241e38"
        }
        else if (bgcolor.classList.contains('bg-3')) {
            bgClr = "#000"; 
        }

        main.style.backgroundColor = bgClr; 
    })
})



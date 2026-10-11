const start_button = document.getElementById('start_button');
const inserting_time_session = document.getElementById('inserting_time_session');
const didnt_filled_in_all_things_dialog = document.getElementById('didnt_filled_in_all_things_dialog')
const actual_session = document.getElementById('actual_session');
const back_button = document.getElementById('back_button');
const back_button1 = document.getElementById('back_button1');
const showing_start_hr = document.getElementById('showing_start_hr');
const showing_start_min = document.getElementById('showing_start_min');
const showing_end_hr = document.getElementById('showing_end_hr');
const showing_end_min = document.getElementById('showing_end_min');
const subject_name_display = document.getElementById('subject_name_display');
const subject_name = document.getElementById('subject_name');
const invalid_time = document.getElementById('invalid_time');
const fullscreen_button = document.getElementById('fullscreen_button');
const fullscreen_icon = document.getElementById('fullscreen');
const fullscreen_exit = document.getElementById('fullscreen_exit');
const universal_button_nonmd = document.getElementById('universal_button_nonmd');
const fullscreen_icon1 = document.getElementById('fullscreen1');
const fullscreen_exit1 = document.getElementById('fullscreen_exit1');
const start_button_nonmd = document.getElementById('start_button_nonmd');
const subject_input_nonmd = document.getElementById('subject_input_nonmd');
const subject_input_nonmd_area = document.getElementById('subject_input_nonmd_area');


actual_session.style.display = 'none';
start_button_nonmd.style.display = 'none';
fullscreen_exit.style.display = 'none';
fullscreen_exit1.style.display = 'none';
back_button1.style.display = 'none';

window.addEventListener('resize', page_scale_toggling);
window.addEventListener('load', page_scale_toggling);

function fullscreen_toggling() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreen_icon.style.display = 'none';
        fullscreen_exit.style.display = 'block';
        fullscreen_icon1.style.display = 'none';
        fullscreen_exit1.style.display = 'block';
    } else {
        document.exitFullscreen();
        fullscreen_icon.style.display = 'block';
        fullscreen_exit.style.display = 'none';
        fullscreen_icon1.style.display = 'block';
        fullscreen_exit1.style.display = 'none';
    }
}

function backing() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        fullscreen_icon.style.display = 'block';
        fullscreen_exit.style.display = 'none';
    }

    inserting_time_session.style.display = 'block';
    actual_session.style.display = 'none';
}

function page_scale_toggling() {
    let base_width = 1920;
    let detected_width = window.innerWidth;
    const for_scaling = document.getElementById('for_scaling');
    let scale_to_be_set = detected_width / base_width;
    
    if (scale_to_be_set > 1) {
        scale_to_be_set = 1;
    } else if (scale_to_be_set < 0.5) {
        scale_to_be_set = 0.5;
    };

    if (for_scaling) {
        for_scaling.style.transform = `scale(${scale_to_be_set})`;
    }

};

fullscreen_button.addEventListener('click', () => {
    fullscreen_toggling()
})

universal_button_nonmd.addEventListener('click', () => {
    fullscreen_toggling()
})

start_button.addEventListener('click', (event) => {
    event.preventDefault();

    console.log("Button Clicked")

    let start_hr = document.getElementById('start_hr');
    let start_min = document.getElementById('start_min');
    let end_hr = document.getElementById('end_hr');
    let end_min = document.getElementById('end_min');

    subject_name_display.textContent = subject_name.value
    showing_start_hr.textContent = start_hr.value;
    showing_start_min.textContent = start_min.value;
    showing_end_hr.textContent = end_hr.value;
    showing_end_min.textContent = end_min.value;

    let entered_all_items = true;
    let time_error = false;

    if (start_hr.value.trim() == '') {
        entered_all_items = false;
    } else if (start_hr.value.trim() > 24 || start_hr.value.trim() < 0) {
        time_error = true;
    };

    if (start_min.value.trim() == '') {
        entered_all_items = false;
    } else if (start_min.value.trim() > 60 || start_min.value.trim() < 0) {
        time_error = true;
    };

    if (end_hr.value.trim() == '') {
        entered_all_items = false;
    } else if (end_hr.value.trim() > 24 || end_hr.value.trim() < 0) {
        time_error = true;
    };

    if (end_min.value.trim() == '') {
        entered_all_items = false;
    } else if (end_min.value.trim() > 60 || end_min.value.trim() < 0) {
        time_error = true;
    };

    if (entered_all_items == false) {
        didnt_filled_in_all_things_dialog.show()
    } else if (time_error == true) {
        invalid_time.show()
    } else {
        inserting_time_session.style.display = 'none';
        actual_session.style.display = 'block';
    };

});

subject_input_nonmd.addEventListener('change', () => {
    subject_name.value = subject_input_nonmd_area.value
});

back_button.addEventListener('click', () => {
    backing();
});

back_button1.addEventListener('click', () => {
    backing();
});



if (!('customElements' in window && 'attachShadow' in Element.prototype && 'noModule' in HTMLScriptElement.prototype && customElements.get('md-dialog'))) {
    start_button.style.display = 'none';
    subject_name.style.display = 'none';
    fullscreen_button.style.display = 'none';
    back_button.style.display = 'none';
    didnt_filled_in_all_things_dialog.style.display = 'none';
    invalid_time.style.display = 'none';

    start_button_nonmd.style.display = 'block';
    subject_input_nonmd.style.display = 'block';
    universal_button_nonmd.style.display = 'block';
    back_button1.style.display = 'block';
} else {
    start_button_nonmd.style.display = 'none';
    subject_input_nonmd.style.display = 'none';
    universal_button_nonmd.style.display = 'none';
    back_button1.style.display = 'none';
}

start_button_nonmd.addEventListener('click', (event) => {
    event.preventDefault();

    console.log("Trad Button Clicked")

    let start_hr = document.getElementById('start_hr');
    let start_min = document.getElementById('start_min');
    let end_hr = document.getElementById('end_hr');
    let end_min = document.getElementById('end_min');

    subject_name_display.textContent = subject_name.value
    showing_start_hr.textContent = start_hr.value;
    showing_start_min.textContent = start_min.value;
    showing_end_hr.textContent = end_hr.value;
    showing_end_min.textContent = end_min.value;

    let entered_all_items = true;
    let time_error = false;

    if (start_hr.value.trim() == '') {
        entered_all_items = false;
    } else if (start_hr.value.trim() > 24 || start_hr.value.trim() < 0) {
        time_error = true;
    };

    if (start_min.value.trim() == '') {
        entered_all_items = false;
    } else if (start_min.value.trim() > 60 || start_min.value.trim() < 0) {
        time_error = true;
    };

    if (end_hr.value.trim() == '') {
        entered_all_items = false;
    } else if (end_hr.value.trim() > 24 || end_hr.value.trim() < 0) {
        time_error = true;
    };

    if (end_min.value.trim() == '') {
        entered_all_items = false;
    } else if (end_min.value.trim() > 60 || end_min.value.trim() < 0) {
        time_error = true;
    };

    if (entered_all_items == false) {
        alert('Please fill in both the start time and the end time!');
    } else if (time_error == true) {
        alert('Please enter a valid time.');
    } else {
        inserting_time_session.style.display = 'none';
        actual_session.style.display = 'block';
    };

});


// for testing

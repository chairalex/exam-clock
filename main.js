const start_button = document.getElementById('start_button');
const inserting_time_session = document.getElementById('inserting_time_session');
const didnt_filled_in_all_things_dialog = document.getElementById('didnt_filled_in_all_things_dialog')
const actual_session = document.getElementById('actual_session');
const back_button = document.getElementById('back_button');
const showing_start_hr = document.getElementById('showing_start_hr');
const showing_start_min = document.getElementById('showing_start_min');
const showing_end_hr = document.getElementById('showing_end_hr');
const showing_end_min = document.getElementById('showing_end_min');
const subject_name_display = document.getElementById('subject_name_display');
const subject_name = document.getElementById('subject_name');
const invalid_time = document.getElementById('invalid_time');
const fullscreen_button = document.getElementById('fullscreen_button');
const fullscreen_icon = document.getElementById('fullscreen_icon');

actual_session.style.display = 'none';
fullscreen_icon.textContent = 'fullscreen';

fullscreen_button.addEventListener('click', (event) => {
    event.preventDefault();

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreen_icon.textContent = 'fullscreen_exit';
    } else {
        document.exitFullscreen();
        fullscreen_icon.textContent = 'fullscreen';
    }
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
    };

    if (end_hr.value.trim() == '') {
        entered_all_items = false;
    };

    if (end_min.value.trim() == '') {
        entered_all_items = false;
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


back_button.addEventListener('click', (event) => {
    event.preventDefault();


    if (document.fullscreenElement) {
        document.exitFullscreen();
        fullscreen_icon.textContent = 'fullscreen';
    }

    inserting_time_session.style.display = 'block';
    actual_session.style.display = 'none';
});
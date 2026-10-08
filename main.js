const start_button = document.getElementById('start_button');
const inserting_time_session = document.getElementById('inserting_time_session');
const didnt_filled_in_all_things_dialog = document.getElementById('didnt_filled_in_all_things_dialog')
const actual_session = document.getElementById('actual_session');
const back_button = document.getElementById('back_button');

actual_session.style.display = 'none';


start_button.addEventListener('click', (event) => {
    event.preventDefault();
    let start_hr = document.getElementById('start_hr');
    let start_sec = document.getElementById('start_sec');
    let end_hr = document.getElementById('end_hr');
    let end_sec = document.getElementById('end_sec');

    let entered_all_items = true;

    console.log(start_hr.value)

    if (start_hr.value.trim() == '') {
        entered_all_items = false;
    };

    if (start_sec.value.trim() == '') {
        entered_all_items = false;
    };

    if (end_hr.value.trim() == '') {
        entered_all_items = false;
    };

    if (end_sec.value.trim() == '') {
        entered_all_items = false;
    };

    console.log(entered_all_items)

    if (entered_all_items == false) {
        didnt_filled_in_all_things_dialog.show()
    } else {
        inserting_time_session.style.display = 'none';
        actual_session.style.display = 'block';
    }

});


back_button.addEventListener('click', (event) => {
    inserting_time_session.style.display = 'block';
    actual_session.style.display = 'none';
});
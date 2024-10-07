
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const filter1 = document.getElementById('filter1');
const filter2 = document.getElementById('filter2');
const filterimg1 = document.getElementById('filterimg1');
const filterimg2 = document.getElementById('filterimg2');
const filterimg3 = document.getElementById('filterimg3');
const filterimg4 = document.getElementById('filterimg4');
const filterinf1 = document.getElementById('filterinf1');
const filterinf2 = document.getElementById('filterinf2');
const filterinfh = document.getElementById('filterinfh');

option1.addEventListener('change', handleOptionChange);
option2.addEventListener('change', handleOptionChange);
filter1.addEventListener('change', handleOptionChange);
filter2.addEventListener('change', handleOptionChange);


function handleOptionChange() {

    section1.classList.add('hidden');
    section2.classList.add('hidden');
    filterinf1.classList.add('hidden');
    filterinf2.classList.add('hidden');
    filterinfh.classList.add('hidden');
    filterimg1.classList.add('hidden');
    filterimg2.classList.add('hidden');
    filterimg3.classList.add('hidden');
    filterimg4.classList.add('hidden');


    if (option1.checked) {
        section1.classList.remove('hidden'); 
        filterinf1.classList.remove('hidden');
        filterinf2.classList.remove('hidden');
        filterinfh.classList.remove('hidden');

        if (filter1.checked) {
            filterimg1.classList.remove('hidden'); 
        } else if (filter2.checked) {
            filterimg2.classList.remove('hidden'); 
        }
    } else if (option2.checked) {
        section2.classList.remove('hidden'); 
        filterinf1.classList.remove('hidden');
        filterinf2.classList.remove('hidden');
        filterinfh.classList.remove('hidden');

        if (filter1.checked) {
            filterimg3.classList.remove('hidden');
        } else if (filter2.checked) {
            filterimg4.classList.remove('hidden'); 
        }
    }
}


handleOptionChange();

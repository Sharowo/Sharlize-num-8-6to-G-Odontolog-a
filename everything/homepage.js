bookmark('.what-is', '.what');
bookmark('.it-for', '.for');
bookmark('.important', '.importance');
bookmark('.illness', '.sick');


function bookmark(par1, par2) {
  document.querySelector(par1).addEventListener('click', () => {

  document.querySelector('.placeholder').classList.add('hide');

  document.querySelectorAll('.show').forEach(element => {
    element.classList.remove('show');
  });
  document.querySelector(par2).classList.toggle('show');
  }
)}


let input = document.querySelector('.input')
let arr = '0'


document.body.addEventListener('click', e => {
  arrayElem = arr.trim().split(' ')
  len = arrayElem.length-1
  lastElem = arrayElem[len]  

  // 1234...
  if(e.target.className === 'btn num') {
    
    if(isFinite(lastElem)){
      if(arr === '0'){
        arr = ''
        arrayElem[len] = ''
      }
      i = len
    }else{
      i = len + 1
      arrayElem[i] = ''
    }

    if(isNaN(arrayElem[0]) || arrayElem[0]==='Infinity' || arrayElem[0]==='undefined'){
      arr = ''
      arrayElem[0] = ''
    }

    arrayElem[i] = arrayElem[i].concat(e.target.textContent)
    arr = arrayElem.join(' ')
    input.textContent = arr
  }

  // + - x /
  if(e.target.className === 'btn') {
    if(arr.length === 0){
      arrayElem.push('0')
      arrayElem.push(e.target.textContent)
    }
    else if(!isFinite(lastElem) && lastElem.length===1){
      arrayElem[len] = e.target.textContent
    }
    else if(arrayElem.length === 3 && isFinite(arrayElem[0]) && isFinite(arrayElem[2])){
      arrayElem = [String(eval(arr))]
    }else{
      arrayElem.push(e.target.textContent)
    }
    arr = arrayElem.join(' ')
    input.textContent = arr
  }

  // +/-
  if(e.target.className === 'btn sign'){
    if(lastElem===''){
      arrayElem.push('0')
    }
    if(isFinite(lastElem)){
      if(lastElem > 0){
        arrayElem[len] = `-${lastElem}`
      }else{
        arrayElem[len] = arrayElem[len].replace('-', '')
      }
      arr = arrayElem.join(' ')
      input.textContent = arr
    }
  }

  // .
  if(e.target.className === 'btn point'){
    if(arr === ''){
      arr = arr.concat('0',e.target.textContent)
      input.textContent = arr
    }else if(!isNaN(parseFloat(lastElem)) && isFinite(lastElem)){
      if(lastElem.indexOf('.')=== -1){
        arr = arr.concat(e.target.textContent)
        input.textContent = arr
      }
    }
  }

  // =
  if(e.target.className === 'btn equals') {
    if(len < 2){
      alert('Enter the second number!')
    }else{
      arr = String(eval(arr))
      input.textContent = arr
    }
    
  }
    
  // CE - удаление числа
  if(e.target.className === 'btn CE') {
    arrayElem.pop()
    if(arrayElem.length < 1){
      arrayElem = ['0']
    }
    arr = arrayElem.join(' ')
    input.textContent = arr
  }

  // С - удалить все
  if(e.target.className === 'btn С') {
    arr = '0'
    input.textContent = '0'
  }

  // DEL - удаление одного символа
  if(e.target.className === 'btn del') {
    arr = arr.trim()

    if(arr.length <= 1 ){
      arr = '0'
      input.textContent = '0'
    }else{
      arr = arr.substring(0, arr.length - 1)
      input.textContent = arr
    }
  }
})


// Коммиты располагаются в master ветке - основной версии проекта, 
// которая после завершения работ превратится в продукт
// система контроля версий создает ответвления от master-ветки 
// и экспериментировать с проектом, не мешая другим участникам 
// команды

// Система контроля версий бывают:
//  Локальная система хранит файлы на одном устройстве.
//  В локальной системе удобно работать с большими проектами
//  но сложно взаимодействовать с удаленной командой

//  Централизированная система - налажена удаленная работа 
//  но все приязанно к одному серверу. Любой сбой или взлом 
//  может повредить файлы проекта

//  Распределенная система налажена удаленная работа.
//  Если с файлами основного репозитория что-то случится - 
//  проект легко восстановить из копии любого участника 
//  команды

// Из-за удобства и гибкости распределенная систеа версий
// Git считается современным форматом. Это стандарт 
// большинства it-команд

// GIT - это программа, которую нужно установить и подключить
// к проекту для управления системой. 
// GitHub - сайт-хранилище для историй версий проектов


  


  
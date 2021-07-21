module.exports = function toReadable (number) {
  let str = ''

  function fromOneToNine(number, str){
      switch (number) {
          case 1:
            str += 'one'
            break;
          case 2:
              str += "two"
              break;
          case 3:
              str += "three"
              break;
          case 4:
              str += "four"
              break;
          case 5:
              str += "five"
              break;
          case 6:
              str += "six"
              break;
          case 7:
              str += "seven"
              break;
          case 8:
              str += "eight"
              break;
          case 9:
              str += "nine"
              break;
        }
        return str;
  }

  function fromTenToNineteen(number, str){
      switch (number) {
          case 10:
              str += 'ten'
              break;
          case 11:
            str += 'eleven'
            break;
          case 12:
              str += "twelve"
              break;
          case 13:
              str += "thirteen"
              break;
          case 14:
              str += "fourteen"
              break;
          case 15:
              str += "fifteen"
              break;
          case 16:
              str += "sixteen"
              break;
          case 17:
              str += "seventeen"
              break;
          case 18:
              str += "eighteen"
              break;
          case 19:
              str += "nineteen"
              break;
        }
        return str;
  }

  function fromTwentyToNinety(number, str){
      let ten = Math.floor(number/10)
      let num = number % 10

      switch (ten) {
          case 2:
              str += 'twenty'
              break;
          case 3:
            str += 'thirty'
            break;
          case 4:
              str += "forty"
              break;
          case 5:
              str += "fifty"
              break;
          case 6:
              str += "sixty"
              break;
          case 7:
              str += "seventy"
              break;
          case 8:
              str += "eighty"
              break;
          case 9:
              str += "ninety"
              break;
        }

        if(num == 0){
          return fromOneToNine(num, str)
      }
      
        return  fromOneToNine(num, `${str} `);
  }

  function fromHundredToThousand(number, str){
      let hundred = Math.floor(number/100)
      let num = number % 100

      switch (hundred) {
          case 1:
            str += 'one hundred'
            break;
          case 2:
              str += "two hundred"
              break;
          case 3:
              str += "three hundred"
              break;
          case 4:
              str += "four hundred"
              break;
          case 5:
              str += "five hundred"
              break;
          case 6:
              str += "six hundred"
              break;
          case 7:
              str += "seven hundred"
              break;
          case 8:
              str += "eight hundred"
              break;
          case 9:
              str += "nine hundred"
              break;
        }

     

      if(num == 0){
          return fromOneToNine(num, str)
      }

      if(num < 10 && num > 0){
          return fromOneToNine(num, `${str} `)
      }
  
      if(num >= 10 && num < 20){
          return fromTenToNineteen(num, `${str} `)
      }
  
      
      if(num >= 20 && num < 100){
          return fromTwentyToNinety(num, `${str} `)
      }
  }


  if(number === 0){
      return 'zero'
  }
  if(number < 10){
      return fromOneToNine(number, str)
  }

  if(number >= 10 && number < 20){
      return fromTenToNineteen(number, str)
  }

  
  if(number >= 20 && number < 100){
      return fromTwentyToNinety(number, str)
  }

  if(number >= 100 && number < 1000){
      return fromHundredToThousand(number, str)
  }
}

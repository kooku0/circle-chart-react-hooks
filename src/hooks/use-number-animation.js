import { useState } from 'react'

function useNumberAnimation(defaultValue) {
  const [ value, setValue ] = useState(defaultValue)
  let countNum = 0
  function setNumber(number, speed) {
    let interval = setInterval(function () {
      setValue(countNum++)
      if (countNum > number) {
         window.clearInterval(interval);
      }
    }, speed);
  }
  return [value, setNumber]
}

export default useNumberAnimation
